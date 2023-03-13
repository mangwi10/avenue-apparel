<template>
  <div>
    <div class="flex flex-col h-screen bg-white">
      <img
        src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=900&t=st=1678280699~exp=1678281299~hmac=e7366be738bed6c41d2e6e26e7e348b31a7dda2781bf66c9a37a34094256c0e9"
        alt="" class="object-cover w-full h-64" />

      <div class="flex items-center justify-center flex-1">
        <div class="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>

          <p class="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <nuxt-link to="/"
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-bg-nav rounded hover:bg-indigo-800 focus:outline-none focus:ring">
            Go Back Home
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style></style>
