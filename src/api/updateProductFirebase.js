import { useHttpRequest } from "../composables/useHttpRequest";

export default async function (firebaseProductKey, payload) {
  let url = `https://e-commerce-web-app-f394a-default-rtdb.firebaseio.com/products/${firebaseProductKey}.json`;
  const response = await useHttpRequest("PUT", url, "json", payload);
  // console.log("After updated product", response);
  return {
    status: response.status,
  };
}
