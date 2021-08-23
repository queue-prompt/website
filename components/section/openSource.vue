<template>
  <div
    class="mx-auto container px-4 py-16 xl:px-0 lg:py-32"
    id="section-openSource"
  >
    <h1
      class="text-center text-2xl lg:text-5xl text-gray font-bold tracking-1px"
    >
      Open source.
    </h1>
    <h2
      class="
        text-left
        lg:text-center lg:text-lg
        text-color-gray-light
        mt-10
        tracking-wider
      "
    >
      ทางทีมงาน คิวพร้อม.com ได้พัฒนาระบบนี้ระยะเวลาประมาณ 2-3 สัปดาห์
      และตั้งใจจะเปิด Open Source Project
    </h2>
    <h2
      class="
        text-left
        lg:text-center lg:text-lg
        text-color-gray-light
        mt-5
        tracking-wider
      "
    >
      มีจุดประสงค์ที่จะนำความรู้จาก การสร้างระบบ, ปัญหาที่พบเจอ,
      การออกแบบระบบหลังบ้าน มาแชร์ให้ได้ทราบ
    </h2>
    <h2
      class="
        text-left
        lg:text-center lg:text-lg
        text-color-gray-light
        mt-5
        tracking-wider
      "
    >
      คาดว่าจะสามารถ upload source code ได้ไม่เกินสิ้นเดือนสิงหาคม 2564 นี้
    </h2>
    <h2
      class="
        text-left
        lg:text-center lg:text-lg
        text-color-gray-light
        mt-5
        tracking-wider
      "
    >
      ( ต้องขอ refactor code, ทำความสะอาด และเรียบเรียงให้ง่ายต่อการอ่าน code
      ก่อนสักระยะนึง )
    </h2>
    <h2
      class="
        text-left
        lg:text-center lg:text-lg
        text-color-gray-light
        mt-5
        tracking-wider
      "
    >
      สามารถติดตามที่
      <a
        class="
          bg-gray-300
          cursor-pointer
          m-1
          p-0
          px-2
          text-center
          rounded-lg
          underline
        "
        href="https://github.com/orgs/queue-prompt/"
        target="_blank"
        >https://github.com/orgs/queue-prompt</a
      >
      ในสิ้นเดือนนี้
    </h2>

    <h1
      class="
        text-center
        my-8
        lg:my-16
        text-2xl
        lg:text-5xl
        text-gray
        font-bold
        tracking-1px
      "
    >
      Developers
    </h1>
    <div
      class="
        flex flex-col
        divide-y divide-gray-200
        lg:divide-white
        lg:my-8
        lg:flex-row
        lg:justify-around
        w-full
        mb-16
      "
    >
      <div
        class="flex items-center content-center lg:flex-col h-24"
        v-for="t in team"
        :key="t.name"
      >
        <div class="w-2/6 lg:w-full flex items-center justify-center">
          <img
            :src="t.imgUrl"
            alt=""
            class="mx-auto items-center w-16 h-16 lg:w-32 lg:h-32 rounded-full"
          />
        </div>
        <div
          class="
            space-y-2
            w-full
            flex flex-col flex-1
            lg:items-center
            lg:text-center
          "
        >
          <h1 class="mt-2 flex-1 text-gray text-bold">{{ t.name }}</h1>
          <h1 class="flex-1 text-gray-400">{{ t.role }}</h1>
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
}
</script>

<style>
</style>
