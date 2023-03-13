<template>
  <div>
    <header aria-label="Site Header" class="border-b border-gray-100 bg-bg-nav">
      <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button type="button" class="p-2 lg:hidden" data-collapse-toggle="navbar-dropdown"
            @click="dropdown = !dropdown">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nuxt-link tag="a" to="/" class="flex">
            <h1 class="text-white font-bold text-2xl md:text-3xl">AVENUE <span class="text-red-600">.</span></h1>
          </nuxt-link>
        </div>

        <div class="flex flex-1 items-center justify-end gap-8 h-20" id="navbar-dropdown">
          <!-- <nav aria-label="Site Nav"
            class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-white">

            <div class="relative">
              <nuxt-link to="/"
                class="peer block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
                Products
              </nuxt-link>
              <div
                class="hidden text-center peer-hover:flex flex-col absolute bg-bg-nav divide-y divide-solid z-10 -left-0.5 hover:block min-w-[110px]">
                <div v-for="item in categorys" @click="filterProducts(item)">
                  <nuxt-link tag="a" to="/filter"
                    class="block hover:border-b-2 hover:border-current hover:text-bg-footer py-4">{{ item }}</nuxt-link>
                </div>
              </div>
            </div>

            <nuxt-link to="/about"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
              About
            </nuxt-link>

            <nuxt-link to="/contact"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
              Contact
            </nuxt-link>
          </nav> -->

          <div :class="{ hidden: dropdown }" class="w-full md:block md:w-auto" id="navbar-dropdown">
            <ul
              class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page">Home</a>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown
                  <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                      out</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>

          <div class="flex items-center">
            <div class="flex items-center">
              <span>
                <a href="/cart" class="block border-b-4 border-transparent p-6 hover:border-bg-ftext-bg-footer">
                  <svg class="h-4 w-4 text-bg-footer" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>

                  <span class="sr-only">Cart</span>
                </a>
              </span>

              <span>
                <nuxt-link v-if="$store.getters.isAuthenticated" tag="a" to="/user"
                  class="block border-b-4 border-transparent p-6 hover:border-bg-ftext-bg-footer">
                  <svg class="h-4 w-4 text-bg-footer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="sr-only"> Account </span>
                </nuxt-link>
              </span>
              <span>
                <nuxt-link v-if="!$store.getters.isAuthenticated" tag="a" to="/user/login"
                  class="block border-b-4 border-transparent p-6 hover:border-bg-ftext-bg-footer">
                  <i class="fa fa-sign-in h-4 w-4 text-bg-footer" aria-hidden="true"></i>
                  <span class="sr-only"> Sign In </span>
                </nuxt-link>
              </span>

              <span @click="logout" v-if="$store.getters.isAuthenticated">
                <nuxt-link tag="a" to="/"
                  class="block border-b-4 border-transparent p-6 hover:border-bg-ftext-bg-footer cursor-pointer">
                  <i class="fa fa-sign-out h-4 w-4 text-bg-footer" aria-hidden="true"></i>
                  <span class="sr-only"> Sign Out </span>
                </nuxt-link>
              </span>


            </div>
          </div>
        </div>
      </div>
    </header>

  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown: 'false'
    }
  },
  methods: {
    logout() {
      // this.$store.commit('setToken', null)
      // this.$router.push("/")
      this.$store.dispatch("logout")
        .then(() => this.$router.push("/"))
    },
    // filterCategory(category) {
    //   this.$router.push(`/filter/${category}`);
    // }
    filterProducts(fill) {
      this.$store.commit('changeCategory', fill)
      console.log(fill);
    }
  },
  computed: {
    categorys() {
      return this.$store.state.categorys
    }
  }
}
</script>
<style></style>
