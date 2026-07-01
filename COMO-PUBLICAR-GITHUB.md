# Como publicar no GitHub — passo a passo

Pasta pronta: `docs/carreira/github-portfolio/`

---

## 1. Criar conta (se ainda não tiver)

1. Acesse https://github.com/signup
2. E-mail: **fabio98530404@gmail.com**
3. Username sugerido: **`fabionevesdev`** ou **`fabio-neves-silva`**

---

## 2. Criar repositório público

1. GitHub → **New repository**
2. Nome: **`portfolio`** ou **`automacao-financeira-portfolio`**
3. **Public**
4. Marque **Add a README** → Create

---

## 3. Enviar estes arquivos

No PowerShell (ajuste o caminho se necessário):

```powershell
cd "C:\Users\Notebook\OneDrive\Área de Trabalho\AUTOMAÇÃO FINANCEIRA\docs\carreira\github-portfolio"

git init
git add README.md .gitignore examples/
git commit -m "Portfólio técnico — Fábio Neves da Silva"

git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo username que criou.

---

## 4. Pin no perfil (opcional)

GitHub → seu perfil → **Customize your pins** → selecione o repo `portfolio`.

---

## 5. Colocar link no currículo

Depois de publicar, adicione no `curriculo.html`:

```html
<a href="https://github.com/SEU-USUARIO/portfolio">GitHub</a>
```

---

## ⚠️ Nunca subir

- Pasta `AUTOMAÇÃO FINANCEIRA` inteira
- `.env`, `agent.env`, `data/`, `config/portais/`
- Screenshots com nomes de clientes ou logins

Este pacote contém **só README + exemplos genéricos**.

---

## 6. Atualizar candidaturas

No Programathor/Kairogen, campo GitHub:

```
https://github.com/SEU-USUARIO/portfolio
```
