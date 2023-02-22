import { useHttpRequest } from "../../composables/useHttpRequest";

export default async function (userCredSignUp) {
  //   const API_KEY = "AIzaSyDAe6KKOskOCqDy-f8KUeJ_n_pu_Nrjk8Y";
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAe6KKOskOCqDy-f8KUeJ_n_pu_Nrjk8Y`;
  const response = await useHttpRequest("POST", url, "json", userCredSignUp);

  //   const response = await useHttpRequest("POST", url, "json", userCredSignUp);
  console.log("User sign up response:", response);
  return {
    user: response.data,
    status: response.status,
  };
}
