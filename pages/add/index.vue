<template>
  <div class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-start">
      <nuxt-link tag="button" to="/user" class="rounded-md mx-10 p-4 text-sm text-white bg-slate-600"><i
          class="fa fa-arrow-left" aria-hidden="true"> Back</i></nuxt-link>
    </div>
    <h1 class="text-2xl text-center font-bold text-white">Tambah Data Apparel</h1>
    <app-apparel-form></app-apparel-form>
  </div>
</template>

<script>
import ApparelForm from '../../components/admin/ApparelForm.vue';
export default {
  layout: 'plain',
  middleware: ["check-auth", "auth"],
  components: {
    "app-apparel-form": ApparelForm
  }
}
</script>
