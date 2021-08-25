<template>
  <div class="bg-gray-bg px-4 xl:px-0 py-16 mt-16">
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
          ที่มา
        </h1>
        <h2
          class="
            text-base
            lg:text-lg
            text-center text-gray-light
            mt-5
            tracking-wider
          "
        >
          <p class="text-left mb-8">
            Platform สร้างขึ้นมานี้เพื่อช่วยลดปัญหาการรวมตัวของผู้คนจำนวนมาก
            ที่ต้องออกไปต่อแถวรับบัตรคิว ในการรับบริการต่างๆของระบบสาธารณสุข
          </p>
          <p class="text-left mb-8">
            ทางเราได้นำเทคโนโลยี CLOUD มาใช้งานในการอำนวยความสะดวก
            ให้แก่หน่วยงานต่างๆ ในการนำระบบจองคิว,ลงทะเบียน
            ไปให้บริการกับประชาชน หรือผู้มาใช้บริการ เพื่อจองคิวทางออนไลน์
          </p>

          <p class="text-left mb-8">
            <span class="font-bold text-red"
              >หน่วยงานต่างๆ สามารถสมัครใช้งาน ระบบคิวพร้อม.com ได้โดย
              **ไม่มีค่าใช้จ่ายใดๆทั้งสิ้น**
            </span>
          </p>

          <a
            class="text-green underline text-lg"
            href="https://queue-prompt.notion.site/queue-prompt/Project-2ea6238895b24f2eb90c96cd1c579f3c"
            >อ่านต่อที่มาทั้งหมด</a
          >
        </h2>
      </div>

      <h1
        class="
          text-center text-2xl
          mt-8
          lg:text-5xl
          font-bold
          text-gray
          tracking-1px
        "
      >
        Features
      </h1>

      <div class="flex flex-wrap justify-center">
        <!-- FREE COST -->
        <div
          class="
            max-w-sm
            m-4
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="far fa-heart text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              ไม่มีค่าใช้จ่าย
            </h1>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              ระบบนี้ใช้งานฟรี ไม่มีค่าใช้จ่ายใดๆแอบแผงทั้งสิ้น และยังมีการ
              support การใช้งานอีกด้วย
            </p>
          </div>
        </div>

        <!-- CLOUD -->
        <div
          class="
            max-w-sm
            m-4
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="fas fa-cloud text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              รองรับผู้ใช้งานจำนวนมาก
            </h1>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              ระบบคิวพร้อมได้ถูกออกแบบมาเพื่อรองรับการเข้าใช้งานพร้อมกันจำนวนมาก
              ทำให้ไม่ต้องกังวลด้านปัญหา WEB ล่มใช้งานไม่ได้
            </p>
          </div>
        </div>

        <!-- QR -->
        <div
          class="
            max-w-sm
            m-4
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="fas fa-qrcode text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              ไม่ต้องโหลด App
            </h1>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              ผู้ใช้บริการสามารถใช้ได้ทันที จองคิวผ่าน Link หรือ สแกน QR-CODE
              ได้เลย
            </p>
          </div>
        </div>

        <!-- TIMESLOT -->
        <div
          class="
            max-w-sm
            m-4
            w-full
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="fas fa-calendar-alt text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              จองคิวแบบช่วงเวลา
            </h1>

            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              ระบบรันคิวจะเป็นในรูปแบบ Batch Type :
            </p>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              เช่น 10:00-11:00น. รับ 100คิว
            </p>

            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              เช่น 11:00-12:00น. รับ 100คิว
            </p>
          </div>
        </div>

        <!-- OPEN SOURCE -->
        <div
          class="
            max-w-sm
            m-4
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="fab fa-github-square text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              OPEN SOURCE
            </h1>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              Platform นี้เป็นระบบ Open Source Project
              ซึ่งมีการเปิดเผยซอร์สโค้ดระบบแก่สาธารณะ
              ทางหน่วยงานต่างๆสามารถนำไปแก้ไขหรือเขียนเพิ่มเติม
              เพื่อใช้งานในองค์กรตัวเองได้
            </p>
          </div>
        </div>

        <!-- REDUCE COVID -->
        <div
          class="
            max-w-sm
            m-4
            bg-white
            rounded-3xl
            shadow-md
            py-6
            px-6
            text-center
            sm:px-16
            sm:text-left
          "
        >
          <div class="flex justify-center sm:justify-start">
            <i class="fas fa-user-nurse text-green text-8xl"></i>
          </div>
          <div class="pt-5">
            <h1
              class="text-xl lg:text-2xl font-semibold tracking-wider text-gray"
            >
              ลดการแพร่เชื้อโควิด
            </h1>
            <p
              class="
                mt-4
                tracking-wider
                leading-8
                text-base
                w-11/12
                text-gray-light
              "
            >
              ลดความเสี่ยงในการติด/แพร่เชื้อโควิด
              จากการที่ไปแออัดต่อแถวหลายพันคน และ
              ลดการเสียเวลาในการต่อคิวซึ่งไม่รู้ว่าจะได้คิวมั้ย
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
