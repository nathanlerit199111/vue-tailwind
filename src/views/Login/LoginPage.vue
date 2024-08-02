<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  import {
    SectionWrapper,
    ContainerWrapper,
    RowWrapper,
    ColumnWrapper,
    FormWrapper,
    InputComponent,
    SelectCountry,
    ButtonComponent
  } from '@/components/index.js'

  import { passwordRules, validatePassword } from '@/helpers/form-validation.js'

  //TOAST MESSAGE
  import ToastWrapper from '@/components/Wrappers/ToastWrapper.vue'
  import { useToastStore } from '@/stores/toast'

  //VUE PRIME
  import Button from 'primevue/button'

  //API
  import AuthApi from '@/api/auth-api.js'

  const router = useRouter()
  //Register
  const isRegister = ref(false)
  const register = ref({
    password: ''
  })

  const countTrueConditions = (obj) => {
    return Object.values(obj).filter((val) => val).length
  }

  const confirmPassword = ref('')
  const confirmPasswordMatches = () => {
    // Check if the length of confirmPassword is greater than 0 before comparing
    if (confirmPassword.value.length > 0) {
      return confirmPassword.value === register.value.password
    } else {
      return true // Return true if length is less than or equal to 1
    }
  }

  onMounted(() => {
    validatePassword(register.value.password)
  })

  //API REQUEST
  const username = ref('emilys')
  const password = ref('emilyspass')
  // const username = ref('')
  // const password = ref('')

  const login = async () => {
    let response = ''
    try {
      response = await AuthApi.getToken({
        username: username.value,
        password: password.value
      })
      if (response?.status === 200) {
        let expires = ''
        let token = response?.data?.token
        let days = 1
        var date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = '; expires=' + date.toUTCString()
        document.cookie = 'authToken' + '=' + token + expires + '; path=/'

        // Dummy set user info
        const userProfile = {
          id: response.data.id,
          fullname: `${response.data.firstName} ${response.data.lastName}`,
          email: response.data.email,
          image: response.data.image,
          role: {
            id: 1,
            role: 'Admin',
            slug: 'admin'
          }
        }
        const userProfileStr = JSON.stringify(userProfile)
        document.cookie = 'userProfile' + '=' + userProfileStr + ';' + expires + ';path=/'

        router.push('/')
      }
    } catch (e) {
      toast.showToast({
        status: e.response.status,
        message: e.response.data.message
      })
    }
  }

  const toast = useToastStore()
  const isRequired = (value) => {
    if (!value) {
      return 'This field is required'
    }
    return true
  }
