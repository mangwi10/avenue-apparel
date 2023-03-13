<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen text-white">
    <div class="flex justify-start">
      <nuxt-link tag="button" to="/" class="rounded-md mx-10 p-4 text-sm text-white bg-slate-600"><i
          class="fa fa-arrow-left" aria-hidden="true"> Back</i></nuxt-link>
    </div>
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Sign in</h1>
    </div>

    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <div>
          <input class="w-full rounded-lg border-gray-200 p-3 text-sm text-slate-900" placeholder="email" type="email"
            id="email" v-model="email" />
        </div>
      </div>

      <div>
        <label for="password">Password</label>
        <div>
          <input class="w-full rounded-lg border-gray-200 p-3 text-sm text-slate-900" placeholder="Enter Password"
            type="password" id="password" v-model="password" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button type="submit" class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Sign in
        </button>
        <p class="text-sm text-gray-500">
          No account?
          <nuxt-link to="/user/signup">Sign up</nuxt-link>
        </p>

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
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: true,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push("/user");
        })

    },
  },
};
</script>
<style></style>
