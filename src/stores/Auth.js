import { defineStore } from "pinia";
import { ref, computed } from "vue";
import userLoginRequest from "../api/user/userLoginRequest.js";
import userSignUpRequest from "../api/user/userSignUpRequest.js";

export const useAuthStore = defineStore("auth", () => {
  const authToken = ref(null);
  const isUserAuthenticated = ref(false);
  const isThereLoginError = ref(false);

  const getUserToken = computed(() => {
    return authToken.value;
  });

  async function userLogin(userLoginCred) {
    const { user, status, error } = await userLoginRequest(userLoginCred);
    // console.log(user.idToken);
    if (!error) {
      if ((status === 200) & !!user.idToken) {
        authToken.value = user.idToken;
        isUserAuthenticated.value = true;
        isThereLoginError = false;
      }
    } else {
      isUserAuthenticated.value = false;
      isThereLoginError.value = true;
    }
  }

  async function userSignUp(userSignupCred) {
    const { user, status } = await userSignUpRequest(userSignupCred);
    console.log(user);
  }

  function logoutUser() {
    isUserAuthenticated.value = false;
    authToken.value = "";
  }
  return {
    isUserAuthenticated,
    userLogin,
    userSignUp,
    logoutUser,
    isThereLoginError,
  };
});
