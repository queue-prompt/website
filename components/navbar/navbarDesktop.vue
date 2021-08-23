<template>
  <div>
    <nav>
      <div class="lg:flex justify-between items-center w-full py-4 hidden">
        <img src="~/assets/images/logo_80h.png" />

        <div class="lg:w-1/3">
          <ul
            class="
              font-normal
              text-lg
              flex
              justify-between
              items-center
              text-gray-light
            "
          >
            <li class="cursor-pointer hover:underline hover:text-green">
              <a href="#section-welcome">Home</a>
            </li>
            <li class="cursor-pointer hover:underline hover:text-green">
              <a @click="goToDemo" href="#section-welcome">DEMO</a>
            </li>
            <li class="cursor-pointer hover:underline hover:text-green">
              <a @click="goToCheckQueue" href="#section">ตรวจคิว</a>
            </li>

            <li class="cursor-pointer hover:underline hover:text-green">
              <a @click="goToAdminWeb">สมัคร</a>
            </li>
            <li class="cursor-pointer hover:underline hover:text-green">
              <a @click="goToAdminWeb">เข้าสู่ระบบ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    goToAdminWeb: { type: Function, required: true },
    goToCheckQueue: { type: Function, required: true },
    goToDemo: { type: Function, required: true },
  },
}
</script>

<style scoped>
</style>
