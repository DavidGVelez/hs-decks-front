<template>
  <CardInfo :info="card" />
</template>

<script>
import CardInfo from '@/components/card/CardInfo.vue'
export default {
  components: { CardInfo },
  name: 'CardLayout',

  props: {
    card: {
      type: Object
    }
  }
}
</script>
