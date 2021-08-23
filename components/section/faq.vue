<template>
  <div class="bg-gray-bg">
    <div class="mx-auto container px-4 xl:px-0 py-16 mt-16">
      <h1
        class="
          text-center text-gray text-2xl
          lg:text-5xl
          font-bold
          tracking-wider
          leading-10
        "
      >
        คำถามที่พบบ่อย
      </h1>
      <h2
        class="
          text-center text-gray-light text-base
          lg:text-lg
          tracking-wide
          mt-5
        "
      >
        เกี่ยวกับ platform
      </h2>
      <div class="lg:flex flex-wrap my-12 text-lg sm:mx-12 sm:my-20">
        <div class="lg:w-1/2 lg:pr-6">
          <div
            v-for="(faq, index) in faqListLeft"
            :key="index"
            class="cursor-pointer faq-component"
          >
            <div
              class="
                flex
                py-2
                xl:py-4
                mb-4
                justify-between
                items-center
                border-b border-gray-200
              "
            >
              <h1 data-menu class="text-gray-light tracking-wide w-full">
                {{ faq.question }}
              </h1>
              <div data-menu>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Hide"
                  class="hidden icon icon-tabler icon-tabler-chevron-up"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#718096"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Show"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#718096"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <ul class="faq-answer hidden">
              <li class="sm:pt-4 sm:pb-8 pt-2 pb-4 mb-6">
                <!-- <p class="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p> -->
                <p class="xl:w-10/12 w-full text-green pl-4">
                  {{ faq.answer }}
                </p>
                <a
                  :href="faq.link"
                  v-if="faq.link"
                  target="_blank"
                  class="xl:w-10/12 w-full mt-4 pl-4 underline text-color-blue"
                  >{{ faq.displayAction }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:w-1/2 lg:pl-6">
          <div
            v-for="(faq, index) in faqListRight"
            :key="index"
            class="cursor-pointer faq-component"
          >
            <div
              class="
                flex
                py-2
                xl:py-4
                mb-4
                justify-between
                items-center
                border-b border-gray-200
              "
            >
              <h1 data-menu class="text-gray-light tracking-wide w-full">
                {{ faq.question }}
              </h1>
              <div data-menu>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Hide"
                  class="hidden icon icon-tabler icon-tabler-chevron-up"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#718096"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Show"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#718096"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <ul class="faq-answer hidden">
              <li class="sm:pt-4 sm:pb-8 pt-2 pb-4 mb-6">
                <!-- <p class="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p> -->
                <p class="xl:w-10/12 w-full text-green pl-4">
                  {{ faq.answer }}
                </p>

                <a
                  :href="faq.link"
                  v-if="faq.link"
                  target="_blank"
                  class="xl:w-10/12 w-full mt-4 pl-4 underline text-color-blue"
                  >{{ faq.displayAction }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <!-- <div class="w-full flex justify-center items-center">
          <div class="bg-white lg:w-8/12 shadow-lg py-8 px-8 rounded-2xl">
              <div class="lg:flex justify-between w-full">
                  <div>
                      <h1 class="text-2xl lg:text-5xl text-gray font-bold tracking-wide"><span
                              class="text-green">Insurance</span> made Easy</h1>
                      <h2 class="text-gray-light tracking-wide text-base lg:text-lg mt-6">At Inertia, we are
                          commited to provide top-notch services to our customers</h2>
                  </div>
                  <div class="mt-4 lg:mt-0 flex-shrink-0">
                      <button
                          class="py-2 lg:py-4 focus:outline-none px-4 lg:px-8 lg:text-2xl text-white bg-green tracking-wider rounded-3xl font-bold">Get
                          a quote</button>
                  </div>
              </div>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqListLeft: [
        {
          question: 'ต้องการให้จองล่วงหน้าได้มากกว่า 1 วันจะทำอย่างไร',
          answer:
            'เพื่อลดอัตราผู้ที่จองคิวไม่มาใช้บริการน้อยที่สุด และจึงจำกัดไว้ที่ 1วันล่วงหน้า หากต้องการให้ระบบจองล่วงหน้าได้มากกว่า 1 วัน\nกรุณาติดต่อทีมงาน',
        },
        {
          question:
            'หากผู้มาจองคิวมีค่าใช้จ่ายต้องชำระ ทางหน่วยงานจะรับเงินอย่างไร ?',
          answer:
            'ทางระบบจะทำได้เฉพาะจองคิวเพื่อไปรับบริการที่หน้างาน หลังจากนั้นผู้ใช้บริการจะชำระโดยตรงที่หน่วยงานเลย',
        },
        {
          question: 'ระบบจะฟรีแค่ช่วงโควิด หรือไม่ ?',
          answer: `ระบบคิวพร้อม จะเปิดให้บริการช่วยเหลือเฉพาะช่วงโควิดนี้ และจะใช้งานฟรีตลอดระยะเวลาให้บริการ\n ซึ่งเรามีจุดประสงค์เพื่อช่วยลดปัญหาการรวมตัวของผู้คนจำนวนมาก ที่ต้องออกไปต่อแถวรับบัตรคิว,   [สามารถอ่านจุดประสงค์และที่มาโครงการนี้ได้ที่ลิ้ง] `,
          link: 'https://queue-prompt.notion.site/Project-2ea6238895b24f2eb90c96cd1c579f3c',
          displayAction: 'อ่านต่อ',
        },
        {
          question: 'สามารถจองคิวซ้ำได้หรือไม่ ?',
          answer: 'เลขบัตรประชาชน 1 เลขต่อการจองในหนึ่งวัน',
        },
      ],

      faqListRight: [
        {
          question: 'สามารถจองให้บุคคลอื่นได้หรือไม่ ?',
          answer:
            'ในกรณีจองให้คนอื่น ให้ใส่ข้อมูลและเลขบัตรประชาชนของบุคคลนั้นได้เลย',
        },
        {
          question: 'สามารถตรวจการจองคิวได้ที่ไหน ?',
          answer:
            'เข้าที่ https:คิวพร้อม.com เลือกตรวจสอบคิว  แล้วกรอกเลขบัตรประชาชน',
          link: 'https:คิวพร้อม.com/my-reserve/?q=search',
          displayAction: 'open link',
        },
        {
          question: 'ใครเป็นคนพัฒนาระบบนี้ ?',
          answer:
            'ระบบนี้จัดทำโดย Developer จิตอาสาในนามส่วนบุคคล (ไม่ได้ทำในนามบริษัทหรือนิติบุคคล) ซึ่งต้องการช่วยเหลือประชาชนโดยใช้ Technology ที่พวกเราถนัดมาใช้ให้เกิดประโยชน์',
        },
      ],
    }
  },
  mounted() {
    let elements = document.querySelectorAll('[data-menu]')

    for (let i = 0; i < elements.length; i++) {
      let main = elements[i]

      main.addEventListener('click', function () {
        let element = main.parentElement.parentElement
        let andicators = element.querySelectorAll('svg')
        let child = element.querySelector('ul')

        element.classList.add('open')

        let chevronUps = document.querySelectorAll(
          '.faq-component:not(.open) svg.hidden'
        )
        let chevronDowns = document.querySelectorAll(
          '.faq-component:not(.open) svg.icon-tabler-chevron-down'
        )
        let prevElement = document.querySelector('.faq-answer:not(.hidden)')

        element.classList.toggle('open')
        child.classList.toggle('hidden')

        if (prevElement) {
          prevElement.classList.add('hidden')

          chevronUps.forEach((up) => {
            up.style.display = 'none'
          })

          chevronDowns.forEach((down) => {
            down.style.display = 'block'
          })
        }

        if (child.classList[1] !== 'hidden') {
          andicators[0].style.display = 'block'
          andicators[1].style.display = 'none'
        } else {
          andicators[0].style.display = 'none'
          andicators[1].style.display = 'block'
        }
      })
    }
  },
}
</script>

<style scoped>
</style>
