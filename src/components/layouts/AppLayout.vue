<template>
  <main class="AppLayout">
    <Nav />
    <div>
      <router-view />
    </div>
  </main>
</template>

<script>
import Nav from '@/components/common/NavComponent.vue'

export default {
  components: { Nav }
}
</script>
