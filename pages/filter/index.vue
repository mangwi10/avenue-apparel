<template>
  <div class="min-h-[80vh]">
    <div class="min-h-[50vh] flex justify-center items-center" v-if="apparels.length === 0">
      <h1 class="text-3xl font-bold text-center uppercase">Sorry, This {{ category }} Products is Empty</h1>
    </div>
    <div v-else class=" text-2xl text-center my-5"> Category "{{ category }}"</div>
    <main class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
      <div v-for="item in apparels" :key="apparels.id">
        <nuxt-link tag="a" :to="{ name: 'apparel-apparelId', params: { apparelId: item.id } }" href="#"
          class="block group mb-5 sm:w-64 md:w-80 lg:w-64">
          <img :src="item.apparelImage" :alt="item.name" class="object-cover w-full rounded aspect-square" />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {{ item.apparelProduct }}
            </h3>

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
  layout: 'default',

  // asyncData({ store }) {
  //   const category = store.state.category;
  //   const apparelData = store.getters.apparelData;
  //   const apparels = apparelData.filter((data) => data.category == category);
  //   return { apparels }
  // },

  //  asyncData({ store, params }) {
  //   const apparel = store.getters.detailApparel(params.apparelId)
  //   return { apparel }
  // },

  methods: {
    formatIDR(price) {
      return this.$helper.convertIDR(price)
    },
    afterDiscon(price, discon) {
      return this.$helper.discon(price, discon)
    },
  },
  data() {
    return {

    }
  },
  computed: {
    apparels() {
      const category = this.$store.state.category;
      const apparelData = this.$store.getters.apparelData;
      if (category === "all") {
        this.$router.push("/");
        return apparelData
      }
      else {
        return apparelData.filter((data) => data.category == category);

      }
    },

    category() {
      return this.$store.state.category
    }

  },
}
</script>

<style></style>
