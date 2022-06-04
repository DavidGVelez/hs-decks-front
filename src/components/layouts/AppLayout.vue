<template>
  <div>
    <Nav />
    <main class="mx-5 mt-10">
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from '@/components/common/NavComponent.vue'

export default {
  components: { Nav }
}
</script>
