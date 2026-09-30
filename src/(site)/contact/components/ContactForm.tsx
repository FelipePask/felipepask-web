import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { PROJECT_TYPES } from "../lib/constants";
import type { ContactField, ContactState } from "../types";

type ContactFormProps = {
  state: ContactState;
  formAction: (formData: FormData) => void;
  pending: boolean;
  labels: Dictionary["contact"]["form"];
};

const fieldClass =
  "mt-2 block w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-base text-fg placeholder:text-ink-600 transition-colors focus:border-fg focus:outline-none aria-invalid:border-red-400";

export function ContactForm({ state, formAction, pending, labels }: ContactFormProps) {
  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-3xl border border-ink-700 bg-ink-900 p-10 text-center">
        <CheckCircle2 aria-hidden="true" className="size-10 text-accent" />
        <p className="mt-4 text-lg">{labels.success}</p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : undefined;
  const values = state.status === "error" ? state.values : undefined;
  const invalid = (f: ContactField) => Boolean(errors?.[f]);
  const errorId = (f: ContactField) => (invalid(f) ? `${f}-error` : undefined);

  const fieldError = (field: ContactField) =>
    invalid(field) ? (
      <p id={`${field}-error`} className="mt-2 text-sm text-red-300">
        {labels.errors[field]}
      </p>
    ) : null;

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot (oculto para personas y tecnologías de asistencia) */}
      <div aria-hidden="true" className="hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            {labels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values?.name}
            aria-invalid={invalid("name") || undefined}
            aria-describedby={errorId("name")}
            className={fieldClass}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            {labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            defaultValue={values?.email}
            aria-invalid={invalid("email") || undefined}
            aria-describedby={errorId("email")}
            className={fieldClass}
          />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium">
          {labels.projectType}
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={values?.projectType ?? "commercial"}
          className={cn(fieldClass, "appearance-none")}
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {labels.projectTypes[t]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder={labels.messagePlaceholder}
          defaultValue={values?.message}
          aria-invalid={invalid("message") || undefined}
          aria-describedby={errorId("message")}
          className={cn(fieldClass, "resize-y")}
        />
        {fieldError("message")}
      </div>

      {state.status === "error" && !errors && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">
          {labels.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-fg px-8 text-sm font-semibold tracking-[0.15em] text-ink-950 uppercase transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto"
      >
        <Send aria-hidden="true" className="size-4" />
        {pending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
