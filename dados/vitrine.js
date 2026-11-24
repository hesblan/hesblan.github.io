/*
  VITRINE — a lista de tudo que está à venda, em serviço ou em ideia.
  Para adicionar um item, copie um bloco { ... } e edite. Não precisa mexer no HTML.

  tipo:    "produto" | "servico" | "ideia"
  status:  texto curto que aparece no selo (ex.: "pronto", "beta", "em breve")
  preco:   texto livre (ex.: "R$ 99/mês") ou null
  acoes:   botões; principal: true deixa o botão colorido
  placeholder: true marca o item como "a preencher" (aparece tracejado)
*/
window.VITRINE = [
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
    nome: "LUDUS'BAN Premium",
    status: "beta",
    resumo: "Assinatura e loja dentro do fliperama LUDUS'BAN, com Pix e cartão.",
    pontos: [],
    preco: null,
    acoes: [
      { rotulo: "Jogar agora", href: "https://ludus-ban.hesblan-jobs.workers.dev", principal: true }
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
