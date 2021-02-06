<p align="center">
  <img src="https://raw.githubusercontent.com/micrajs/micrajs/live/.assets/logo.png" width="25%">
</p>

<h1 align="center">@micra/micra-graphql-container</h1>

<p align="center">
  <img alt="version" src="https://img.shields.io/npm/v/@micra/micra-graphql-container.svg">
  <img alt="issues" src="https://img.shields.io/github/issues/micrajs/library-template.svg">
  <img alt="prs" src="https://img.shields.io/github/issues-pr/micrajs/library-template.svg">
</p>

<hr />

## About

This is an aggregator of GraphQL schemas and resolvers.

## Installation

```sh
yarn add @micra/micra-graphql-container
```

## Usage

Micra aims to help you create a modular and type-safe application. To do so, first you need to declare your context and reducers types in a registration file (`*.register.d.ts`):

```typescript
// example.d.ts
declare namespace Application {
  interface Context {
    contextVariable: string;
  }

  interface Resolvers {
    Query: {
      hello: import('@micra/micra-graphql-container').Resolver<'world'>;
    };
  }
}
```

After your types are defined, you can write your resolver that honours the type defined in the registration file:

```typescript
import { MicraGraphQLContainer } from '@micra/micra-graphql-container';

const graphql = new MicraGraphQLContainer();

graphql.resolver({
  Query: {
    async hello(_parent, _args, context) {
      context.contextVariable // typeof context.contextVariable = string;

      return 'world';
    },
  },
});
```

## Resolver type

```typescript
export type Resolver<
  TResponse = any,
  TSource = undefined,
  TArgs = { [argName: string]: any },
> = (
  source: TSource,
  args: TArgs,
  context: Application.Context,
  info: GraphQLResolveInfo,
) => Promise<TResponse>;
```

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos)
