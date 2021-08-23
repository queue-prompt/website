<template>
  <div>
    <div class="mx-auto container relative px-6 xl:px-0">
      <NavBarDesktop
        :goToAdminWeb="goToAdminWeb"
        :goToDemo="goToDemo"
        :goToCheckQueue="goToCheckQueue"
      />
      <NavBarMobile
        :goToAdminWeb="goToAdminWeb"
        :goToDemo="goToDemo"
        :goToCheckQueue="goToCheckQueue"
      />

      <!-- Welcome -->
      <Welcome
        :goToAdminWeb="goToAdminWeb"
        :goToDemo="goToDemo"
        :goToCheckQueue="goToCheckQueue"
      />
    </div>

    <!-- Features -->
    <Fearures />

    <!-- Suite for -->
    <SuiteFor />

    <!-- FLOW -->
    <Flow />

    <!-- REVIEW -->
    <!-- <Review /> -->

    <!-- PIRCE -->
    <Pirce :goToAdminWeb="goToAdminWeb" />

    <!-- FAQ -->
    <Faq />

    <OpenSource />

    <!-- FOOTERs -->
    <Footer />

    <!-- SMALL FOOTER -->
    <SmallFooter />
  </div>
</template>

<script>
import NavBarDesktop from '../components/navbar/navbarDesktop.vue'
import NavBarMobile from '../components/navbar/navbarMobile.vue'

import Welcome from '../components/section/welcome.vue'
import Fearures from '../components/section/features.vue'
import SuiteFor from '../components/section/suiteFor.vue'
import Flow from '../components/section/flow.vue'
import OpenSource from '../components/section/openSource.vue'

import Review from '../components/section/review.vue'
import Pirce from '../components/section/pirce.vue'
import Faq from '../components/section/faq.vue'
import Footer from '../components/section/footer.vue'
import SmallFooter from '../components/section/smallFooter.vue'

export default {
  components: {
    NavBarDesktop,
    NavBarMobile,

    Welcome,
    Fearures,
    SuiteFor,
    Flow,
    Review,
    Pirce,
    Faq,
    OpenSource,
    Footer,
    SmallFooter,
  },
  methods: {
    goToAdminWeb() {
      window.open('https://admin.คิวพร้อม.com')
    },
    goToCheckQueue() {
      window.open('https://คิวพร้อม.com?q=search')
    },
    goToDemo() {
      window.open('https://คิวพร้อม.com?e=0001')
    },
  },
}
</script>

<style scoped>
</style>
