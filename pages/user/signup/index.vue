<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen text-white">
    <div class="flex justify-start">
      <nuxt-link tag="button" to="/" class="rounded-md mx-10 p-4 text-sm text-white bg-slate-600"><i
          class="fa fa-arrow-left" aria-hidden="true"> Back</i></nuxt-link>
    </div>
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Sign Up</h1>
    </div>

    <form @submit.prevent="onSubmit" action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label for="email">Username</label>
        <div>
          <input type="text" class="w-full rounded-lg border-gray-200 text-slate-900 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter username" v-model="username" />
        </div>
      </div>
      <div>
        <label for="email">Email</label>
        <div>
          <input type="email" class="w-full rounded-lg border-gray-200 text-slate-900 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email" v-model="email" />
        </div>
      </div>

      <div>
        <label for="password">Password</label>

        <div>
          <input type="password" class="w-full rounded-lg border-gray-200 text-slate-900 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password" v-model="password" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <nuxt-link to="/user/login">Sign In</nuxt-link>
        </p>

        <button type="submit" class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  middleware: "check-auth",
  layout: 'plain',
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: false,
        email: this.email,
        password: this.password,
        displayName: this.username,
      })
        .then(() => {
          this.$router.push("/");
        });
      // console.log(this.email);
      // console.log(this.password);
    },
  },
};
</script>
<style></style>
