import { useState } from "react";
import { site } from "@/content/site";

export function RSVP() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) return;
    setDone(true);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 border-t hairline">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--deep)]/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
                RSVP Updates
              </span>
            </div>
            <h2 className="mt-5 font-display font-semibold text-[var(--deep)] text-3xl md:text-[40px] leading-[1.05] tracking-[-0.03em] text-balance">
              {site.rsvp.title}
            </h2>
            <p className="mt-5 text-sm text-[var(--deep)]/65 max-w-md">
              {site.rsvp.note} Contact:{" "}
              <a
                href={`mailto:${site.rsvp.contact}`}
                className="text-[var(--deep)] underline underline-offset-4 decoration-[var(--mist)] hover:decoration-[var(--deep)]"
              >
                {site.rsvp.contact}
              </a>
            </p>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={submit}
              className="rounded-3xl border hairline bg-background p-6 md:p-8"
            >
              {done ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-12 w-12 rounded-full bg-[var(--deep)] text-[var(--frost)] grid place-items-center text-xl">
                    ✓
                  </div>
                  <h3 className="mt-5 font-display text-xl text-[var(--deep)]">
                    You're on the list.
                  </h3>
                  <p className="mt-2 text-sm text-[var(--deep)]/65">
                    We'll email you the moment RSVP opens.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field
                    label="Name"
                    value={name}
                    onChange={setName}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@company.com"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--deep)] text-[var(--frost)] px-6 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.02]"
                  >
                    Notify Me for RSVP <span aria-hidden>→</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--deep)]/55">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b hairline focus:border-[var(--deep)] outline-none py-3 text-[15px] text-[var(--deep)] placeholder:text-[var(--deep)]/35 transition-colors"
      />
    </label>
  );
}
