# ⚡ Flashy ⚡

[![Build Status](https://travis-ci.com/frankfaustino/Flashy.svg?branch=master)](https://travis-ci.com/frankfaustino/Flashy)


This totally kewl flash card app uses **TypeScript**, **React**, **GraphQL**, **Apollo Client & Server**, and **Express**.
***

## Contents
- [Features](#features)
- [Usage](#usage)
- [Environment variables](#environment-variables)
- [Built with](#built-with)
- [Screenshots](#screenshots)
- [API documentation](#api-documentation)
- [Project structure](#project-structure)

## Features
- Server-side rendering for [fast initial load and SEO](https://hackernoon.com/server-side-vs-client-side-rendering-in-react-apps-443efd6f2e87)
- User authentication with Google OAuth, Passport, cookies, and sessions
- Opinionated architecture: 
  - React components structured with [BEM naming convention](http://getbem.com/naming/)
  - minimal/no babel and webpack configuration (uses TypeScript)
  - `withAuth` HOC to pass user prop and control user access to pages
  - `withApollo` HOC that provides the Apollo client to React
- Server-side [environment variables](#environment-variables) managed with `dotenv`
- Production-ready, scalable architecture:
  - `frontend` - user-facing web app with Next.js server, responsible for rendering pages (either client-side or server-side). `frontend` sends requests via GraphQL queries to `backend` server's GraphQL endpoint.
  - `backend` - server-only web app with Express and Apollo server, responsible for processing requests for internal and external APIs and GraphQL queries and mutations.

## Usage

### Installation
To run locally, you will need to install two apps: `frontend` and `backend`

```bash
git clone https://github.com/frankfaustino/Flashy.git
cd Flashy/backend && npm i
cd ../frontend && npm i
```

### Running `backend` locally:
Create an `.env` file inside the `backend` folder with the environment variables listed below. This file `must` have values for the `required` variables.

#### Environment Variables
| Key | Description | Required |
|-----|-------------|----------|
| PORT | Apollo server's port | required |
| APP_SECRET | Used to sign JWT | required |
| SESSION_SECRET | Used to sign express-session ID cookie | required |
| CLIENT_ENDPOINT | URL for the React app | required |
| PRISMA_ENDPOINT | URL for the Prisma DB | required |
| PRISMA_SECRET | Secret for Prisma DB | required |
| REDIS_ENDPOINT | URL for the Redis DB | |
| REDIS_PW | Password for the Redis DB | |
| GRAPHQL_SERVER_URL | URL for the Apollo server (used for tests) | |
| TEST_EMAIL | Used for testing | |
| TEST_NAME | Used for testing | |
| TEST_PASSWORD | Used for testing | |
| TEST_ID | Used for testing | |
| TOKEN | Used for testing | |

Once `.env` is created and populated, you can run the `backend` server with the command below:
```bash
npm run dev
```

### Running `frontend` locally
Navigate to the `frontend` directory, make sure all dependencies are installed with `npm i`, then run the command below and load `http://localhost:8888` in your preferred web browser
```bash
npm run dev
```

## Deploying 🚀

WIP 🚧 👷‍ 🏗

```bash
npm build
npm start
```

## Built with

### `frontend`
|Pkgs|Description|Link|
|----|-----------|----|
| `typescript` | Typed superset of JavaScript |[docs](https://www.typescriptlang.org/)|
| `graphql` | JavaScript reference implementation for GraphQL |[github](https://github.com/graphql/graphql-js)|
| `next` | Server-side rendered React framework |[docs](https://nextjs.org/learn)|
| `react` | JavaScript library for building UI |[docs](https://reactjs.org/)|
| `react-apollo` | React data container for Apollo Client |[github](https://github.com/apollographql/react-apollo#readme)|
| `apollo-boost` | Zero-config Apollo Client |[github](https://github.com/apollographql/apollo-client#readme)|
| `next-with-apollo` | Apollo HOC for Next.js |[github](https://github.com/lfades/next-with-apollo#readme)|
| `styled-components` | Visual primitives library |[docs](https://www.typescriptlang.org/)|
| `graphql-tag` | JavaScript template literal tag that parses GraphQL queries |[github](https://github.com/apollographql/graphql-tag#readme)|
| `yup` | JavaScript object schema validator and parser |[github](https://github.com/jquense/yup)|
| `jest` | JavaScript testing |[docs](https://jestjs.io/)|
| `enzyme` | JavaScript testing utilities for React |[docs](https://airbnb.io/enzyme/)|
| `tslint` | Static analysis tool that checks TypeScript code for readability |[github](https://www.npmjs.com/package/tslint)|
| `nprogress` | Progress bar |[github](https://www.npmjs.com/package/nprogress)|


### `backend`

|Pkgs|Description|Link|
|----|-----------|----|
| `apollo-server-express` | Apollo GraphQL Server |[github](https://github.com/apollographql/apollo-server#readme)|
| `express` | JavaScript web framework |[docs](http://expressjs.com/)|
| `graphql` | JavaScript reference implementation for GraphQL |[github](https://github.com/graphql/graphql-js)|
| `graphql-import` | Import and export defs for GraphQL |[github](https://github.com/graphcool/graphql-import#readme)|
| `graphql-middleware` | Schema wrapper for middleware |[github](https://github.com/prisma/graphql-middleware)|
| `graphql-request` | Minimal GraphQL client for Node (used here for testing) |[github](https://github.com/prisma/graphql-request)|
| `graphql-shield` | GraphQL server permissions middleware |[github](https://github.com/maticzav/graphql-shield)|
| `prisma-client-lib` | Dependencies for Prisma |[npm](https://www.npmjs.com/package/prisma-client-lib)|
| `bcrypt` | Password hashing |[github](https://github.com/kelektiv/node.bcrypt.js#readme)|
| `express-session` | Session middleware for Express |[github](https://www.npmjs.com/package/express-session)|
| `jsonwebtoken` | JavaScript implementation of JSON Web Tokens |[github](https://github.com/auth0/node-jsonwebtoken#readme)|
| `connect-redis` | Redis session store |[github](https://github.com/tj/connect-redis#readme)|
| `ioredis` | Redis client |[github](https://github.com/luin/ioredis#readme)|
| `yup` | JavaScript object schema validator and parser |[github](https://github.com/jquense/yup)|
| `dotenv` | Loads environment variables from file |[github](https://github.com/motdotla/dotenv#readme)|
| `dotenv-cli` | Runs apps with environment variables |[github](https://github.com/caske33/dotenv-cli#readme)|
| `gql2ts` | Converts GraphQL schemas to TypeScript defs |[github](https://github.com/avantcredit/gql2ts#readme)|
| `ts-jest` | Preprocessor with source maps support to help use TypeScript with Jest |[github](https://kulshekhar.github.io/ts-jest)|
| `ts-node` | TypeScript execution environment and REPL for node.js, with source map support |[github](https://github.com/TypeStrong/ts-node)|
| `jest` | JavaScript testing |[docs](https://jestjs.io/)|
| `tslint` | Static analysis tool that checks TypeScript code for readability |[github](https://www.npmjs.com/package/tslint)|

## Screenshots

WIP 👷‍

## API Documentation

WIP 🚧

## Project Structure

WIP 🏗

***
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[↑](#flashy--)👋