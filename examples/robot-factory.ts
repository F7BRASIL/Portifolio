/**
 * Exemplo simplificado — factory de robôs (padrão Strategy).
 * Código real em produção; nomes de portais omitidos.
 */
import type { Robot } from "./types";

export function getRobot(): Robot {
  const mode = (process.env.ROBOT_MODE || "").trim().toLowerCase();
  if (mode === "portal") {
    return createPortalRobot();
  }
  return mockRobot;
}

/** Robô real: Playwright + CDP + sessão persistente por portal. */
function createPortalRobot(): Robot {
  return {
    async run(ctx) {
      const page = await ensureLoggedInPage(ctx.companyId);
      await fillSimulationForm(page, ctx.lead);
      await waitForResult(page);
      return { ok: true };
    },
  };
}

function mockRobot(): Robot {
  return {
    async run() {
      return { ok: true };
    },
  };
}

async function ensureLoggedInPage(_companyId: string) {
  // Hub CDP: reutiliza guia já logada quando possível
  throw new Error("implementação omitida no portfólio");
}

async function fillSimulationForm(_page: unknown, _lead: unknown) {}
async function waitForResult(_page: unknown) {}

interface Robot {
  run(ctx: { companyId: string; lead: unknown }): Promise<{ ok: boolean }>;
}
