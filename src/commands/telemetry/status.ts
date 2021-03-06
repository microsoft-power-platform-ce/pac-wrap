import { PacOptions, pac } from "../../pac.js";

export function showTelemetryStatus(pacOptions?: PacOptions) {
  return pac(["telemetry", "status"], pacOptions);
}
