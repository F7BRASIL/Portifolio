# Arquitetura — visão técnica

## Fluxo de um lead

```
[Cadastro web] → POST /api/leads → [SQLite + fila]
                                        ↓
                              [Agente local poll]
                                        ↓
                              [Playwright por portal]
                                        ↓
                              [Status SSE / painel]
```

## Decisões de design

| Decisão | Motivo |
|---------|--------|
| Agente na loja | Portais exigem IP/sessão local; Chrome visível para assist humano |
| Hub CDP | Evitar relogin a cada simulação (~30–90s economizados) |
| Config declarativa | Cada financeira tem selectors/waits em arquivos versionados |
| Sync antes da proposta | Credenciais do vendedor mudam; nuvem é source of truth |
| Zod na API | Falha rápida em input inválido; tipos inferidos |

## Stack

- **Backend:** Node.js 22, TypeScript, Express, better-sqlite3
- **Automação:** Playwright, Chrome CDP
- **Deploy:** tsc build, PowerShell, VPS Linux
- **Módulo extra:** CRM varejo com PostgreSQL + filas WhatsApp
