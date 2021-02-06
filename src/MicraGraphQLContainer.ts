import merge from 'ts-deepmerge';
import type { GraphQLResolverMap, GraphQLContainer } from './types';

export class MicraGraphQLContainer implements GraphQLContainer {
  protected schemas: string[] = [];

  protected resolvers: GraphQLResolverMap = {};

  getSchema(): string[] {
    return this.schemas;
  }

  schema(schema: string): this {
    this.schemas.push(schema);
    return this;
  }

  getResolvers(): GraphQLResolverMap {
    return this.resolvers;
  }

  resolver(resolvers: Partial<Application.Resolvers>): this {
    this.resolvers = merge(this.resolvers, resolvers);

    return this;
  }
}
