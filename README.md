# Next Starter

Template for Next + Tailwindcss + TypeScript projects with some tools preconfigured.

# Prerequisites

1. Install [Node.js](https://nodejs.org/en/) (v18)
2. Install [yarn](https://yarnpkg.com/getting-started/install)

# Getting started

### Libraries

- [Next 13 App Router](https://nextjs.org/)
- [Tailwindcss 3](https://tailwindcss.com/)
- [TypeScript 4.9.5](https://www.typescriptlang.org/)
- [Material UI 5.14](https://mui.com/material-ui/getting-started/)
- [React Query 4.35](https://tanstack.com/query/v4/docs/react/overview/)
- [React Hook Form 7.45](https://react-hook-form.com/get-started/)
- [Recoil 0.7](https://recoiljs.org/docs/introduction/getting-started/)

### Tools

- [Commitlint 17](https://commitlint.js.org)
- [Conventional Commits 1](https://www.conventionalcommits.org)
- [Editorconfig](https://editorconfig.org/)
- [Eslint 8](https://eslint.org/)
- [Husky 8](https://typicode.github.io/husky/#/)
- [Prettier 2](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)

### Commit rules

Must create branch follow below rules:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

Example: `feat: first commit`

### Branch rules

Branch name should follow below rules:

- feat/
- feedback/
- hotfix/
- revert/
- reset/
- force/
- refactor/
- fix/

Example: `git checkout -b feat/feature-a`

Note: _Underscore to be not allow!!!_

# Usage

Clone the project

```bash
  git clone https://github.com/du-nt/next-app-starter
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

Live demo: https://next-app-starter-kappa.vercel.app/

```bash
  Account: mahoagray@gmail.com
  Password: 0khongbiet
```

# Directory structure

### Overview

```
├── messages
├── public
├── components
│   ├── atoms
│   ├── icons
│   ├── molecules
│   ├── organisms
│   └── templates
├── constants
├── hooks
├── libs
├── providers
├── stores
├── types
├── utils
├── package.json
└── README.md
```

### Detail

- **messages** - Multi-language translations
- **public** - Public files (images, favicons, etc.)
- **components** - Components
- **constants** - Constant definition
- **hooks** - Custom hooks
- **libs** - Extends configure
- **providers** -React contexts
- **stores** - Global store
- **types** - Typescript type and enumeration definitions
- **utils** - Helper functions (sorting, filtering, etc.)
- **package.json** - Project dependencies
