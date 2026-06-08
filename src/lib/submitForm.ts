import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * Global form submission helper.
 *
 * Sends:
 *  1. Internal notification to info@enchantingmp.com
 *  2. Branded auto-reply to the user (if email provided)
 *
 * Used by every form on the site (Contact, QuoteModal, FloatingButtons,
 * GetBestQuoteModal, footer, popups, etc.) — no code duplication.
 */

export interface FormSubmission {
  formName: string;          // e.g. "Contact Form", "Tour Inquiry"
  fullName: string;
  email: string;
  phone?: string;
  destination?: string;
  packageName?: string;
  travelDate?: string;
  travelers?: string;
  message?: string;
  /** Any additional structured fields to include in the notification email. */
  extraFields?: Record<string, string | undefined>;
  /** Optional override for the user auto-reply template (defaults to 'inquiry-auto-reply'). */
  autoReplyTemplate?: string;
}

const baseSchema = z.object({
  formName: z.string().min(1).max(100),
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  destination: z.string().max(120).optional(),
  packageName: z.string().max(200).optional(),
  travelDate: z.string().max(60).optional(),
  travelers: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
});

// Simple client-side rapid-submit guard (per form name)
const lastSubmitAt = new Map<string, number>();
const RATE_LIMIT_MS = 4000;

export async function submitForm(
  data: FormSubmission
): Promise<{ ok: boolean; error?: string }> {
  // Validation
  const parsed = baseSchema.safeParse(data);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message || "Invalid form data";
    return { ok: false, error: first };
  }

  // Rate limit
  const now = Date.now();
  const last = lastSubmitAt.get(data.formName) ?? 0;
  if (now - last < RATE_LIMIT_MS) {
    return { ok: false, error: "Please wait a moment before submitting again." };
  }
  lastSubmitAt.set(data.formName, now);

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const cleanExtras = Object.fromEntries(
    Object.entries(data.extraFields ?? {}).filter(([, v]) => v && v.trim().length)
  ) as Record<string, string>;

  const baseData = {
    formName: data.formName,
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || undefined,
    destination: data.destination?.trim() || undefined,
    packageName: data.packageName?.trim() || undefined,
    travelDate: data.travelDate?.trim() || undefined,
    travelers: data.travelers?.trim() || undefined,
    message: data.message?.trim() || undefined,
    submittedAt,
    pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    extraFields: cleanExtras,
  };

  const idempotencyBase = `${data.formName}-${data.email}-${now}`;

  try {
    // 1. Internal notification (template has fixed `to: info@enchantingmp.com`)
    const { error: notifyError } = await supabase.functions.invoke(
      "send-transactional-email",
      {
        body: {
          templateName: "inquiry-notification",
          recipientEmail: "info@enchantingmp.com",
          idempotencyKey: `notify-${idempotencyBase}`,
          templateData: baseData,
        },
      }
    );
    if (notifyError) throw notifyError;

    // 2. Auto-reply to the user
    await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: data.autoReplyTemplate || "inquiry-auto-reply",
        recipientEmail: baseData.email,
        idempotencyKey: `reply-${idempotencyBase}`,
        templateData: { fullName: baseData.fullName, formName: baseData.formName },
      },
    });

    return { ok: true };
  } catch (err: any) {
    console.error("Form submission failed:", err);
    lastSubmitAt.delete(data.formName); // allow retry on failure
    return { ok: false, error: err?.message || "Something went wrong. Please try again." };
  }
}

/** Convenience wrapper that handles toast notifications. */
export async function submitFormWithToast(data: FormSubmission) {
  const result = await submitForm(data);
  if (result.ok) {
    toast.success("Thank you! Your inquiry has been submitted successfully.");
  } else {
    toast.error(result.error || "Something went wrong. Please try again.");
  }
  return result;
}
