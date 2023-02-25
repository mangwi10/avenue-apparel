<template>
  <div>
    <header aria-label="Site Header" class="border-b border-gray-100 bg-bg-nav">
      <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button type="button" class="p-2 lg:hidden">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a href="#" class="flex">
            <h1 class="text-white font-bold text-3xl">AVENUE <span class="text-red-600">.</span></h1>
          </a>
        </div>

        <div class="flex flex-1 items-center justify-end gap-8">
          <nav aria-label="Site Nav"
            class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-white">
            <a href="/about"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
              About
            </a>

            <div class="relative">
              <a href="/products"
                class="peer block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
                Products
              </a>
              <div
                class="hidden text-center peer-hover:flex flex-col absolute bg-bg-nav divide-y divide-solid z-10 -left-0.5 hover:block min-w-[110px]">
                <a href="#" class="block hover:border-b-2 hover:border-current hover:text-bg-footer py-4">Shoes</a>
                <a href="#" class="block hover:border-b-2 hover:border-current hover:text-bg-footer py-4">Jacket</a>
                <a href="#" class="block hover:border-b-2 hover:border-current hover:text-bg-footer py-4">Tshirt</a>
                <a href="#" class="block hover:border-b-2 hover:border-current hover:text-bg-footer py-4">Bag</a>
              </div>
            </div>

            <a href="/contact"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-bg-footer">
              Contact
            </a>
          </nav>

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
                <a href="/account" class="block border-b-4 border-transparent p-6 hover:border-bg-ftext-bg-footer">
                  <svg class="h-4 w-4 text-bg-footer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>

                  <span class="sr-only"> Account </span>
                </a>
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

}
</script>
<style></style>
