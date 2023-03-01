<h1 align="center">Welcome to turborepo-template 👋</h1>

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

> ### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app.
- `my-t3`: a [T3 Stack](https://nextjs.org/) app.
- `ui`: a stub React component library shared throughout the monorepo.
- `eslint-config-custom`: `eslint` .
- `tsconfig`: `tsconfig.json`'s used throughout the monorepo
- `prisma`: Next-generation Node.js and TypeScript ORM used throughout the monorepo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

> ### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Pretty-quick](https://github.com/azz/pretty-quick) runs prettier over changed files
- [Prisma](https://github.com/prisma/prisma) Prisma is a next-generation Typescript ORM

For git integration it has also:

- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for improving commits
- [Husky](https://github.com/typicode/husky) for improving commits

> ### Prerequisites

- pnpm
- node >=18.0.0

> ### Install

```sh
pnpm i
```

> ### Usage

```sh
pnpm run dev
```

> ### Run tests

```sh
pnpm run test
```
