// Fire-and-forget tracker. Uses sendBeacon when available so it survives navigation.
export function track(
  event: string,
  data?: { asset?: string; ref?: string }
) {
  try {
    const payload = JSON.stringify({ event, ...(data ?? {}) });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/public/track", blob);
      return;
    }
    void fetch("/api/public/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* swallow — analytics must never break UX */
  }
}

export const PROSPECTUS_URL = "/nexuscon-26-prospectus.pdf";
