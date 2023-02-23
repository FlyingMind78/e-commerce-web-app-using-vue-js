import { useHttpRequest } from "../../composables/useHttpRequest";

export default async function (userCredLogin) {
  const API_KEY = "AIzaSyDAe6KKOskOCqDy-f8KUeJ_n_pu_Nrjk8Y";
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const response = await useHttpRequest("POST", url, "json", userCredLogin);
  console.log("User login response", response);
  return {
    user: response.data,
    status: response.status,
    error: response.code === "ERR_BAD_REQUEST" ? true : false,
  };
}
