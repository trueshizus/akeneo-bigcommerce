import { graphql } from "./gql";

export const accessToken = graphql(/* GraphQL */ `
  query AccessToken(
    $username: String!
    $password: String!
    $clientId: String!
    $clientSecret: String!
  ) {
    token(
      username: $username
      password: $password
      clientId: $clientId
      clientSecret: $clientSecret
    ) {
      data {
        accessToken
      }
    }
  }
`);

export const getChannels = graphql(`
  query Channels {
    channels {
      items {
        categoryTree
        code
        currencies
        labels
        locales
        conversionUnits {
          conversionUnitCode
          conversionUnitValue
        }
      }
    }
  }
`);
