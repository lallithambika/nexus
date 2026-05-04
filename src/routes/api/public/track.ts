import { createFileRoute } from "@tanstack/react-router";

// Lightweight, no-PII download/event tracking endpoint.
// Logs to the worker console (visible in server function logs).
export const Route = createFileRoute("/api/public/track")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json().catch(() => ({}))) as {
            event?: string;
            asset?: string;
            ref?: string;
          };
          const event = String(body.event ?? "unknown").slice(0, 64);
          const asset = body.asset ? String(body.asset).slice(0, 128) : undefined;
          const ref = body.ref ? String(body.ref).slice(0, 128) : undefined;

          const ua = request.headers.get("user-agent")?.slice(0, 200) ?? "";
          const country =
            request.headers.get("cf-ipcountry") ??
            request.headers.get("x-vercel-ip-country") ??
            "??";

          // Structured log line — easy to grep in worker logs.
          console.log(
            JSON.stringify({
              t: "track",
              ts: new Date().toISOString(),
              event,
              asset,
              ref,
              country,
              ua,
            })
          );

          return Response.json({ ok: true });
        } catch (err) {
          console.error("track error", err);
          return Response.json({ ok: false }, { status: 200 });
        }
      },
      // Allow simple beacon GET pings as a fallback (sendBeacon will use POST).
      GET: async () => Response.json({ ok: true }),
    },
  },
});
