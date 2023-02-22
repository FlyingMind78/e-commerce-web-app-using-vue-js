import { useHttpRequest } from "../composables/useHttpRequest";

export default async function (prodKey) {
  let url = `https://e-commerce-web-app-f394a-default-rtdb.firebaseio.com/products/${prodKey}.json`;
  const response = await useHttpRequest("DELETE", url, "json");
  // console.log("Deleted product", response);
  return {
    status: response.status,
  };
}
