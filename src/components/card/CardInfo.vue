<template>
  <section class="flex flex-col">
    <h1 class="text-black text-3xl">{{ this.info.name }}</h1>
    <div class="flex flex-col-reverse md:flex-row">
      <!-- Info -->
      <div class="flex-1 pt-4">
        <!-- Description -->
        <div class="flex flex-col text-left mb-4">
          <h3 class="title-lg">Card Text</h3>
          <span v-html="info.text"></span>
        </div>
        <!-- Flavor text -->
        <div class="flex flex-col text-left mb-4">
          <h3 class="title-lg">Flavor Text</h3>
          <span class="italic">{{ info.flavor }}</span>
        </div>
        <div class="flex flex-col text-left mb-4">
          <h3 class="title-lg">More info</h3>
          <div class="card">
            <!-- classes -->
            <div class="flex flex-col text-left mb-2">
              <div>
                <span class="font-bold">Classes: </span>{{ showClasses }}
              </div>
            </div>

            <!-- set -->
            <div class="flex flex-col text-left mb-2">
              <div>
                <span class="font-bold">Set: </span
                ><span>{{ info.set.name }}</span>
              </div>
            </div>
            <!-- keywords -->
            <div class="flex text-left mb-2">
              <div>
                <span class="font-bold">Keywords: </span>
                <span>{{ showKeywords }}</span>
              </div>
            </div>
            <!-- crafting dust -->
            <div class="flex text-left mb-2">
              <div>
                <span class="font-bold">Crafing cost: </span>
                <span
                  >{{ info.rarity.craftingCost[0] }} /
                  {{ info.rarity.craftingCost[1] }} (Golden)</span
                >
              </div>
            </div>

            <div class="flex text-left mb-2">
              <div>
                <span class="font-bold">Dust value: </span>
                <span
                  >{{ info.rarity.dustValue[0] }} /
                  {{ info.rarity.dustValue[1] }} (Golden)</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Image -->
      <div
        class="flex flex-col flex-1 justify-center items-center mb-8 md:mb-0"
      >
        <img class="image" :src="info.image" />

        <div class="w-full flex mt-2 justify-center">
          <!-- Rarity -->
          <BadgeComponent
            class="mr-4"
            :text="info.rarity.name"
            :color="rarityColor"
          />

          <!-- SpellSchool -->
          <BadgeComponent
            v-if="info.spellSchool"
            :text="info.spellSchool[0].name"
            :color="schoolSpellColor"
          />

          <!-- Tribe -->
          <BadgeComponent
            v-if="info.minionType"
            :text="info.minionType[0].name"
            color="bg-neutral-200"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BadgeComponent from '@/components/common/BadgeComponent.vue'
export default {
  name: 'CardInfo',
  components: { BadgeComponent },
  data() {
    return {
      rarityColor: '',
      schoolSpellColor: '',
      tribeColor: ''
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    const colors = {
      common: 'bg-neutral-200',
      rare: 'bg-blue-600',
      epic: 'bg-purple-700',
      legendary: 'bg-amber-400',
      arcane: 'bg-indigo-500 text-white',
      fire: 'bg-red-500',
      frost: 'bg-cyan-300',
      nature: 'bg-yellow-700',
      holy: 'bg-amber-300',
      shadow: 'bg-purple-500',
      fell: 'bg-emerald-600'
    }
    this.rarityColor = colors[this.info.rarity.slug] || 'bg-neutral-200'
    this.schoolSpellColor = colors['arcane'] || 'bg-neutral-200'
  },
  computed: {
    showKeywords() {
      return this.info.keywords.map((keyword) => keyword.name).join(',')
    },
    showClasses() {
      return this.info.classes.map((keyword) => keyword.name).join(',')
    }
  }
}
</script>
<style scoped>
.image {
  max-height: 425px;
  vertical-align: middle;
}
</style>
