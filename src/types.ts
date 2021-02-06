import '../micra-graphql-container.d';
import type { PartialDeep } from 'type-fest';
import type { GraphQLScalarType, GraphQLResolveInfo } from 'graphql';

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

export interface GraphQLResolverMap {
  [typeName: string]:
    | {
        [fieldName: string]:
          | Resolver
          | {
              requires?: string;
              resolve: Resolver;
            };
      }
    | GraphQLScalarType
    | {
        [enumValue: string]: string | number;
      };
}

export interface GraphQLContainer {
  getSchema(): string[];
  schema(schema: string): this;
  getResolvers(): GraphQLResolverMap;
  resolver(resolver: PartialDeep<Application.Resolvers>): this;
}
