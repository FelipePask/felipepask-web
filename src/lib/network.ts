type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  addEventListener?: (type: "change", cb: () => void) => void;
  removeEventListener?: (type: "change", cb: () => void) => void;
};

const SLOW_CONNECTIONS = new Set(["slow-2g", "2g", "3g"]);
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export const getConnection = (): NetworkInformation | undefined =>
  typeof navigator === "undefined"
    ? undefined
    : (navigator as Navigator & { connection?: NetworkInformation }).connection;

/**
 * El video decorativo solo vale la pena descargarlo si el visitante no está en una conexión
 * lenta o con ahorro de datos, y no pidió movimiento reducido.
 * Los navegadores sin Network Information API (Safari/Firefox) devuelven true;
 * los archivos son livianos, así que sigue siendo seguro con datos móviles.
 */
export function canAutoplayVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia(REDUCED_MOTION).matches) return false;
  const connection = getConnection();
  if (connection?.saveData) return false;
  if (connection?.effectiveType && SLOW_CONNECTIONS.has(connection.effectiveType)) return false;
  return true;
}

export function subscribeToVideoConditions(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  const connection = getConnection();
  mq.addEventListener("change", onChange);
  connection?.addEventListener?.("change", onChange);
  return () => {
    mq.removeEventListener("change", onChange);
    connection?.removeEventListener?.("change", onChange);
  };
}
