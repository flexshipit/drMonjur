"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
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
    <section id="visit" className="scroll-mt-24 bg-forest py-16 text-ivory sm:py-20">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow light>Visit</Eyebrow>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            Call, write, or prepare a short visit note.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ivory/75 sm:text-lg">
            Serials for Gazipur are taken on the Popular hotline. For Mirpur,
            call New Peacy Lab Ltd. His personal mobile and email are listed
            here as given.
          </p>

          <div className="mt-8 space-y-4">
            {chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="border border-ivory/15 bg-white/5 p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
                  {chamber.area}
                </p>
                <p className="font-display mt-3 text-xl">{chamber.name}</p>
                <p className="mt-1 text-ivory/75">{chamber.hours}</p>
                <p className="mt-4 inline-flex items-start gap-2 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {chamber.address}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {chamber.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-mint"
                    >
                      <Phone className="size-4" aria-hidden />
                      {phone.value}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="border border-ivory/15 bg-white/5 p-6">
              <p className="inline-flex items-center gap-2 text-sm">
                <Mail className="size-4 text-copper" aria-hidden />
                <a href={doctor.emailHref} className="hover:underline">
                  {doctor.email}
                </a>
              </p>
              <p className="mt-3 text-sm text-ivory/70">
                BMDC {doctor.bmdc}. {doctor.bcs}.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-ivory/10 bg-ivory p-6 text-ink sm:p-8">
          {note ? (
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                <Check className="size-4" aria-hidden />
                Visit note ready
              </p>
              <h3
                tabIndex={-1}
                ref={headingRef}
                className="font-display mt-3 text-2xl font-semibold outline-none"
              >
                {note.name}
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Phone</dt>
                  <dd className="font-medium">{note.phone}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Concern</dt>
                  <dd className="text-right font-medium">{note.concern}</dd>
                </div>
                {note.note ? (
                  <div>
                    <dt className="text-muted">Note</dt>
                    <dd className="mt-1 font-medium">{note.note}</dd>
                  </div>
                ) : null}
              </dl>
              <p className="mt-5 text-sm leading-6 text-muted">
                This page keeps the note on your screen. It does not send it to
                the chamber. Call {doctor.mobile}, the Popular hotline
                09666787816, or New Peacy Lab Ltd. to confirm a serial.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={copyNote}
                  className="inline-flex items-center justify-center gap-2 bg-forest px-5 py-3 text-sm font-semibold text-ivory hover:bg-teal"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy visit note"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setNote(null);
                    setValues(initial);
                  }}
                  className="border border-line px-5 py-3 text-sm font-semibold text-forest hover:bg-sand"
                >
                  Start another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="font-display text-2xl font-semibold">
                Prepare a visit note
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                For {doctor.shortName}, BMDC {doctor.bmdc}.
              </p>

              <div className="mt-6 space-y-4">
                <Field
                  id={`${formId}-name`}
                  label="Full name"
                  error={errors.name}
                  value={values.name}
                  onChange={(value) => update("name", value)}
                  autoComplete="name"
                />
                <Field
                  id={`${formId}-phone`}
                  label="Phone"
                  error={errors.phone}
                  value={values.phone}
                  onChange={(value) => update("phone", value)}
                  autoComplete="tel"
                  inputMode="tel"
                />
                <div>
                  <label
                    htmlFor={`${formId}-concern`}
                    className="text-sm font-semibold text-forest"
                  >
                    Area of concern
                  </label>
                  <select
                    id={`${formId}-concern`}
                    value={values.concern}
                    onChange={(event) => update("concern", event.target.value)}
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={errors.concern ? `${formId}-concern-error` : undefined}
                    className="mt-2 w-full appearance-none border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-teal"
                  >
                    <option value="">Select one</option>
                    {concerns.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.concern ? (
                    <p id={`${formId}-concern-error`} className="mt-1.5 text-sm text-rose">
                      {errors.concern}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor={`${formId}-note`}
                    className="text-sm font-semibold text-forest"
                  >
                    Note <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <textarea
                    id={`${formId}-note`}
                    rows={4}
                    maxLength={400}
                    value={values.note}
                    onChange={(event) => update("note", event.target.value)}
                    className="mt-2 w-full resize-y border border-line px-4 py-3 text-sm outline-none focus:border-teal"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center bg-forest px-5 py-3.5 text-sm font-semibold text-ivory hover:bg-teal"
              >
                Create visit note
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, error, value, onChange, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-forest">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full border border-line px-4 py-3 text-sm outline-none focus:border-teal"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}
