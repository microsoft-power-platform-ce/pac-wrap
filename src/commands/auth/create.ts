import { PacOptions, pac } from "../../pac.js";
import createArgs from "../createArgs.js";

export function createAuth(
  options: CreateAuthOptions,
  pacOptions?: PacOptions
) {
  const args = createArgs(options, { tenantId: "tenant" });
  return pac(["auth", "create", ...args], pacOptions);
}

interface CreateAuthOptions {
  name?: string;
  kind?: AuthKind;
  url?: string;
  username?: string;
  password?: string;
  applicationId?: string;
  clientSecret?: string;
  tenantId?: string;
  cloud?: Cloud;
}

type AuthKind = "Admin" | "Dataverse";
type Cloud = "Public" | "Tip1" | "Tip2" | "UsGov" | "UsGovHigh" | "UsGovDod";
