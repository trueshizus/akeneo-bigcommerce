declare module "bun" {
  interface Env {
    AKENEO_URL: string;
    AKENEO_USERNAME: string;
    AKENEO_PASSWORD: string;
    AKENEO_CLIENT_ID: string;
    AKENEO_CLIENT_SECRET: string;
    AKENEO_ACCESS_TOKEN: string;
    BIGCOMMERCE_CLIENT_ID: string;
    BIGCOMMERCE_ACCESS_TOKEN: string;
    BIGCOMMERCE_STORE_HASH: string;
    BIGCOMMERCE_RESPONSE_TYPE: string;
  }
}
