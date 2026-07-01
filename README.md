# Fábio Neves da Silva

**Desenvolvedor Full Stack** · TypeScript · Node.js · Integrações · Automação web

Curitiba, PR · remoto · [fabio98530404@gmail.com](mailto:fabio98530404@gmail.com) · [GitHub @F7BRASIL](https://github.com/F7BRASIL)

---

## Sobre

Bacharel em **Ciências Econômicas (UFPR, 2015)**. Desenvolvo sistemas full stack com foco em **integrações, APIs e automação web** — não só CRUD, mas produtos que rodam em operação real.

Projeto principal: plataforma B2B para varejo automotivo/financeiro com arquitetura **nuvem + agente local**, robôs **Playwright**, multi-tenant e painel operacional.

---

## Projeto em destaque — Plataforma F7

Sistema que automatiza envio de propostas de crédito veicular em **múltiplos portais bancários**.

```
┌─────────────────┐     HTTPS/API      ┌──────────────────┐
│  Servidor nuvem │ ◄────────────────► │  Agente na loja  │
│  Express + TS   │                    │  Windows+Chrome  │
└────────┬────────┘                    └────────┬─────────┘
         │                                      │
         ▼                                      ▼
   SQLite · multi-tenant                 Playwright · CDP hub
```

### O que implementei

- API REST com **Express + TypeScript + Zod**
- **Playwright** multi-portal: login, simulação, sessão quente, retry
- **Hub Chrome (CDP)** — reutilização de abas logadas entre simulações
- Agente Windows com painel local, sync de config/credenciais da nuvem
- Fila de leads, status por financeira, deploy automatizado (build + VPS)
- Módulo CRM varejo: **Node + PostgreSQL** + orquestração WhatsApp

### Stack

| Área | Tecnologias |
|------|-------------|
| Backend | Node.js 22, TypeScript, Express, Zod |
| Dados | SQLite, SQL, PostgreSQL (módulo CRM) |
| Automação | Playwright, CDP, Python (espelho de fluxos) |
| Frontend | Painéis web, SSE, admin multi-loja |
| Ops | PowerShell, Git, scripts de verificação e deploy |

### Trechos de código (exemplos)

- [`examples/robot-factory.ts`](./examples/robot-factory.ts) — factory de robôs (Strategy)
- [`examples/validation-zod.ts`](./examples/validation-zod.ts) — validação API com Zod
- [`examples/architecture.md`](./examples/architecture.md) — fluxo e decisões de arquitetura

> Repositório **documentação + exemplos**. Código de produção é privado (credenciais, dados de clientes).

---

## Outros projetos

- **Campanha Inteligente (Avoip):** demos HTML interativas multi-segmento para varejo (WhatsApp + código na loja)
- **Scripts operacionais:** health-check, security-check, bench de performance, testes por integração

---

## Formação

- **Ciências Econômicas** — Universidade Federal do Paraná (UFPR) · 2015

---

## Contato

📧 fabio98530404@gmail.com  
🐙 https://github.com/F7BRASIL  
📍 Curitiba, PR — disponível **100% remoto**

---

## Em evolução

- NestJS / Next.js
- Testes E2E no CI
- Filas com Redis/SQS
- Observabilidade (logs estruturados)
