# Link in Bio — Michael Maia

Página de links própria, 100% estática (HTML + CSS + JS puro), sem custos e sem dependências.

## Estrutura

```
index.html       → estrutura da página (raramente precisa mexer)
css/style.css    → visual (cores no topo do arquivo, em :root)
js/config.js     → SEUS DADOS: nome, bio, redes, links e itens do Setup
js/app.js        → monta a página a partir do config.js
assets/          → (opcional) suas imagens locais
```

**No dia a dia, você só edita `js/config.js`.**

## Antes de publicar

1. Em `js/config.js`, troque `SEU_USUARIO` (Twitch) e `SEU_CANAL` (YouTube) pelos seus links reais — aparecem em `socials` e em `links`.
2. Recomendado: as imagens do avatar e das miniaturas ainda apontam para o servidor da Keepo. Se você cancelar a Keepo, elas podem sumir. Salve-as na pasta `assets/` (ex.: `assets/avatar.jpg`) e troque os caminhos no `config.js` (e a `og:image` no `index.html`).

## Ver no computador

Abra o `index.html` no navegador, ou rode um servidor local:

```bash
python -m http.server 5500
```

e acesse http://localhost:5500

## Adicionar um item no "Meu Setup"

1. Gere o **link de afiliado** do produto (Mercado Livre: painel de Afiliados → link `https://meli.la/...`; AliExpress: link `https://s.click.aliexpress.com/...`).
2. Abra o produto, clique com o botão direito na foto → "Copiar endereço da imagem".
3. Adicione em `setup.items` no `js/config.js`:

```js
{
  group: "Live & Games",          // Home Office, PC ou Live & Games (lista em setup.groups)
  name: "Nome curto do produto",
  category: "Microfone",
  image: "https://http2.mlstatic.com/....webp",
  url: "https://meli.la/xxxxxxx"  // seu link de afiliado
}
```

O selo da loja (Mercado Livre, AliExpress ou Amazon) aparece sozinho, de acordo com o link. Para criar um novo filtro, acrescente o nome em `setup.groups`.

## Publicar de graça

### Opção 1 — GitHub Pages (recomendado)
1. Crie um repositório público no GitHub (ex.: `links`) e envie estes arquivos.
2. No repositório: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Em ~1 minuto o site fica em `https://qamichaelmaia.github.io/links/`.

### Opção 2 — Vercel (você já usa no Playground for QA)
1. Envie o projeto para o GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório → **Deploy** (sem configuração, é site estático).
3. Fica em algo como `https://qamichael-links.vercel.app`.

Depois é só colocar a nova URL na bio do Instagram. Cada alteração enviada ao GitHub atualiza o site automaticamente.
