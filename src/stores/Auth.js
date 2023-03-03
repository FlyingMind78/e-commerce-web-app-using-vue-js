import { defineStore } from "pinia";
import { ref } from "vue";
import userLoginRequest from "../api/user/userLoginRequest.js";
import userSignUpRequest from "../api/user/userSignUpRequest.js";
import router from "../router/index.js";
import { useStorage } from "@vueuse/core";
import { useCookies } from "@vueuse/integrations/useCookies";

export const useAuthStore = defineStore("auth", () => {
  const authToken = useStorage("authUserID", null);
  const isThereLoginError = ref(false);
  const cookies = useCookies();

  async function userLogin(userLoginCred) {
    const { user, status, error } = await userLoginRequest(userLoginCred);
    if (!error) {
      if ((status === 200) & !!user.idToken) {
        authToken.value = user.idToken;
        isThereLoginError.value = false;
        router.push("/");
      }
    } else {
      isThereLoginError.value = true;
    }
  }

  async function userSignUp(userSignupCred) {
    const { user, status } = await userSignUpRequest(userSignupCred);
    console.log(user);
  }

  function logoutUser() {
    authToken.value = null;
  }
  return {
    authToken,
    cookies,
    userLogin,
    userSignUp,
    logoutUser,
    isThereLoginError,
  };
});
