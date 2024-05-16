import { Client, cacheExchange, fetchExchange } from "@urql/core";
import { accessToken, getChannels } from "./queries";

const client = new Client({
  url: "https://graphql.sdk.akeneo.cloud",
  fetchOptions: () => ({
    headers: {
      "X-PIM-URL": Bun.env.AKENEO_URL,
      "X-PIM-CLIENT-ID": Bun.env.AKENEO_CLIENT_ID,
      "X-PIM-TOKEN": Bun.env.AKENEO_ACCESS_TOKEN,
    },
  }),
  exchanges: [cacheExchange, fetchExchange],
});

const result = await client.query(accessToken, {
  username: Bun.env.AKENEO_USERNAME,
  password: Bun.env.AKENEO_PASSWORD,
  clientId: Bun.env.AKENEO_CLIENT_ID,
  clientSecret: Bun.env.AKENEO_CLIENT_SECRET,
});

// const result = await client.query(getChannels, {});

console.log(JSON.stringify(result.data, null, 2));
