"use client";

import { useActionState } from "react";
import { sendContact } from "../actions/send-contact.action";
import type { ContactState } from "../types";

const INITIAL_STATE: ContactState = { status: "idle" };

export function useContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, INITIAL_STATE);
  return { state, formAction, pending };
}
