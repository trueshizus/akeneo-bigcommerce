import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.sdk.akeneo.cloud",
  documents: "./akeneo/queries.ts",
  ignoreNoDocuments: true,
  generates: {
    "./akeneo/gql/": {
      preset: "client-preset",
      plugins: [],
    },
  },
};

export default config;
