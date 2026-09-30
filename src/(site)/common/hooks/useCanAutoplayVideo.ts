"use client";

import { useSyncExternalStore } from "react";
import { canAutoplayVideo, subscribeToVideoConditions } from "@/lib/network";

/** false en SSR/primer render, así el póster siempre es lo primero que se pinta (LCP rápido). */
export const useCanAutoplayVideo = () =>
  useSyncExternalStore(subscribeToVideoConditions, canAutoplayVideo, () => false);
