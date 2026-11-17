"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { chambers, concerns, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";

const initial = { name: "", phone: "", concern: "", note: "" };

export default function Visit() {
  const formId = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState(null);
  const [copied, setCopied] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (note) headingRef.current?.focus();
  }, [note]);

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Enter your full name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a phone number with at least 10 digits.";
    if (!values.concern) next.concern = "Choose an area of concern.";
    return next;
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setCopied(false);
    setNote({
      name: values.name.trim(),
      phone: values.phone.trim(),
      concern: values.concern,
      note: values.note.trim(),
    });
  }

  async function copyNote() {
    if (!note) return;
    const lines = [
      `Visit note for ${doctor.name}`,
      `Name: ${note.name}`,
      `Phone: ${note.phone}`,
      `Concern: ${note.concern}`,
      note.note ? `Note: ${note.note}` : "",
      `Doctor: ${doctor.name}, BMDC ${doctor.bmdc}`,
      `Mobile: ${doctor.mobile}`,
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="visit" className="scroll-mt-24 bg-gradient-to-b from-forest to-forest-dark py-16 text-ivory sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Eyebrow light>Consultation &amp; Serial</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-normal sm:text-4xl leading-tight">
            Plan your consultation or prepare a quick visit note
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/80">
            For Gazipur chamber, call the Popular hotline. For Mirpur chamber, contact New Peacy
            Lab Ltd. You can also prepare a short summary note below to take with you or share directly.
          </p>

          <div className="mt-8 space-y-4">
            {chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-mint">
                    {chamber.area}
                  </span>
                  <span className="text-xs text-ivory/70">{chamber.hours}</span>
                </div>
                <p className="font-display mt-2 text-xl font-medium text-white">{chamber.name}</p>
                <p className="mt-3 flex items-start gap-2 text-xs sm:text-sm text-ivory/75">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                  <span>{chamber.address}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chamber.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-mint hover:bg-white/20 transition-colors"
                    >
                      <Phone className="size-3" aria-hidden />
                      <span>{phone.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="inline-flex items-center gap-2 text-sm text-ivory/90">
                <Mail className="size-4 text-mint" aria-hidden />
                <a href={doctor.emailHref} className="hover:underline">
                  {doctor.email}
                </a>
              </p>
              <p className="mt-2 text-xs text-ivory/70">
                Doctor's Direct Contact: <span className="font-semibold text-white">{doctor.mobile}</span> · BMDC {doctor.bmdc}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white p-7 text-ink shadow-2xl sm:p-9">
          {note ? (
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-mint/70 px-3 py-1 text-xs font-semibold text-teal shadow-2xs">
                <Check className="size-3.5" aria-hidden />
                <span>Visit note prepared</span>
              </div>
              <h3
                tabIndex={-1}
                ref={headingRef}
                className="font-display mt-4 text-2xl font-normal outline-none text-forest"
              >
                {note.name}
              </h3>
              <div className="mt-5 rounded-2xl border border-teal/15 bg-sand/80 p-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-line/70 pb-3">
                  <dt className="text-muted">Contact Phone</dt>
                  <dd className="font-medium text-forest">{note.phone}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line/70 pb-3">
                  <dt className="text-muted">Clinical Concern</dt>
                  <dd className="text-right font-medium text-forest">{note.concern}</dd>
                </div>
                {note.note ? (
                  <div>
                    <dt className="text-muted">Notes / Symptoms</dt>
                    <dd className="mt-1 font-medium text-ink">{note.note}</dd>
                  </div>
                ) : null}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                This note is saved locally on your screen for your convenience. Please call the hotline
                or chamber directly to confirm your token or serial time.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={copyNote}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-md shadow-forest/15 hover:bg-teal transition-all"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  <span>{copied ? "Copied to Clipboard" : "Copy Visit Note"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setNote(null);
                    setValues(initial);
                  }}
                  className="rounded-xl border border-line bg-white px-5 py-3.5 text-sm font-semibold text-forest shadow-2xs hover:bg-sand transition-all"
                >
                  Start another note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
                <Sparkles className="size-3.5" aria-hidden />
                <span>Patient Helper</span>
              </div>
              <h3 className="font-display mt-2 text-2xl font-normal text-forest">
                Prepare a visit note
              </h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                Fill this out before your consultation with {doctor.shortName} to summarize your key questions.
              </p>

              <div className="mt-6 space-y-4">
                <Field
                  id={`${formId}-name`}
                  label="Patient full name"
                  error={errors.name}
                  value={values.name}
                  onChange={(value) => update("name", value)}
                  autoComplete="name"
                  placeholder="e.g. Md. Rahman"
                />
                <Field
                  id={`${formId}-phone`}
                  label="Contact phone number"
                  error={errors.phone}
                  value={values.phone}
                  onChange={(value) => update("phone", value)}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="e.g. 01700-000000"
                />
                <div>
                  <label
                    htmlFor={`${formId}-concern`}
                    className="text-xs font-semibold uppercase tracking-wider text-forest"
                  >
                    Area of clinical concern
                  </label>
                  <select
                    id={`${formId}-concern`}
                    value={values.concern}
                    onChange={(event) => update("concern", event.target.value)}
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={errors.concern ? `${formId}-concern-error` : undefined}
                    className="mt-2 w-full appearance-none rounded-xl border border-line/80 bg-sand/40 px-4 py-3 text-sm text-ink outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
                  >
                    <option value="">Select an area of concern</option>
                    {concerns.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.concern ? (
                    <p id={`${formId}-concern-error`} className="mt-1.5 text-xs text-rose">
                      {errors.concern}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor={`${formId}-note`}
                    className="text-xs font-semibold uppercase tracking-wider text-forest"
                  >
                    Brief description or medical history <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <textarea
                    id={`${formId}-note`}
                    rows={4}
                    maxLength={400}
                    value={values.note}
                    onChange={(event) => update("note", event.target.value)}
                    placeholder="Mention previous diagnosis, biopsy results, or specific concerns..."
                    className="mt-2 w-full resize-y rounded-xl border border-line/80 bg-sand/40 px-4 py-3 text-sm outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-md shadow-forest/15 transition-all hover:bg-teal hover:shadow-lg"
              >
                Generate Visit Note
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, error, value, onChange, placeholder, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-forest">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line/80 bg-sand/40 px-4 py-3 text-sm outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}
