<template>
  <div>
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <section class="bg-bg-nav text-white">
      <div class="mx-auto max-w-screen-md">
        <div class="rounded-lg p-8 lg:col-span-3 lg:p-12">
          <div class="space-y-4">
            <div>
              <label for="url">URL Image</label>
              <input class="w-full rounded-lg border border-gray-300 text-slate-900 p-3 text-sm" placeholder="http://...."
                type="text" id="url" v-model="newApparel.apparelImage" />
            </div>
            <div>
              <label for="product">Product Name</label>
              <input class="w-full rounded-lg border border-gray-300 text-slate-900 p-3 text-sm"
                placeholder="Blue T-shirt" type="text" id="product" v-model="newApparel.apparelProduct" />
            </div>
            <div>
              <label for="price">Price</label>
              <input class="w-full rounded-lg border border-gray-300 text-slate-900 p-3 text-sm" placeholder="10000"
                type="number" id="price" v-model="newApparel.price" />
            </div>
            <div>
              <label for="discon" class="block">Discount</label>
              <input class="w-1/2 rounded-lg border border-gray-300 text-slate-900 p-3 text-sm" placeholder="50"
                type="number" id="discon" v-model="newApparel.discon" min="0" max="100" />
              <span class="font-bold">%</span>
            </div>
            <div>
              <label for="category">Category</label>
              <select class="w-full rounded-lg border border-gray-300 text-slate-900 p-3 text-sm" name="category"
                id="category" v-model="newApparel.category">
                <option value="tshirt">Tshirt</option>
                <option value="jacket">Jacket</option>
                <option value="shoes">Shoes</option>
                <option value="bag">Bag</option>
              </select>
              <!-- <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" /> -->
            </div>

            <div>
              <label for="description">Desciption</label>
              <textarea class="w-full rounded-lg border-gray-300 text-slate-900 p-3 text-sm" placeholder="Message"
                rows="8" id="description" v-model="newApparel.description"></textarea>
            </div>

            <div class="mt-4">
              <button @click="addApparel"
                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                {{ apparels ? "Update" : "Submit" }}
              </button>
            </div>
          </div>

          <!-- {{ newApparel }} -->
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import axios from "axios"
export default {
  props: {
    apparels: {
      type: Object,
      required: false
    },
  },
  middleware: ["check-auth", "auth"],
  data() {
    return {
      newApparel: this.apparels ? { ...this.apparels } : {
        apparelImage: "",
        apparelProduct: "",
        price: null,
        discon: null,
        category: "",
        description: ""
      },
    }
  },
  methods: {
    addApparel() {
      if (!this.apparels) {
        this.$store.dispatch("addApparel", this.newApparel).then(() => {
          this.$router.push("/user");
        });
      }
      else {
        let { id: _, ...newApparel } = this.newApparel;
        this.$store
          .dispatch("updateApparel", { newApparel, id: this.newApparel.id })
          .then(() => {
            this.$router.push("/user");
          });
      }
    }
  }
}
</script>
<style></style>
