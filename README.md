<h1 align="center">Welcome to pnpm-turborepo-boilerplate 👋</h1>

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

> ### Apps and Packages

- `web`: a Next 13 [Next.js](https://nextjs.org/) app.
- `t3-app`: a [T3 Stack](https://create.t3.gg/) project bootstrapped with create-t3-app.
- `t3-drizzle`: a [T3 Stack](https://create.t3.gg/) project bootstrapped with create-t3-app & [Drizzle-orm](https://github.com/drizzle-team/drizzle-orm).
- `ui`: a stub React component library shared throughout the monorepo.
- `utils`: shared utils throughout the monorepo.
- `prisma-orm`: Prisma instence / client used throughout the monorepo.
- `drizzle`: Drizzle-orm & drizzle-kit used throughout the monorepo.
- `eslint-config-custom`: `eslint` .
- `tsconfig`: `tsconfig.json`'s used throughout the monorepo.

Each package & app is 100% [TypeScript](https://www.typescriptlang.org/).

> ### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Pretty-quick](https://github.com/azz/pretty-quick) runs prettier over changed files
- [Prisma](https://github.com/prisma/prisma) Prisma is a next-generation Typescript ORM
- [Drizzle](https://github.com/drizzle-team/drizzle-orm) Drizzle ORM is a TypeScript ORM for SQL databases

For git integration it has also:

- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for improving commits
- [Husky](https://github.com/typicode/husky) for improving commits

> ### Prerequisites

- pnpm
- node >=18.4.0
