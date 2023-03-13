<template>
  <div>

    <main class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center min-h-screen[]">
      <div v-for="item in apparels" :key="apparels.id">
        <nuxt-link tag="a" :to="{ name: 'apparel-apparelId', params: { apparelId: item.id } }" href="#"
          class="block group mb-5 sm:w-64 md:w-80 lg:w-64">
          <img :src="item.apparelImage" :alt="item.name" class="object-cover w-full rounded aspect-square" />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {{ item.apparelProduct }}
            </h3>

            <!-- <div class="flex justify-start gap-5">
              <p class="mt-1 text-sm text-gray-700">Rp. {{ afterDiscon(item.price, item.discon) }}</p>
              <p class="mt-1 text-sm text-red-600 line-through">{{ formatIDR(item.price) }}</p>
            </div> -->
            <div class="flex justify-start gap-5">
              <p class="mt-1 text-sm text-gray-700">{{ new Intl.NumberFormat("Rp", {
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

  </div>
</template>

<script>
export default {
  middleware: "check-auth",
  name: 'IndexPage',
  methods: {
    // formatIDR(price) {
    //   return this.$helper.convertIDR(price)
    // },
    afterDiscon(price, discon) {
      return this.$helper.discon(price, discon)
    },
  },
  data() {
    return {
      // clothes: [
      //   {
      //     name: "Navy Jacket",
      //     desc: "Warna yang terlihat pada gambar mungkin tidak 100% sama dengan produk yang sebenarnya, disebabkan karena proses pencahayaan pada saat pengambilan gambar.",
      //     priceThrough: 10,
      //     price: 500000,
      //     img: "https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108579.jpg?w=740&t=st=1675616674~exp=1675617274~hmac=dc5012b5c510f094c322b1cfe9c032b5fb68bcd50cb383f383995eb244fa296d",
      //     id: 1,
      //   },
      //   {
      //     name: "Denim Jacket",
      //     priceThrough: 10,
      //     price: 1000000,
      //     img: "https://img.freepik.com/free-photo/attractive-smiling-happy-woman-making-selfie-photo-isolated-white-studio-wall-dressed-jeans-denim-shirt-wearing-yellow-sunglasses-hipster-style-outfit_231208-1679.jpg?w=740&t=st=1675616919~exp=1675617519~hmac=e71d1695723603b9b554b0fd2ff27733d291b3c20af3ca7e1be847825a63605b",
      //     id: 2,
      //   },
      //   {
      //     name: "Black Shirt",
      //     priceThrough: 10,
      //     price: 150000,
      //     img: "https://img.freepik.com/free-photo/portait-young-handsome-man_1303-9709.jpg?w=740&t=st=1675617022~exp=1675617622~hmac=b7c4f706c71bd460a742966c1546c942577e10066fa1a2202e2572c627b21874",
      //     id: 3,
      //   },
      //   {
      //     name: "Blazer",
      //     priceThrough: 10,
      //     price: 2000000,
      //     img: "https://img.freepik.com/free-photo/medium-shot-woman-wearing-blazer_23-2148365040.jpg?w=740&t=st=1675617107~exp=1675617707~hmac=f612d05cd01f1b25512657470022f5eb875f7fb9658173d3bb7288abceee36ef",
      //     id: 4,
      //   },
      // ]
    }
  },
  computed: {
    apparels() {
      return this.$store.getters.apparelData
    }
  },
}
</script>

<style></style>
