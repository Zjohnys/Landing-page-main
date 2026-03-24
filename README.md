# NexaStock Landing Page

Landing page desenvolvida em React + TypeScript para apresentar os servicos da NexaStock, com navegacao por rotas e suporte a tema claro/escuro.

## Visao geral

Este projeto foi criado com Vite e inclui:

- Pagina inicial com secoes de destaque (Hero, Servicos, Sobre e Contato)
- Paginas especificas para cada servico
- Roteamento com React Router
- Alternancia de tema (`light`/`dark`) com persistencia no `localStorage`
- Animacoes com Framer Motion

## Stack

- React 18
- TypeScript
- Vite 5
- React Router DOM 7
- Framer Motion

## Rotas da aplicacao

- `/` - Home
- `/servicos/controle-digital` - Controle Digital
- `/servicos/relatorios-inteligentes` - Relatorios Inteligentes
- `/servicos/suporte-especializado` - Suporte Especializado

## Como executar localmente

### Pre-requisitos

- Node.js 18+
- npm 9+

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de producao

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

## Estrutura principal

```text
src/
	components/
	data/
	hooks/
	pages/
	App.tsx
	main.tsx
```

## Observacoes

- O tema atual e salvo em `localStorage` usando a chave `top-theme`.
- O atributo `data-theme` e aplicado no elemento raiz (`html`) para controle visual via CSS.
