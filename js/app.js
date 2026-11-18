(function () {
  "use strict";

  var ICONS = {
    linkedin: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    github: '<path d="M12 .3a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/>',
    twitch: '<path d="M11.57 4.71h1.72v5.15h-1.72zm4.72 0H18v5.15h-1.71zM6 0 1.71 4.29v15.42h5.15V24l4.28-4.29h3.43L22.29 12V0zm14.57 11.14-3.43 3.43h-3.43l-3 3v-3H6.86V1.71h13.71z"/>',
    youtube: '<path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>',
    // Frasco de laboratório (Playground for QA): parte de cima vazada, líquido com bolhas embaixo
    flask: '<path fill-rule="evenodd" d="M8 2h8v2h-1.5v4.6l5.9 9.9A2.3 2.3 0 0 1 18.4 22H5.6a2.3 2.3 0 0 1-2-3.5l5.9-9.9V4H8zm2.7 2v5l-2.2 3.7h7l-2.2-3.7V4zM11 17.5a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm3.8-1.7a.8.8 0 1 1-1.6 0 .8.8 0 1 1 1.6 0z"/>',
    link: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
  };
  var LABELS = { linkedin: "LinkedIn", github: "GitHub", twitch: "Twitch", youtube: "YouTube" };

  function svg(name, cls) {
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      (ICONS[name] || ICONS.link) + "</svg>";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function ext(url) {
    return 'href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
  }

  function visible(item) { return !item.hidden; }

  var cfg = window.BIO_CONFIG;
  var p = cfg.profile;

  document.title = p.name + " | Links";

  // Perfil
  document.getElementById("profile").innerHTML =
    '<img class="avatar" src="' + esc(p.avatar) + '" alt="Foto de ' + esc(p.name) + '" width="112" height="112">' +
    "<h1>" + esc(p.name) + "</h1>" +
    '<p class="headline">' + esc(p.headline) + "</p>" +
    p.bio.map(function (b) { return '<p class="bio">' + esc(b) + "</p>"; }).join("");

  // Redes sociais
  document.getElementById("socials").innerHTML = cfg.socials.filter(visible).map(function (s) {
    var label = LABELS[s.type] || s.type;
    return '<a class="social social--' + esc(s.type) + '" ' + ext(s.url) + ' aria-label="' + esc(label) + '" title="' + esc(label) + '">' +
      svg(s.type) + "</a>";
  }).join("");

  // Links principais
  document.getElementById("links").innerHTML = cfg.links.filter(visible).map(function (l) {
    var media = l.thumb
      ? '<img class="link__thumb" src="' + esc(l.thumb) + '" alt="" loading="lazy" width="48" height="48">'
      : '<span class="link__thumb link__thumb--icon brand--' + esc(l.icon) + '">' + svg(l.icon) + "</span>";
    return '<a class="link" ' + ext(l.url) + ">" + media +
      '<span class="link__text"><span class="link__title">' + esc(l.title) + "</span>" +
      (l.subtitle ? '<span class="link__sub">' + esc(l.subtitle) + "</span>" : "") +
      (l.tags && l.tags.length
        ? '<span class="tags">' + l.tags.map(function (t) {
            return '<span class="tag tag--' + esc(l.icon || "default") + '">' + esc(t) + "</span>";
          }).join("") + "</span>"
        : "") + "</span>" +
      '<svg class="link__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</a>";
  }).join("");

  // Meu Setup
  function storeOf(url) {
    if (/aliexpress/i.test(url)) return { key: "ali", label: "AliExpress" };
    if (/meli\.la|mercadoli[vb]re/i.test(url)) return { key: "ml", label: "Mercado Livre" };
    if (/amazon|amzn/i.test(url)) return { key: "amz", label: "Amazon" };
    return null;
  }

  var su = cfg.setup;
  if (su && su.items && su.items.length) {
    var groups = (su.groups || []).filter(function (g) {
      return su.items.some(function (it) { return it.group === g; });
    });
    var chips = groups.length > 1
      ? '<div class="chips" role="tablist" aria-label="Filtrar itens do setup">' +
        ["Todos"].concat(groups).map(function (g, i) {
          return '<button type="button" class="chip" role="tab" aria-selected="' + (i === 0) + '" data-group="' +
            (i === 0 ? "" : esc(g)) + '">' + esc(g) + "</button>";
        }).join("") + "</div>"
      : "";

    document.getElementById("setup").innerHTML =
      '<div class="section__head"><h2>' + esc(su.title) + "</h2>" +
      (su.description ? "<p>" + esc(su.description) + "</p>" : "") + "</div>" + chips +
      '<div class="setup-grid" id="setup-grid">' + su.items.map(function (it) {
        var st = storeOf(it.url);
        return '<a class="product" data-group="' + esc(it.group || "") + '" ' + ext(it.url) + ">" +
          '<span class="product__img"><img src="' + esc(it.image) + '" alt="' + esc(it.name) + '" loading="lazy">' +
          (st ? '<span class="store store--' + st.key + '">' + st.label + "</span>" : "") + "</span>" +
          '<span class="product__cat">' + esc(it.category) + "</span>" +
          '<span class="product__name">' + esc(it.name) + "</span></a>";
      }).join("") + "</div>" +
      (su.fullListUrl ? '<a class="btn-outline" ' + ext(su.fullListUrl) + ">Ver lista completa no Mercado Livre</a>" : "");

    var chipEls = document.querySelectorAll(".chip");
    var products = document.querySelectorAll(".product");
    Array.prototype.forEach.call(chipEls, function (chip) {
      chip.addEventListener("click", function () {
        var g = chip.getAttribute("data-group");
        Array.prototype.forEach.call(chipEls, function (c) { c.setAttribute("aria-selected", String(c === chip)); });
        Array.prototype.forEach.call(products, function (p) {
          p.hidden = !!g && p.getAttribute("data-group") !== g;
        });
      });
    });
  } else {
    document.getElementById("setup").hidden = true;
  }

  document.getElementById("footer-text").textContent = cfg.footer || "";

  // Imagem quebrada -> placeholder
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t.tagName === "IMG" && !t.dataset.failed) {
      t.dataset.failed = "1";
      t.classList.add("img-failed");
      t.removeAttribute("src");
    }
  }, true);

  // Tema claro/escuro
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");
  try {
    var saved = localStorage.getItem("bio-theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  themeBtn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("bio-theme", next); } catch (e) {}
  });

  // Compartilhar
  var shareBtn = document.getElementById("share");
  var toast = document.getElementById("toast");
  shareBtn.addEventListener("click", function () {
    var data = { title: document.title, url: location.href };
    if (navigator.share) {
      navigator.share(data).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(location.href).then(function () {
        toast.classList.add("show");
        setTimeout(function () { toast.classList.remove("show"); }, 1800);
      });
    }
  });
})();
