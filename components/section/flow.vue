<template>
  <div class="mx-auto px-4 py-16 xl:px-0 bg-gray-bg">
    <div class="mx-auto container">
      <div class="mb-4 lg:mb-20">
        <h1
          class="
            text-center text-2xl
            lg:text-5xl
            font-bold
            text-gray
            tracking-1px
          "
        >
          วิธีการใช้งาน
        </h1>
        <h2
          class="
            text-base
            lg:text-lg
            text-center text-gray-light
            mt-5
            tracking-wider
          "
        ></h2>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
          <ul
            class="
              flex
              mb-0
              justify-center
              list-none
              flex-wrap
              pt-3
              pb-4
              flex-row
            "
          >
            <li class="-mb-px last:mr-0 flex justify-center w-6/12 text-center">
              <a
                class="
                  font-bold
                  uppercase
                  cursor-pointer
                  px-5
                  py-3
                  shadow-lg
                  rounded-3xl
                  font-bold
                  text-xl
                  block
                  leading-normal
                  xl:w-6/12
                "
                @click="toggleTabs('entity')"
                :class="{
                  'text-black bg-white border border-black':
                    openTab !== 'entity',
                  'text-white bg-green': openTab === 'entity',
                }"
              >
                หน่วยงาน
              </a>
            </li>

            <li class="-mb-px last:mr-0 flex justify-center w-6/12 text-center">
              <a
                class="
                  font-bold
                  cursor-pointer
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded-3xl
                  font-bold
                  text-xl
                  block
                  leading-normal
                  xl:w-6/12
                "
                @click="toggleTabs('people')"
                :class="{
                  'text-black bg-white border border-black':
                    openTab !== 'people',
                  'text-white bg-green': openTab === 'people',
                }"
              >
                ประชาชน
              </a>
            </li>
          </ul>

          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6"
            v-if="openTab !== null"
          >
            <div class="px-4 flex-auto sm:py-5">
              <div class="tab-content tab-space">
                <div
                  class="mt-20"
                  v-if="openTab == 'entity'"
                  :class="{ hidden: openTab !== 'entity' }"
                >
                  <FlowEntity />
                </div>
                <div
                  class="mt-20"
                  v-if="openTab == 'people'"
                  :class="{ hidden: openTab !== 'people' }"
                >
                  <FlowPeople />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlowEntity from '../flow/flowEntity.vue'
import FlowPeople from '../flow/flowPeople.vue'
export default {
  components: {
    FlowEntity,
    FlowPeople,
  },
  mounted() {
    this.toggleTabs('entity')
  },
  data() {
    return {
      openTab: null,
    }
  },
  methods: {
    toggleTabs(tabName) {
      this.openTab = tabName
    },
  },
}
</script>

<style scoped>
</style>
