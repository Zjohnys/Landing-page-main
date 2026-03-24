export interface ServiceItem {
  slug: string;
  icon: string;
  img: string;
  title: string;
  desc: string;
  teaserTitle: string;
  teaserText: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'controle-digital',
    icon: '💻',
    img: '/img/card-control.svg',
    title: 'Controle Digital',
    desc: 'Gerencie seu estoque de forma simples e eficiente com nossa plataforma intuitiva.',
    teaserTitle: 'Controle de Estoque',
    teaserText: 'Cadastre itens, acompanhe nível mínimo e mantenha reposição em dia.',
  },
  {
    slug: 'relatorios-inteligentes',
    icon: '📊',
    img: '/img/card-reports.svg',
    title: 'Relatórios Inteligentes',
    desc: 'Visualize dados, acompanhe tendências e tome decisões estratégicas com clareza.',
    teaserTitle: 'Reposicionamento',
    teaserText: 'Identifique produtos críticos e direcione ações com base em dados.',
  },
  {
    slug: 'suporte-especializado',
    icon: '🤝',
    img: '/img/card-support.svg',
    title: 'Suporte Especializado',
    desc: 'Nossa equipe está sempre disponível para ajudar você a crescer com segurança.',
    teaserTitle: 'Monitoramento',
    teaserText: 'Abra chamados e acompanhe soluções com atendimento dedicado.',
  },
];
