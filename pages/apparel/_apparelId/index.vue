<template>
  <div>

    <div class="container flex max-w-screen-xl px-4 py-6 flex-col lg:flex-row gap-5">
      <div class="lg:flex-1 w-full">
        <img class="object-cover" :src="apparel.apparelImage" :alt="apparel.apparelProduct">
      </div>

      <div class="lg:flex-1 ">
        <h2 class="text-3xl">{{ apparel.apparelProduct }}</h2>
        <div class="flex gap-5">
          <div class="text-xl text-red-600">{{ new Intl.NumberFormat("Rp", {
            style: "currency",
            currency: "idr",
          }).format(IDRPriceDiskon) }}</div>
          <div class="text-xl line-through">{{ new Intl.NumberFormat("Rp", {
            style: "currency",
            currency: "idr",
          }).format(apparel.price) }}</div>
        </div>

        <button @click="buyNow" type="submit"
          class="w-full rounded bg-btn px-6 py-3 my-4 text-sm font-bold uppercase tracking-wide text-white ">
          Beli Sekarang
        </button>

        <!-- <fieldset class="mt-4">
          <legend class="mb-1 text-sm font-medium">Size</legend>

          <div class="flex flex-wrap gap-3">

            <label for="size_m" class="cursor-pointer">
              <input type="radio" name="size" id="size_m" class="peer sr-only" />

              <span
                class="group inline-flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                M
              </span>
            </label>

            <label for="size_l" class="cursor-pointer">
              <input type="radio" name="size" id="size_l" class="peer sr-only" />

              <span
                class="group inline-flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                L
              </span>
            </label>

            <label for="size_xl" class="cursor-pointer">
              <input type="radio" name="size" id="size_xl" class="peer sr-only" />

              <span
                class="group inline-flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                XL
              </span>
            </label>
          </div>
        </fieldset> -->

        <div class="mt-4">
          <label class="block" for="qty">Quantity</label>
          <input type="number" id="qty" min="1" v-model="qty"
            class="w-14 mt-1 rounded-lg border border-gray-600 p-3 text-sm" />
        </div>

        <div class="p-4 bg-[#F5F5F5] my-4">
          <p>{{ apparel.description }}</p>
        </div>

        <img src="../../../static/htb.png" alt="How To Order">
      </div>

    </div>

    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
      <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2">
        <h3 class="text-xl uppercase">You may also like</h3>
      </div>
    </div>
    <main class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
      <div v-for="item in apparelsCategory" :key="apparelsCategory.id"
        v-show="item.category == apparel.category && item.id !== apparel.id">
        <nuxt-link tag="a" :to="{ name: 'apparel-apparelId', params: { apparelId: item.id } }" href="#"
          class="block group mb-5 sm:w-64 md:w-80 lg:w-64">
          <img :src="item.apparelImage" :alt="item.apparelProduct" class="object-cover w-full rounded aspect-square" />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {{ item.apparelProduct
              }}
            </h3>

            <div class="flex justify-start gap-5">
              <p class="mt-1 text-sm text-gray-700">Rp. {{ new Intl.NumberFormat("Rp", {
                style: "currency",
                currency: "idr",
              }).format(afterDiscon(item.price, item.discon)) }}</p>
              <p class="mt-1 text-sm text-red-600 line-through">{{ new Intl.NumberFormat("Rp", {
                style: "currency",
                currency: "idr",
              }).format(item.price) }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>

    </main>


    <!-- {{ $route.params }} -->
    <!-- {{ formatIDR }} -->
    <!-- <h1>{{ $route.params.detail.name }}</h1>
    <img :src="$route.params.detail.img" alt="jaket"> -->
    <!-- <p>Rp. {{ `${this.$test.convertIDR($route.params.detail.price)}` }},-</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      qty: 1
    }
  },
  asyncData({ store, params }) {
    const apparel = store.getters.detailApparel(params.apparelId)
    return { apparel }
  },
  // mounted() { this.$test.ping() },
  computed: {
    // IDRPrice() {
    //   return this.$helper.convertIDR(this.apparel.price)
    // },
    IDRPriceDiskon() {
      return this.$helper.discon(this.apparel.price, this.apparel.discon)
    },

    apparelsCategory() {
      return this.$store.getters.apparelData;
    }
  },
  methods: {
    // formatIDR(price) {
    //   return this.$helper.convertIDR(price)
    // },
    afterDiscon(price, discon) {
      return this.$helper.discon(price, discon)
    },
    buyNow() {
      window.location.href =
        "https://wa.me/6281558903315?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" +
        this.apparel.apparelProduct +
        "%0AHarga%3A%20" +
        this.$helper.discon(this.apparel.price, this.apparel.discon) +
        "%0AJumlah%3A%20" +
        this.qty +
        "%0ATotal Pembayaran%3A%20" +
        this.qty * this.$helper.discon(this.apparel.price, this.apparel.discon) +
        "%0A%0ATerimakasih";
    },
  }
}
</script>
<style></style>
