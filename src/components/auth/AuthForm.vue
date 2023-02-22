<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <!-- Login -->

    <div v-if="isFormLogin">
      <h3 class="text-xl font-bold text-fuchsia-900 mb-4 m-0 text-center">
        Login
      </h3>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
          Email
        </label>
        <input v-model="loginEmail"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email" type="text" placeholder="Email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Password">
          Password
        </label>
        <input v-model="loginPassword"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Password" type="password" placeholder="Password" />
      </div>
      <a class="inline-block mb-4 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
        @click="switchForm">
        Create New Account
      </a>

      <div class="flex items-center justify-between">
        <base-button btnName="Login In" @click="loginHandler"> </base-button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </div>

    <!-- Sign up -->
    <div v-else>
      <h3 class="text-xl font-bold text-fuchsia-900 mb-4 m-0 text-center">
        Sign Up
      </h3>



      <!-- <BaseInput inputType="text" labelName="Firstname" />
      <BaseInput inputType="text" labelName="Lastname" />
      <BaseInput inputType="email" labelName="Email" />
      <BaseInput inputType="password" labelName="Enter password" />
      <BaseInput inputType="password" labelName="Confirm password" /> -->


      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Firstname">
          Firstname
        </label>
        <input v-model="firstName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Firstname" type="text" placeholder="Firstname" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Lastname">
          Lastname
        </label>
        <input v-model="lastName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Lastname" type="text" placeholder="Lastname" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
          Email
        </label>
        <input v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email" type="email" placeholder="Email" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Password">
          Password
        </label>
        <input v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Password" type="password" placeholder="Password" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Confirm Password">
          Confirm Password
        </label>
        <input v-model="confirmPassword"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Confirm Password" type="password" placeholder="Confirm Password" />
      </div>



      <div class="flex items-center justify-between">
        <base-button btnName="Sign Up" @click="signUpHandler"> </base-button>
        <a class="inline-block cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          @click="switchForm">
          Login
        </a>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/Auth.js"
//  login in 
const loginEmail = ref(null)
const loginPassword = ref(null)


//  sign up form
const firstName = ref(null)
const lastName = ref(null)
const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
// const isSignUpFormValidated = ref(formValidateRule)

const { userSignUp, userLogin } = useAuthStore()

const isFormLogin = ref(true);

function resetSignUpForm() {
  firstName.value = ""
  lastName.value = ""
  email.value = ""
  password.value = ""
  confirmPassword.value = ""
}



function validateSignUpForm() {
  return !!firstName.value && !!lastName.value & email.value.includes("@") & !!password.value & !!confirmPassword.value & password.value === confirmPassword.value ? true : false;
}

function signUpHandler() {
  if (!validateSignUpForm()) {
    alert("Fill inputs properly")
  }
  const userData = {
    email: email.value,
    password: password.value,
    returnSecureToken: true
  }
  console.log("Signup user data: ", userData)
  resetSignUpForm()
  userSignUp(userData)
}



function loginHandler() {
  const userLoginData = {
    email: loginEmail.value,
    password: loginPassword.value,
    returnSecureToken: true
  }
  loginEmail.value = ""
  loginPassword.value = ""
  userLogin(userLoginData)
}

function switchForm() {
  isFormLogin.value = !isFormLogin.value;
}


</script>
