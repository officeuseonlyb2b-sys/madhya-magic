import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<
    "loading" | "valid" | "already" | "invalid" | "submitting" | "done" | "error"
  >("loading");

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (!res.ok) { setState("invalid"); return; }
        if (data.valid === false && data.reason === "already_unsubscribed") setState("already");
        else if (data.valid) setState("valid");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error || !data?.success) setState("error");
    else setState("done");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center bg-[#fffaf2] border border-[#f0e3c8] rounded-2xl p-10 shadow-sm">
        <h1 className="font-display text-3xl text-[#b8860b] mb-2">Enchanting MP</h1>
        <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-6" />
        {state === "loading" && <p className="text-muted-foreground">Validating your link…</p>}
        {state === "valid" && (
          <>
            <h2 className="font-display text-xl mb-3">Unsubscribe from emails?</h2>
            <p className="text-sm text-muted-foreground mb-6">
              You will stop receiving emails from Enchanting Madhya Pradesh.
            </p>
            <Button onClick={confirm} className="bg-amber-500 hover:bg-amber-600 text-white">
              Confirm Unsubscribe
            </Button>
          </>
        )}
        {state === "submitting" && <p>Processing…</p>}
        {state === "done" && (
          <>
            <h2 className="font-display text-xl mb-3">You've been unsubscribed</h2>
            <p className="text-sm text-muted-foreground">We won't email you again. Sorry to see you go.</p>
          </>
        )}
        {state === "already" && (
          <>
            <h2 className="font-display text-xl mb-3">Already unsubscribed</h2>
            <p className="text-sm text-muted-foreground">This email is already removed from our list.</p>
          </>
        )}
        {state === "invalid" && (
          <>
            <h2 className="font-display text-xl mb-3">Invalid link</h2>
            <p className="text-sm text-muted-foreground">This unsubscribe link is invalid or expired.</p>
          </>
        )}
        {state === "error" && (
          <>
            <h2 className="font-display text-xl mb-3">Something went wrong</h2>
            <p className="text-sm text-muted-foreground">Please try again later.</p>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
