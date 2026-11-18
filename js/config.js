/*
 * ============================================================
 *  CONFIGURAÇÃO DA SUA PÁGINA
 *  Edite SOMENTE este arquivo para trocar textos, links e itens.
 * ============================================================
 */
window.BIO_CONFIG = {
  profile: {
    name: "Michael Maia",
    // Dica: salve sua foto em assets/avatar.jpg e troque para "assets/avatar.jpg"
    avatar: "https://static.keepo.io/users/b36c8a1a-f041-70eb-0026-2b3f4bb9ac5b/sites/0bc6c2f9-6f0c-469d-8007-715a24477821/37c7f74d-89f7-4ff4-8c4d-41d3fd2484a6.jpg",
    headline: "QA Engineer, Consultor e Criador do Playground for QA",
    bio: [
      "Mais de 4 anos de experiência e responsável pela liderança técnica do time de Testes e Qualidade na @Checkmob.",
      "Criador do Playground for QA™, uma plataforma 100% gratuita de desenvolvimento e estudos para QAs."
    ]
  },

  // Ícones redondos no topo. Tipos com ícone pronto: linkedin, github, twitch, youtube
  // Em qualquer rede ou link, "hidden: true" guarda o item sem exibir na página.
  socials: [
    { type: "linkedin", url: "https://www.linkedin.com/in/qamichael/" },
    { type: "github",   url: "https://github.com/qamichaelmaia" },
    { type: "twitch",   url: "https://www.twitch.tv/maiaqa" },
    { type: "youtube",  url: "https://www.youtube.com/@qamaia", hidden: true }   // hidden: true = não aparece na página
  ],

  // Botões principais. "thumb" = imagem (URL ou caminho em assets/). "icon" = usa ícone pronto no lugar da imagem.
  links: [
    {
      title: "Twitch",
      subtitle: "Lives de games e QA",
      url: "https://www.twitch.tv/maiaqa",
      icon: "twitch"
    },
    {
      title: "GitHub",
      subtitle: "Projetos e repositórios",
      url: "https://github.com/qamichaelmaia",
      icon: "github"
    },
    {
      title: "LinkedIn",
      subtitle: "Carreira e experiência profissional",
      url: "https://www.linkedin.com/in/qamichael/",
      icon: "linkedin"
    },
    {
      title: "YouTube",
      subtitle: "Vídeos, cortes e tutoriais",
      url: "https://www.youtube.com/@qamaia",
      hidden: true,   // remova esta linha para exibir o botão
      icon: "youtube"
    },
    {
      title: "Playground for QA",
      subtitle: "Plataforma gratuita de estudos para QAs",
      url: "https://playground-for-qa.vercel.app/",
      icon: "flask"
    },
    {
      title: "Portfólio",
      subtitle: "Sobre mim e trabalhos",
      url: "https://playground-for-qa.vercel.app/autor",
      hidden: true,   // remova esta linha para exibir o botão
      thumb: "https://static.keepo.io/users/b36c8a1a-f041-70eb-0026-2b3f4bb9ac5b/sites/0bc6c2f9-6f0c-469d-8007-715a24477821/dc56f3e4-650f-44d1-9152-72ed32a2e54b.png"
    }
  ],


  // Seção "Meu Setup": cada item aparece com miniatura.
  // - url: SEU LINK DE AFILIADO (meli.la do Mercado Livre, s.click.aliexpress.com do AliExpress...)
  // - group: em qual filtro o item aparece (precisa ser um dos nomes em "groups")
  // - image: endereço da foto do produto
  // A loja (Mercado Livre / AliExpress) é detectada automaticamente pelo link.
  setup: {
    title: "Meu Setup",
    description: "Tudo que uso no trabalho e nas lives",
    groups: ["Home Office", "PC", "Live & Games"],
    fullListUrl: "https://meli.la/1qE4mqC",
    items: [
      // ---------- Home Office ----------
      {
        group: "Home Office",
        name: "Monitor LG UltraGear 27\" 144Hz",
        category: "Monitor",
        image: "https://http2.mlstatic.com/D_NQ_NP_629075-MLA104879398469_012026-O.webp",
        url: "https://meli.la/2VcVgvM"
      },
      {
        group: "Home Office",
        name: "Mouse Logitech MX Vertical",
        category: "Mouse",
        image: "https://http2.mlstatic.com/D_NQ_NP_926785-MLA99858509739_112025-O.webp",
        url: "https://meli.la/1pq6wKw"
      },
      {
        group: "Home Office",
        name: "Mouse Vertical Sem Fio (opção econômica)",
        category: "Mouse",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S1e9356b707d749949c148047b963130fU.jpg",
        url: "https://s.click.aliexpress.com/e/_c3fauphr"
      },
      {
        group: "Home Office",
        name: "Teclado Mecânico Royal Kludge R65",
        category: "Teclado",
        image: "https://http2.mlstatic.com/D_NQ_NP_778424-MLB117834880669_092026-O.webp",
        url: "https://meli.la/2g5xdCC"
      },
      {
        group: "Home Office",
        name: "Mesa Diretor 1,80m Dynamica",
        category: "Mesa",
        image: "https://http2.mlstatic.com/D_NQ_NP_763171-MLA95692143708_102025-O.webp",
        url: "https://meli.la/2rZM9pF"
      },
      {
        group: "Home Office",
        name: "Suporte Articulado WLK até 35\"",
        category: "Suporte de monitor",
        image: "https://http2.mlstatic.com/D_NQ_NP_701975-MLA108487074225_032026-O.webp",
        url: "https://meli.la/19AZhAp"
      },
      {
        group: "Home Office",
        name: "Luminária LED para Monitor",
        category: "Iluminação",
        image: "https://http2.mlstatic.com/D_NQ_NP_859719-MLB116407287296_092026-O.webp",
        url: "https://meli.la/2dZkHdY"
      },
      {
        group: "Home Office",
        name: "Mousepad Feltro 120x50cm",
        category: "Mousepad",
        image: "https://http2.mlstatic.com/D_NQ_NP_720529-MLB111570674474_062026-O.webp",
        url: "https://meli.la/2ZaZEqz"
      },

      // ---------- PC ----------
      {
        group: "PC",
        name: "Intel Core Ultra 5 245KF",
        category: "Processador",
        image: "https://http2.mlstatic.com/D_NQ_NP_942831-MLB106527313220_022026-O.webp",
        url: "https://meli.la/2ZvscQ7"
      },
      {
        group: "PC",
        name: "RTX 5060 Ti 16GB Pcyes",
        category: "Placa de vídeo",
        image: "https://http2.mlstatic.com/D_NQ_NP_902436-MLB114874155070_082026-O.webp",
        url: "https://meli.la/1c45Mgo"
      },
      {
        group: "PC",
        name: "Corsair Vengeance 16GB DDR5 5600MHz",
        category: "Memória RAM",
        image: "https://http2.mlstatic.com/D_NQ_NP_795778-MLA100045888233_122025-O.webp",
        url: "https://meli.la/1riXxob"
      },
      {
        group: "PC",
        name: "Air Cooler Deepcool AK620 G2 Digital",
        category: "Cooler",
        image: "https://http2.mlstatic.com/D_NQ_NP_937023-MLB115146133022_082026-O.webp",
        url: "https://meli.la/1tDxjRX"
      },

      // ---------- Live & Games ----------
      {
        group: "Live & Games",
        name: "PlayStation 5 Slim Digital",
        category: "Console",
        image: "https://http2.mlstatic.com/D_NQ_NP_667226-MLA96871260244_112025-O.webp",
        url: "https://meli.la/15hazTE"
      },
      {
        group: "Live & Games",
        name: "Placa de Captura HDMI 4K USB 3.0",
        category: "Captura",
        image: "https://http2.mlstatic.com/D_NQ_NP_917260-MLB86643270488_062025-O.webp",
        url: "https://meli.la/2g1UieK"
      },
      {
        group: "Live & Games",
        name: "Fone KZ ZSN Pro 2 (retorno)",
        category: "Fone",
        image: "https://http2.mlstatic.com/D_NQ_NP_702306-MLB118392747312_102026-O.webp",
        url: "https://meli.la/32KDXtG"
      }
    ]
  },

  footer: "© Michael Maia"
};