</script>
<template>
  <ToastWrapper position="top-right" />
  <SectionWrapper
    id="login-wrapper"
    additional_class="h-full"
  >
    <ContainerWrapper additional_class="h-full">
      <RowWrapper additional_class="items-center h-full">
        <ColumnWrapper additional_class="w-4/12 max-w-md mx-auto">
          <FormWrapper @submit="login">
            <div
              v-if="!isRegister"
              class="my-gap-md"
            >
              <h2>Login</h2>
              <div>
                <label>Username</label>
                <InputComponent
                  additional_class="block w-full"
                  type="email"
                  name="email"
                  v-model="username"
                  :rules="isRequired"
                />
              </div>
              <div>
                <label>Password</label>
                <InputComponent
                  additional_class="block w-full"
                  type="password"
                  name="password"
                  v-model="password"
                  :rules="isRequired"
                />
              </div>
              <p class="text-xs">Forgot password</p>
              <div class="flex mx-gap-md">
                <ButtonComponent
                  label="Login"
                  btn_type="primary"
                  variant=""
                  size="large"
                />
                <ButtonComponent
                  label="Register"
                  btn_type="secondary"
                  variant=""
                  size="large"
                  @click="isRegister = true"
                />
              </div>
            </div>

            <div
              v-if="isRegister"
              class="my-gap-md"
            >
              <h2>Register</h2>
              <div>
                <label>First Name</label>
                <InputComponent
                  additional_class="block w-full"
                  name="first_name"
                  type="text"
                  :rules="isRequired"
                />
              </div>
              <div>
                <label>Last Name</label>
                <InputComponent
                  additional_class="block w-full"
                  name="last_name"
                  type="text"
                  :rules="isRequired"
                />
              </div>
              <div>
                <label>Address</label>
                <InputComponent
                  additional_class="block w-full"
                  name="address"
                  type="text"
                  :rules="isRequired"
                />
              </div>
              <div>
                <label>Country</label>
                <SelectCountry additional_class="w-full" />
              </div>
              <div>
                <label>Password</label>
                <InputComponent
                  v-model="register.password"
                  additional_class="block w-full"
                  name="password"
                  type="password"
                  :inputChange="validatePassword(register.password)"
                  :rules="isRequired"
                />
                <!-- <InputText v-model="register.password" class="block p-2 w-full" type="password" @input="validatePassword(register.password)" /> -->
                <div class="password-rules">
                  <div>
                    <small
                      >Minimum 8 characters
                      <span
                        v-if="passwordRules.minLength"
                        class="text-green-600"
                        >✔</span
                      ></small
                    >
                  </div>
                  <div>
                    <small
                      >Must have at least 1 Uppercase
                      <span
                        v-if="passwordRules.hasUpperCase"
                        class="text-green-600"
                        >✔</span
                      ></small
                    >
                  </div>
                  <div>
                    <small
                      >Must have at least 1 Lowercase
                      <span
                        v-if="passwordRules.hasLowerCase"
                        class="text-green-600"
                        >✔</span
                      ></small
                    >
                  </div>
                  <div>
                    <small
                      >Must have at least 1 Special Character
                      <span
                        v-if="passwordRules.hasSpecialChar"
                        class="text-green-600"
                        >✔</span
                      ></small
                    >
                  </div>
                </div>
              </div>

              <div>
                <div
                  :class="{
                    'bg-red-500 w-1/3': countTrueConditions(passwordRules) === 1,
                    'bg-orange-500 w-4/6':
                      countTrueConditions(passwordRules) > 1 &&
                      countTrueConditions(passwordRules) <= 3,
                    'bg-green-500 w-full': countTrueConditions(passwordRules) >= 4,
                    'bg-gray-300':
                      countTrueConditions(passwordRules) !== 2 &&
                      countTrueConditions(passwordRules) !== 4
                  }"
                  class="h-2.5 rounded-md transition-all border border-solid border-gray-300"
                />
                <small>
                  <template v-if="countTrueConditions(passwordRules) === 1">Weak</template>
                  <template
                    v-else-if="
                      countTrueConditions(passwordRules) > 1 &&
                      countTrueConditions(passwordRules) <= 3
                    "
                    >Moderate</template
                  >
                  <template v-else-if="countTrueConditions(passwordRules) >= 4">Strong</template>
                </small>
              </div>

              <div>
                <label>Confirm Password</label>
                <InputComponent
                  additional_class="block w-full"
                  name="confirm_password"
                  type="password"
                  v-model="confirmPassword"
                  :disabled="countTrueConditions(passwordRules) < 4"
                />
                <!-- <InputText :disabled="countTrueConditions(passwordRules) < 4" v-model="confirmPassword" class="block p-2 w-full" type="password" /> -->
                <small
                  v-if="!confirmPasswordMatches()"
                  class="text-red-500"
                  >Passwords do not match</small
                >
              </div>
              <div class="flex mx-gap-md">
                <ButtonComponent
                  label="Sign Up"
                  btn_type="primary"
                  variant=""
                  size="large"
                />
                <ButtonComponent
                  label="Cancel"
                  btn_type="secondary"
                  variant=""
                  size="large"
                  @click="isRegister = false"
                />
              </div>
            </div>
          </FormWrapper>
        </ColumnWrapper>
      </RowWrapper>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- BACKGROUND ANIMATION -->
  <ul class="floating-squares">
    <li
      v-for="n in 10"
      :key="n"
    />
  </ul>
</template>
