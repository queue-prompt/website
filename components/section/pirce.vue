<template>
  <div class="mx-auto container px-4 py-16 xl:px-0" id="section-price">
    <div class="lg:flex flex-col items-center lg:mt-12">
      <div class="mt-6 lg:mt-0 text-center">
        <div class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="3"
            viewBox="0 0 188 3"
            fill="none"
          >
            <line
              x1="9.1809e-05"
              y1="1.5"
              x2="187.922"
              y2="1.50003"
              stroke="#10A254"
              stroke-width="3"
            />
          </svg>
          <svg
            class="ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
              fill="white"
            />
            <path
              d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
              stroke="#10A254"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049ZM6.24986 15.2504L6.24986 18.1003L6.24986 15.2504Z"
              fill="white"
            />
            <path
              d="M6.24986 15.2504L6.24986 18.1003M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049Z"
              stroke="#10A254"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1
          class="
            pr-2
            mt-8
            text-gray text-2xl
            lg:text-5xl
            font-bold
            tracking-1px
            leading-9
          "
        >
          ไม่เสียค่าใช้จ่ายใดๆ
        </h1>
        <p class="w-full leading-8 text-gray-light mt-5 mb-12">
          ระบบนี้จัดทำขึ้นเพื่อช่วยเหลือประชาชน ในสถานการณ์โควิดระบาดนี้
          และลดการรวมตัวที่ก่อให้เกิดการแพร่ระบาดของโรคได้
        </p>
      </div>
      <div class="lg:flex items-center">
        <div
          class="
            px-11
            py-12
            bg-green
            rounded-3xl
            mt-6
            lg:mt-0
            lg:ml-8
            flex-shrink-0
          "
        >
          <h1
            class="
              text-3xl
              lg:text-4xl
              font-medium
              text-white
              pb-12
              tracking-wider
            "
          >
            ค่าใช้จ่าย
          </h1>
          <h2
            class="
              text-4xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              text-white
              tracking-wider
            "
          >
            0 บาท
            <span class="text-2xl lg:text-4xl"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
          </h2>
          <div class="mt-12">
            <div class="flex items-center relative">
              <label class="container2">
                ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้น
                <input type="checkbox" checked="checked" disabled />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="flex items-center relative mt-8">
              <label class="container2">
                ไม่มีเงื่อนไขแอปแฝง
                <input type="checkbox" checked="checked" disabled />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="flex items-center relative mt-8">
              <label class="container2">
                มีทีมงาน support online
                <input type="checkbox" checked="checked" disabled />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="mt-16 flex justify-center">
            <button
              class="
                py-3
                lg:py-6
                pl-6
                lg:pl-12
                pr-8
                bg-white
                text-green
                rounded-3xl
                focus:outline-none
                text-lg
                xl:text-2xl
                tracking-wider
                w-auto
                lg:w-full
                flex
                items-center
                justify-between
              "
              @click="goToAdminWeb"
            >
              เริ่มต้นใช้งาน
              <svg
                class="ml-6 lg:ml-0 w-6 lg:w-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="32"
                viewBox="0 0 37 32"
                fill="none"
              >
                <path
                  d="M35 16L2 16"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 16L20.8571 1.99999"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 16L20.8571 30"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goToAdminWeb: { type: Function, required: true },
  },
}
</script>

<style scoped>
</style>
