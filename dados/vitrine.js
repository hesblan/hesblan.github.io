/*
  VITRINE — a lista de tudo que está à venda, em serviço ou em ideia.
  Para adicionar um item, copie um bloco { ... } e edite. Não precisa mexer no HTML.

  tipo:    "produto" | "servico" | "ideia"
  status:  texto curto que aparece no selo (ex.: "pronto", "beta", "em breve")
  preco:   texto livre (ex.: "R$ 99/mês") ou null
  acoes:   botões; principal: true deixa o botão colorido
  cor: "ludus" | "banpaint" | "kit" | "work" (cor do destaque)
  destaque: true ocupa a largura toda e aparece primeiro
  mesmaAba: true abre o link na mesma aba (páginas do próprio site)
  placeholder: true marca o item como "a preencher" (aparece tracejado)
*/
window.VITRINE = [
  {
    tipo: "produto",
    destaque: true,
    cor: "ludus",
    nome: "LUDUS'BAN",
    status: "gratuito · beta",
    resumo: "Fliperama em pixel art neon que também é rede social de jogos. Abre no navegador e instala como app.",
    pontos: [
      "54 jogos, incluindo duelos online 1x1 ao vivo",
      "Feed, chat, clãs, comunidades e perfis",
      "RPG LUDUS Online com classes, chefões e forja"
    ],
    stack: "JavaScript · Vite · Cloudflare Workers · SQLite",
    preco: "Grátis para jogar · Premium opcional com Pix e cartão",
    acoes: [
      { rotulo: "Ver o case", href: "ludusban.html", principal: true, mesmaAba: true },
      { rotulo: "Jogar", href: "https://ludus-ban.hesblan-jobs.workers.dev" }
    ]
  },
  {
    tipo: "produto",
    destaque: true,
    cor: "banpaint",
    nome: "Banpaint",
    status: "gratuito",
    resumo: "App de desenho e edição de fotos no navegador. Sem anúncio, sem cadastro e funciona offline.",
    pontos: [
      "16 pincéis, camadas em pastas, máscaras e 17 modos de mesclagem",
      "Réguas de perspectiva, boneco 3D e modelos de quadrinhos",
      "Animação quadro a quadro e exportação em PSD"
    ],
    stack: "JavaScript puro · Canvas 2D · GitHub Pages",
    preco: "Grátis",
    acoes: [
      { rotulo: "Ver o case", href: "banpaint.html", principal: true, mesmaAba: true },
      { rotulo: "Abrir o app", href: "https://hesblan.github.io/banpaint/" }
    ]
  },
  {
    tipo: "produto",
    destaque: true,
    cor: "kit",
    nome: "Kit de Bolso do Técnico",
    status: "gratuito · v3.3",
    resumo: "Diagnóstico, defesa e estudo de redes e hardware no próprio celular Android, sem root. Open source, em português, com explicação para cada alerta.",
    pontos: [
      "Detecta ARP spoofing, DHCP falso, deauth, Wi-Fi falso e DNS sequestrado",
      "Auditoria do roteador, inventário da rede e relatórios PDF/JSON/.pcap",
      "173 testes automatizados e zero dependências externas"
    ],
    stack: "Python (só stdlib) · HTML/JS · Termux · licença MIT",
    preco: "Grátis · adaptação para empresas sob consulta",
    acoes: [
      { rotulo: "Ver o case", href: "kit-de-bolso.html", principal: true, mesmaAba: true },
      { rotulo: "GitHub", href: "https://github.com/hesblan/kit-de-bolso" }
    ]
  },
  {
    tipo: "produto",
    nome: "Bantec SaaS Starter",
    status: "pronto",
    resumo: "Base pronta para lançar um SaaS por assinatura em semanas, não meses: login, empresas com vários membros, planos e cobrança recorrente.",
    pontos: [
      "Multiempresa com segurança no banco (Supabase RLS) e testes automáticos",
      "Cobrança com Stripe e Mercado Pago (Pix, cartão, assinatura)",
      "Planos Grátis, Pro e Business com limites aplicados no servidor",
      "Deploy em Vercel ou Cloudflare, com custo de infra a partir de ~R$ 165/mês"
    ],
    planos: [
      { nome: "Grátis", preco: "R$ 0" },
      { nome: "Pro", preco: "R$ 99/mês" },
      { nome: "Business", preco: "R$ 299/mês" }
    ],
    stack: "Next.js 16 · Supabase · Stripe · Mercado Pago · TypeScript",
    preco: "Seu SaaS sobre esta base: orçamento sob consulta",
    acoes: [
      { rotulo: "Quero um SaaS", href: "https://www.linkedin.com/in/hesblan/", principal: true }
    ]
  },
  {
    tipo: "servico",
    nome: "Bantec — software sob demanda",
    status: "aberto",
    resumo: "Sites, sistemas internos, automações e apps sob medida. Do rascunho ao ar, com manutenção.",
    pontos: [
      "SaaS e portais com área do cliente e pagamento",
      "Automações de processos e integrações",
      "Bases de conhecimento e ferramentas internas"
    ],
    preco: null,
    acoes: [
      { rotulo: "Pedir orçamento", href: "https://www.linkedin.com/in/hesblan/", principal: true }
    ]
  },
  {
    tipo: "produto",
    nome: "Próximo produto",
    status: "a preencher",
    resumo: "Espaço reservado para um produto que o Hesblan ainda vai informar (curso, template, arte, app...).",
    pontos: [],
    preco: null,
    acoes: [],
    placeholder: true
  },
  {
    tipo: "ideia",
    nome: "Ideia em incubação",
    status: "a preencher",
    resumo: "Espaço reservado para uma ideia ainda não divulgada. Ideias aqui podem receber lista de espera.",
    pontos: [],
    preco: null,
    acoes: [],
    placeholder: true
  }
];
