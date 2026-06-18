/**
 * Cloudinary URL helper — injects delivery transformations into a raw
 * Cloudinary upload URL **without** changing the asset or its visual
 * appearance. Safe to call on non-Cloudinary URLs (returned untouched)
 * and idempotent (won't double-inject if transformations already exist).
 *
 * Image defaults:  f_auto, q_auto, dpr_auto
 * Video defaults:  f_auto, q_auto, vc_auto
 *
 * Both accept an optional width via `w`.
 */

const CLOUDINARY_HOST = "res.cloudinary.com";

type CldOpts = {
  /** Pixel width transformation (e.g. 720). */
  w?: number;
  /** Extra raw Cloudinary transformation params, comma-joined. */
  extra?: string;
};

function injectTransform(url: string, kind: "image" | "video", opts: CldOpts = {}): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes(CLOUDINARY_HOST)) return url;

  // Match Cloudinary delivery URLs: /<resource>/upload/...
  // Supports image, video, raw, etc.
  const m = url.match(/(\/(?:image|video|raw)\/upload\/)(.*)$/);
  if (!m) return url;

  const head = url.slice(0, m.index! + m[1].length);
  const tail = m[2];

  // If a transformation segment is already present (heuristic: starts with
  // a token containing f_/q_/w_/v… BEFORE the version `v123…/`), leave it.
  const firstSeg = tail.split("/")[0] ?? "";
  const looksLikeTransform =
    /(^|,)(f_|q_|w_|h_|c_|dpr_|vc_|so_|du_|e_|ar_|fl_|g_|b_|o_|l_|u_)/.test(firstSeg);

  const params: string[] = [];
  params.push("f_auto", "q_auto");
  if (kind === "image") params.push("dpr_auto");
  if (kind === "video") params.push("vc_auto");
  if (opts.w && Number.isFinite(opts.w)) params.push(`w_${Math.round(opts.w)}`);
  if (opts.extra) params.push(opts.extra);

  if (looksLikeTransform) {
    // Don't fight an explicit transform that the author set deliberately.
    return url;
  }

  return `${head}${params.join(",")}/${tail}`;
}

export function cldImage(url: string, opts: CldOpts = {}): string {
  return injectTransform(url, "image", opts);
}

export function cldVideo(url: string, opts: CldOpts = {}): string {
  return injectTransform(url, "video", opts);
}

/** Pick a sensible video width for the current viewport. */
export function pickVideoWidth(isMobile: boolean): number {
  return isMobile ? 540 : 900;
}
