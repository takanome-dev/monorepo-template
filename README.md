# Turborepo starter with PNPM

<p align="center"><a href="https://github.com/takanome-dev/monorepo-template"><img alt="Licence Badge" src="https://img.shields.io/github/license/takanome-dev/monorepo-template?color=%2330C151"></a> <a href="https://github.com/takanome-dev/monorepo-template"><img alt="Release Badge" src="https://img.shields.io/github/release/takanome-dev/monorepo-template?color=%2330C151"></a> <a href="https://github.com/takanome-dev/monorepo-template"><img alt="CI" src="https://github.com/takanome-dev/monorepo-template/actions/workflows/ci.yml/badge.svg"></a> <a href="https://github.com/takanome-dev/monorepo-template"><img alt="CodeQL" src="https://github.com/takanome-dev/monorepo-template/actions/workflows/codeql-analysis.yml/badge.svg"></a></a></p>

![monorepo-screenshot](https://github.com/takanome-dev/monorepo-template/assets/79809121/52a4fc35-2de1-48c4-bf4e-ed119103ced2)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app using TypeScript and Tailwind CSS
- `server`: a [Nestjs](https://docs.nestjs.com) app
- `ui`: a stub React component library shared between applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-custom-server`: `eslint` configurations for NestJS server
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (pnpm).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## 🎦 Repository Visualization

[![Visualization of this repository](./diagram.svg)](#)
