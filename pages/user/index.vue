<template>
  <div>
    <h1 class="text-2xl text-center mt-5"> Selamat Datang, {{ $store.state.userData?.username }}</h1>
    <div class="flex justify-end">
      <nuxt-link tag="button" to="/add" class="rounded-md mx-10 mt-4 p-4 text-sm text-white bg-green-600"><i
          class="fa fa-plus" aria-hidden="true"> Tambah
          produk</i></nuxt-link>
    </div>
    <div class="min-h-[50vh] flex justify-center items-center" v-if="apparels.length === 0">
      <h1 class="text-3xl font-bold text-center">Data Kosong</h1>
    </div>
    <main class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
      <!-- <h1 v-if="apparels.length === 0" class="text-3xl font-bold text-center">Data Kosong</h1> -->
      <div v-for="item in apparels" :key="apparels.id">
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
        <div class="flex gap-2">
          <div class="px-4 py-2 bg-yellow-400 w-full flex-1 text-center rounded cursor-pointer"
            @click="editApparel(item.id)">
            <i class="fa fa-pencil-square-o text-white" aria-hidden="true"></i>
          </div>
          <div class="px-4 py-2 bg-red-400 w-full flex-1 text-center rounded cursor-pointer"
            @click="deleteApparel(item.id)">
            <i class="fa fa-trash text-white" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </main>
    <!-- <div class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
      <div v-for="item in apparels" :key="apparels.id">
        {{ apparels }}
        <nuxt-link tag="a" :to="{ name: 'detail', params: { detail: item } }" href="#"
          class="block group mb-5 sm:w-64 md:w-80 lg:w-64">
          <img :src="item.img" :alt="item.name" class="object-cover w-full rounded aspect-square" />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {{ item.name }}
            </h3>

            <div class="flex justify-start gap-5">
              <p class="mt-1 text-sm text-gray-700">Rp. {{ afterDiscon(item.price, item.discon) }}</p>
              <p class="mt-1 text-sm text-red-600 line-through">{{ formatIDR(item.price) }}</p>
            </div>
          </div>
        </nuxt-link>

        <div class="flex gap-2">
          <div class="px-4 py-2 bg-yellow-400 w-full flex-1 text-center rounded" @click="editApparel(item.id)">
            <i class="fa fa-pencil-square-o text-white" aria-hidden="true"></i>
          </div>
          <div class="px-4 py-2 bg-red-400 w-full flex-1 text-center rounded" @click="deleteApparel(item.id)">
            <i class="fa fa-trash text-white" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import Index from '../index.vue';

export default {
  layout: 'default',
  middleware: ["check-auth", "auth"],
  methods: {
    // formatIDR(price) {
    //   return this.$helper.convertIDR(price)
    // },
    afterDiscon(price, discon) {
      return this.$helper.discon(price, discon)
    },
    deleteApparel(id) {
      this.$store.dispatch("deleteApparel", id).then(() => {
        this.$router.push("/user")
      });
    },
    editApparel(id) {
      this.$router.push(`/apparel/${id}/edit`);
    },
  },

  computed: {
    apparels() {
      // return this.$store.getters.apparelData
      const userId = this.$store.getters.userId;
      const apparelData = this.$store.getters.apparelData;
      return apparelData.filter((data) => data.userId == userId);
    }
  },
}
</script>
<style></style>
