import { useHttpRequest } from "../composables/useHttpRequest";

export default async function (payload) {
  let url = `https://e-commerce-web-app-f394a-default-rtdb.firebaseio.com/products.json`;
  const response = await useHttpRequest("POST", url, "json", payload);

  return response;
}
