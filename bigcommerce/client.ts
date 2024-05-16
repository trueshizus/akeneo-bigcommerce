import BigCommerce from "node-bigcommerce";

export const bigCommerce = new BigCommerce({
  clientId: Bun.env.BIGCOMMERCE_CLIENT_ID,
  accessToken: Bun.env.BIGCOMMERCE_ACCESS_TOKEN,
  storeHash: Bun.env.BIGCOMMERCE_STORE_HASH,
  responseType: Bun.env.BIGCOMMERCE_RESPONSE_TYPE,
});

// const result = await bigCommerce.get("/products");

// var product = {
//   name: "Plain T-Shirt 2", //required
//   type: "digital", //required
//   description: "This timeless fashion staple will never go out of style!",
//   price: "100", //required
//   categories: [18],
//   availability: "disabled",
//   weight: "0", //required
// };

// Replace 'post' with 'put' for a put call
// const result = await bigCommerce.post("/products", product);

// console.log(result);

// console.log(result);
