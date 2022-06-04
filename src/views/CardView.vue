<template>
  <div>
    <loading :active="loading" :can-cancel="false" :is-full-page="false" />
    <card-layout v-if="!loading" :card="card.data"></card-layout>
  </div>
</template>
<script>
import Api from '@/repositories/ApiRepository'
import CardLayout from '@/components/layouts/CardLayout.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'CardView',
  components: {
    Loading,
    CardLayout
  },
  data() {
    return {
      card: null,
      loading: false
    }
  },

  methods: {
    async fetchData(id) {
      let res = await Api.getCard(id)
      // * TODO: add nested fetch
      return res
    }
  },
  async created() {
    this.loading = true
    this.card = await this.fetchData(this.$route.params)
    this.loading = false
  }
}
</script>
