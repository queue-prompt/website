<template>
  <div>
    <nav class="lg:hidden py-4">
      <div class="flex py-2 justify-between items-center">
        <div>
          <img src="~/assets/images/logo_80h.png" class="w-3/4" />
        </div>
        <div class="visible flex items-center">
          <ul
            id="list"
            class="
              hidden
              py-2
              border-r
              bg-white
              absolute
              rounded
              top-0
              left-0
              right-0
              shadow
              mt-20
              md:px-4
              md:mt-20
              z-20
            "
          >
            <li
              class="
                flex
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                mt-2
                py-2
                hover:text-indigo-700
                focus:text-indigo-700
                focus:outline-none
                m-2
              "
            >
              <a href="#section-welcome">
                <span class="ml-2 font-bold">Home</span>
              </a>
            </li>
            <li
              class="
                flex flex-col
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                focus:text-indigo-700
                focus:outline-none
                flex
                justify-center
                m-2
              "
              @click="dropdownHandler()"
            >
              <a href="#section-welcome" @click="goToDemo">
                <span class="ml-2 font-bold">DEMO</span>
              </a>
            </li>
            <li
              @click="dropdownHandler()"
              class="
                flex
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                flex
                items-center
                focus:text-indigo-700
                focus:outline-none
                m-2
              "
            >
              <a href="#section-price" @click="goToCheckQueue">
                <span class="ml-2 font-bold">ตรวจคิว</span>
              </a>
            </li>
            <li
              class="
                flex flex-col
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                focus:text-indigo-700
                focus:outline-none
                flex
                justify-center
                m-2
              "
              @click="dropdownHandler()"
            >
              <a href="#section" @click="goToAdminWeb">
                <span class="ml-2 font-bold">สมัคร</span>
              </a>
            </li>
            <li
              class="
                flex flex-col
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                focus:text-indigo-700
                focus:outline-none
                flex
                justify-center
                m-2
              "
              @click="dropdownHandler()"
            >
              <a @click="goToAdminWeb">
                <span class="ml-2 font-bold">เข้าสู่ระบบ</span>
              </a>
            </li>
          </ul>
          <div class="xl:hidden">
            <svg
              id="open"
              @click="MenuHandler(true)"
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              class="show-m-menu icon icon-tabler icon-tabler-menu"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
            <div
              id="close"
              class="hidden close-m-menu"
              @click="MenuHandler(false)"
            >
              <svg
                aria-label="Close"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
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
  methods: {
    MenuHandler(flag) {
      if (flag) {
        document.getElementById('list').classList.add('top-100')
        document.getElementById('list').classList.remove('hidden')
        document.getElementById('close').classList.remove('hidden')
        document.getElementById('open').classList.add('hidden')
      } else {
        document.getElementById('list').classList.remove('top-100')
        document.getElementById('list').classList.add('hidden')
        document.getElementById('close').classList.add('hidden')
        document.getElementById('open').classList.remove('hidden')
      }
    },
    dropdownHandler() {
      this.MenuHandler(false)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
