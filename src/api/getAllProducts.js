import { useHttpRequest } from "../composables/useHttpRequest";

export default async function () {
  let url = `https://e-commerce-web-app-f394a-default-rtdb.firebaseio.com/products.json`;

  const response = await useHttpRequest("GET", url, "json");

  return {
    allProducts: Object.values(response.data),
    status: response.status,
    _productsArry: Object.entries(response.data),
  };
}
