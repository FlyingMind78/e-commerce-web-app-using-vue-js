import { defineStore } from "pinia";
import { ref, computed } from "vue";
import userLoginRequest from "../api/user/userLoginRequest.js";
import userSignUpRequest from "../api/user/userSignUpRequest.js";

export const useAuthStore = defineStore("auth", () => {
  const authToken = ref(null);
  const isUserAuthenticated = ref(false);

  const getUserToken = computed(() => {
    return authToken.value;
  });

  async function userLogin(userLoginCred) {
    const { user, status } = await userLoginRequest(userLoginCred);
    console.log(user.idToken);
    authToken.value = user.idToken;
    if ((status === 200) & !!user.idToken) {
      isUserAuthenticated.value = true;
    } else {
      isUserAuthenticated.value = false;
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
  };
});
