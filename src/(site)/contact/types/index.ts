import type { ContactInput } from "../lib/schema";

export type ContactField = "name" | "email" | "message";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; fieldErrors?: Partial<Record<ContactField, true>>; values?: Partial<ContactInput> };
