<template>
  <div>
    <nav class="px-2 bg-bg-nav border-gray-200 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex">
          <button @click="toggle = !toggle" data-collapse-toggle="navbar-dropdown" type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <nuxt-link tag="a" to="/" class="flex mx-5">
            <h1 class="text-white font-bold text-2xl md:text-3xl">AVENUE <span class="text-red-600">.</span></h1>
          </nuxt-link>
        </div>

        <div :class="{ hidden: toggle }" class="capitalize order-last w-full md:order-none md:block md:w-auto"
          id="navbar-dropdown">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-bg-nav dark:bg-gray-800 md:">
            <li class="relative">
              <button @click="dropdown = !dropdown" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bg-footer md:p-0 md:w-auto ">Products
                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg></button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar" :class="{ hidden: dropdown }"
                class="z-10 absolute font-normal bg-bg-nav divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul class="py-2 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li v-for="item in categorys" @click="filterProducts(item)">
                    <nuxt-link tag="a" to="/filter" class="block px-4 py-2 hover:bg-gray-100 ">{{ item
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <nuxt-link to="/about"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bg-footer md:p-0 ">About
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bg-footer md:p-0 ">Contact
              </nuxt-link>
            </li>

          </ul>
        </div>
        <div class="flex flex-1 items-center justify-end gap-8 h-20">
          <div class="flex items-center">
            <div class="flex items-center">

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
    </nav>


  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: 'false',
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
