<template>
  <div
    class="
      grid
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-2
      items-center
      text-center
      sm:text-left
    "
    id="section-welcome"
  >
    <div class="xl:mt-8 space-y-16 lg:space-y-12 self-start flex flex-col">
      <div
        class="
          text-3xl
          space-y-6
          lg:space-y-4
          lg:text-6xl
          xl:text-8xl
          text-gray
          tracking-1px
          font-extrabold
        "
      >
        <h1 class="mt-2 lg:mt-0">Platform</h1>
        <h1 class="mt-2 lg:mt-0 text-green">ระบบลงทะเบียน</h1>
        <h1 class="mt-2 lg:mt-0">จองคิว (ฟรี)</h1>
      </div>
      <h2
        class="
          text-lg
          lg:text-2xl
          tracking-wide
          leading-9
          lg:w-10/12
          mt-2
          lg:mt-6
          text-gray-light
        "
      >
        เพื่อช่วยลดการรวมตัวของประชาชน<span>ในการต่อคิว</span>
      </h2>

      <div class="flex flex-col lg:flex-row">
        <button
          @click="goToCheckQueue"
          class="
            flex flex-row flex-1
            items-center
            relative
            focus:outline-none
            justify-center
            mt-5
            w-full
            sm:w-auto
            lg:w-48
            text-lg
            lg:text-2xl
            font-medium
            text-white
            p-4
            bg-green
            rounded-2xl
          "
        >
          ตรวจสอบคิว
          <svg
            class="ml-8"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
          >
            <path
              d="M1.33333 8.6665H24.6667"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 15.3332L24.6667 8.6665"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 2L24.6667 8.66667"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          @click="goToDemo"
          class="
            flex flex-row flex-1
            items-center
            relative
            focus:outline-none
            justify-center
            mt-5
            lg:ml-8
            w-full
            sm:w-auto
            lg:w-48
            text-lg
            lg:text-2xl
            font-medium
            text-white
            bg-gray-500
            p-4
            rounded-2xl
          "
        >
          DEMO
          <svg
            class="ml-8"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
          >
            <path
              d="M1.33333 8.6665H24.6667"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 15.3332L24.6667 8.6665"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 2L24.6667 8.66667"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="w-full custom-height mt-8 lg:mt-0 rounded-3xl relative">
      <div class="carousel relative rounded relative overflow-hidden h-full">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="
              carousel-item
              absolute
              opacity-0
              bg-center
              flex
              justify-center
            "
          >
            <img
              src="~/assets/images/customer-page.jpg"
              class="object-contain"
              style="height: 600px"
            />
          </div>
          <label
            for="carousel-2"
            class="
              control-1
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-green-500
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
              flex
              justify-center
              content-center
            "
            ><i class="fas fa-angle-left mt-3"></i
          ></label>
          <label
            for="carousel-2"
            class="
              next
              control-1
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-green-500
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
            ><i class="fas fa-angle-right mt-3"></i
          ></label>

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="
              carousel-item
              absolute
              opacity-0
              bg-center
              flex
              justify-center
            "
          >
            <img
              src="~/assets/images/square.png"
              class="object-contain"
              style="height: 600px"
            />
          </div>
          <label
            for="carousel-1"
            class="
              control-2
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-green-500
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
            ><i class="fas fa-angle-left mt-3"></i
          ></label>
          <label
            for="carousel-1"
            class="
              next
              control-2
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-green-500
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
            ><i class="fas fa-angle-right mt-3"></i
          ></label>

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-green-700
                "
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-green-700
                "
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
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

<style  scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet {
  color: #10a254;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
