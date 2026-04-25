# Kanye West Clicker - Deploy na Vercel

Este guia mostra como publicar o jogo na Vercel e ativar a leaderboard compartilhada.

## 1) Estrutura esperada do projeto

No diretório raiz, mantenha:

- `index.html`
- `main.css`
- `main.js`
- `leaderboard.json`
- `api/leaderboard.js`
- `assets/...`

A pasta `api` vira automaticamente endpoint serverless na Vercel.

## 2) Publicar pela interface da Vercel (mais simples)

1. Suba o projeto para um repositório no GitHub.
2. Acesse https://vercel.com/new
3. Importe o repositório.
4. Em **Framework Preset**, deixe como **Other** (ou detectado automaticamente).
5. Clique em **Deploy**.

Com isso, seu site já entra no ar.

## 3) Ativar leaderboard compartilhada (entre jogadores)

Seu arquivo `api/leaderboard.js` usa estas variáveis de ambiente:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Sem isso, a API retorna erro e o jogo cai para leaderboard local do navegador.

### Como configurar

1. No projeto da Vercel, abra **Settings > Environment Variables**.
2. Crie as duas variáveis acima com os valores do seu banco KV (REST URL e token).
3. Salve e faça **Redeploy**.

Se você usar uma integração de KV/Redis pelo Marketplace da Vercel, normalmente essas variáveis já são disponibilizadas automaticamente.

## 4) Testar se está funcionando

Depois do deploy, teste:

- `https://SEU-DOMINIO.vercel.app/` (site)
- `https://SEU-DOMINIO.vercel.app/api/leaderboard` (API)

Resultado esperado do endpoint:

```json
{ "scores": [] }
```

ou com players já salvos.

## 5) Publicar via CLI (opcional)

Se preferir terminal:

```bash
npm i -g vercel
vercel login
vercel
```

No primeiro deploy, responda as perguntas de link do projeto.

Para produção:

```bash
vercel --prod
```

## 6) Atualizações futuras

Sempre que você fizer mudanças:

1. Commit + push no GitHub.
2. A Vercel publica automaticamente (se o repositório estiver conectado).

## 7) Solução de problemas

- **Leaderboard não carrega para todos**:
  - Verifique se `KV_REST_API_URL` e `KV_REST_API_TOKEN` existem no projeto da Vercel.
  - Verifique se está acessando o mesmo domínio publicado.
- **Só você vê seu score**:
  - Isso indica fallback local (cache/localStorage), não leaderboard compartilhada.
- **Erro 405 na API**:
  - A rota aceita apenas `GET` e `POST`.

## 8) Observação importante

`leaderboard.json` funciona como seed/fallback local. A leaderboard global de verdade depende da API em `api/leaderboard.js` + KV configurado.
