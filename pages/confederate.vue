<template>
  <div class="bg-gray-bg h-full">
    <div class="pt-8 pl-5 sm:pt-12 sm:pl-10">
      <a class="text-xl cursor-pointer  hover:underline hover:text-green lg:text-2xl" @click="goToHome">
        <i class="fas fa-arrow-left"></i> 
        <span>กลับหน้าแรก</span>
      </a>
    </div>

    <div class="px-4 xl:px-0 pb-16">
      <div class="mx-auto container">
        <div class="mb-12">
          <h1 class="
            text-center
            my-8
            lg:my-16
            text-2xl
            lg:text-5xl
            text-gray
            font-bold
            tracking-1px
          ">
            Developers
          </h1>

          <div v-for="(t, index) in team" :key="index">
            <h2 class="
              text-center
              lg:text-lg
              text-color-gray-light
              mt-10
              tracking-wider
              "
              >
              {{ t.name }}
            </h2>
            <p class="text-center">
              <span >{{ t.role }}</span>
            </p>

          </div>
        </div>

        <div class="mb-12">
          <h1 class="
            text-center
            my-8
            lg:my-16
            text-2xl
            lg:text-5xl
            text-gray
            font-bold
            tracking-1px
          ">
            ที่ปรึกษา
          </h1>

          <h2 class="
              text-center
              lg:text-lg
              text-color-gray-light
              mt-10
              tracking-wider
            ">
            สันติ วงษ์สวัสดิ์
          </h2>
        </div>

        <div class="mb-12">
          <h1 class="
            text-center
            my-8
            lg:my-16
            text-2xl
            lg:text-5xl
            text-gray
            font-bold
            tracking-1px
          ">
            ประสานงาน
          </h1>

          <h2 class="
              text-center
              lg:text-lg
              text-color-gray-light
              mt-10
              tracking-wider
            ">
            วรินทร์ เพียจันทร์ 
          </h2>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          {
            name: 'วริทธิ์ ตันติวีรสุต',
            imgUrl: 'https://avatars.githubusercontent.com/u/5900388?v=4',
            role: 'Backend : Serverless',
          },
          {
            name: 'ภาณุวัฒน์ เชี่ยวชาญศิลป์',
            imgUrl: 'https://avatars.githubusercontent.com/u/55682665?v=4',
            role: 'Frontend : Vuejs',
          },
          {
            name: 'ธัญกร พันธมิตร',
            imgUrl: 'https://avatars.githubusercontent.com/u/53806329?v=4',
            role: 'Frontend  : Vuejs',
          },
          {
            name: 'อุทุมพร หน่ายคอน',
            imgUrl: 'https://avatars.githubusercontent.com/u/55710736?v=4',
            role: 'Frontend : LIFF',
          },
        ],
      }
    },
    methods: {
      goToHome() {
        this.$router.push('/')
      }
    }
    
  }
</script>

<style scoped>

</style>