import { Hono } from "hono";
import { bigCommerce } from "./bigcommerce/client";
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World");
});

app.post("/events", async (c) => {
  console.log("New event received");
  try {
    const body = await c.req.json();
    console.log("event action: ", body.events[0].action);
    if (body.events[0].action === "product.created") {
      console.log("Product created event received");
      const productName = body.events[0].data.resource.identifier;

      console.log("Product Name: ", productName);

      const product = {
        name: productName,
        type: "digital", //required
        description: "This timeless fashion staple will never go out of style!",
        price: "100", //required
        categories: [18],
        availability: "disabled",
        weight: "0", //required
      };

      try {
        console.log("Creating product in BigCommerce...");
        await bigCommerce.post("/products", product);
        // console.log(response);
        console.log("Creating product in BigCommerce...done");
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
  console.log("===================================");
  return c.text("sucess");
});

export default app;
