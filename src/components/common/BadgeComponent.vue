<template>
  <div
    :class="`rounded-xl w-fit py-1 px-2 text-black font-bold ${color} tooltip
    }`"
  >
    {{ text }}
    <span v-if="tooltipActive" class="tooltiptext">{{ tooltip }}</span>
  </div>
</template>

<script>
export default {
  name: 'BadgeComponent',
  data() {
    return {
      tooltipActive: true
    }
  },
  props: {
    text: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => ''
    },
    tooltip: {
      type: String,
      default: () => null
    }
  },
  mounted() {
    this.tooltipActive = this.tooltip
  }
}
</script>
<style lang="postcss" scoped>
/* Tooltip container */
.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
