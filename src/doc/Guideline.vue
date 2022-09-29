<template>
  <main class="flex">
    <nav class="fixed flex flex-col h-full p-4 space-y-4 font-semibold text-white bg-slate-600">
      <a href="#color">Color</a>
      <a href="#fontfamily">Fontfamily</a>
      <a href="#fontSize">FontSize</a>
      <a href="#fontWeight">FontWeight</a>
      <a href="#icon">Icon</a>
      <a href="#shadow">Shadow</a>
      <a href="#rounded">Rounded</a>
      <a href="#button">Button</a>
    </nav>
    <div class="p-16 ml-20">
      <section
        id="color"
        class="mb-24 "
      >
        <h1 class="mb-8 text-4xl ">
          Color
        </h1>
        <ul class="grid grid-cols-7 gap-8">
          <li
            v-for="(color,i) of colorData"
            :key="i"
          >
            <h3 class="mb-8 text-xl font-semibold">
              {{ color.title }}
            </h3>
            <ul class="overflow-hidden rounded-lg">
              <li
                v-for="(data,j) of color.list"
                :key="j"
                class="flex items-center justify-between h-12 px-4 text-white "
                :class="data.class"
              >
                <p>{{ data.number }}</p>
                <p>{{ data.color }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section
        id="fontfamily"
        class="mb-24 "
      >
        <h1 class="mb-8 text-4xl font-semibold">
          Fontfamily
        </h1>
        <p class="text-2xl ">
          google font: Noto Sans Traditional Chinese
        </p>
      </section>
      <section
        id="fontSize"
        class="mb-24 "
      >
        <h1 class="mb-8 text-4xl font-semibold">
          FontSize
        </h1>
        <ul class="flex items-center space-x-5">
          <li
            v-for="(font,i) of fontSizeData"
            :key="i"
          >
            <div
              class="font-semibold "
              :class="font.class"
            >
              {{ font.class }}
            </div>
            <div class="text-base text-neutral-400">
              font-size:{{ font.size }}
            </div>
          </li>
        </ul>
      </section>
      <section
        id="fontWeight"
        class="mb-24 "
      >
        <h1 class="mb-8 text-4xl font-semibold">
          FontWeight
        </h1>
        <ul class="flex items-center space-x-5">
          <li
            v-for="(font,i) of fontWeightData"
            :key="i"
          >
            <div
              class="text-lg text-2xl"
              :class="font.class"
            >
              {{ font.class }}
            </div>
            <div class="text-base text-neutral-400">
              font-weight:{{ font.weight }}
            </div>
          </li>
        </ul>
      </section>
      <section
        id="icon"
        class="mb-24 "
      >
        <div class="flex items-center mb-8">
          <h1 class="mr-4 text-4xl font-semibold">
            Icon
          </h1>
          <span class=" text-neutral-300">請將svg圖檔 fill和stroke 改成currentColor</span>
        </div>

        <ul class="flex flex-wrap">
          <li
            v-for="svg of svgNameArr"
            :key="svg"
            class="mb-4 mr-4"
          >
            <Icon :name="svg" />
          </li>
        </ul>
      </section>
      <section
        id="shadow"
        class="mb-24 "
      >
        <div class="flex items-center mb-8">
          <h1 class="mr-4 text-4xl font-semibold">
            Shadow
          </h1>
        </div>

        <ul class="">
          <li
            v-for="shadow of shadowArr"
            :key="shadow.class"
            class="mb-6 mr-6 "
          >
            <h1 class="mb-4 text-xl">
              {{ shadow.class }}
            </h1>
            <div
              class="p-6 text-neutral-500"
              :class="shadow.class"
            >
              {{ shadow.label }}
            </div>
          </li>
        </ul>
      </section>
      <section
        id="rounded"
        class="mb-24 "
      >
        <div class="flex items-center mb-8 ">
          <h1 class="mr-4 text-4xl font-semibold">
            Rounded
          </h1>
        </div>

        <ul class="flex space-x-6">
          <li
            v-for="rounder of rounderArr"
            :key="rounder.class"
            class=""
          >
            <h1 class="mb-4 text-xl">
              {{ rounder.class }}
            </h1>
            <div
              class="w-24 p-2 text-center border-2 border-solid text-neutral-500"
              :class="rounder.class"
            >
              {{ rounder.label }}
            </div>
          </li>
        </ul>
      </section>
      <section id="components">
        <h1 class="mb-8 text-4xl font-semibold">
          Components
        </h1>
        <h2
          id="button"
          class="mb-8 text-3xl font-semibold"
        >
          Button
        </h2>
        <h3 class="mb-8 text-xl font-semibold text-neutral-400">
          Btn_w/_icon Hight:40px
        </h3>
        <ul class="flex mb-8 space-x-5">
          <li
            v-for="(btn,i) of btnArrIcon"
            :key="i"
          >
            <BaseBtn
              :before-icon="btn.beforeIcon"
              :after-icon="btn.afterIcon"
              :label="btn.type"
              :type="btn.type"
            />
          </li>
        </ul>
        <h3 class="mb-8 text-xl font-semibold text-neutral-400">
          Btn_w/ Hight:40px
        </h3>
        <ul class="flex space-x-5">
          <li
            v-for="(btn,i) of btnArr"
            :key="i"
          >
            <BaseBtn
              :before-icon="btn.beforeIcon"
              :after-icon="btn.afterIcon"
              :label="btn.label"
              :type="btn.type"
              :size="btn.size"
            />
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
const colorData = [
  {
    title: 'Indigo',
    list: [
      {
        class: 'bg-indigo-50',
        number: 50,
        color: '#EEF2FF'
      },
      {
        class: 'bg-indigo-100',
        number: 100,
        color: '#E0E7FF'
      },
      {
        class: 'bg-indigo-200',
        number: 200,
        color: '#C7D2FE'
      },
      {
        class: 'bg-indigo-300',
        number: 300,
        color: '#A5B4FC'
      },
      {
        class: 'bg-indigo-400',
        number: 400,
        color: '#818CF8'
      },
      {
        class: 'bg-indigo-500',
        number: 500,
        color: '#6366F1'
      },
      {
        class: 'bg-indigo-600',
        number: 600,
        color: '#4F46E5'
      },
      {
        class: 'bg-indigo-700',
        number: 700,
        color: '#4338CA'
      },
      {
        class: 'bg-indigo-800',
        number: 800,
        color: '#3730A3'
      },
      {
        class: 'bg-indigo-900',
        number: 900,
        color: '#312E81'
      }
    ]
  },
  {
    title: 'Sky',
    list: [
      {
        class: 'bg-sky-50',
        number: 50,
        color: '#F0F9FF'
      },
      {
        class: 'bg-sky-100',
        number: 100,
        color: '#E0F2FE'
      },
      {
        class: 'bg-sky-200',
        number: 200,
        color: '#BAE6FD'
      },
      {
        class: 'bg-sky-300',
        number: 300,
        color: '#7DD3FC'
      },
      {
        class: 'bg-sky-400',
        number: 400,
        color: '#38BDF8'
      },
      {
        class: 'bg-sky-500',
        number: 500,
        color: '#0EA5E9'
      },
      {
        class: 'bg-sky-600',
        number: 600,
        color: '#0284C7'
      },
      {
        class: 'bg-sky-700',
        number: 700,
        color: '#0369A1'
      },
      {
        class: 'bg-sky-800',
        number: 800,
        color: '#075985'
      },
      {
        class: 'bg-sky-900',
        number: 900,
        color: '#0C4A6E'
      }
    ]
  },
  {
    title: 'Teal',
    list: [
      {
        class: 'bg-teal-50',
        number: 50,
        color: '#F0FDFA'
      },
      {
        class: 'bg-teal-100',
        number: 100,
        color: '#CCFBF1'
      },
      {
        class: 'bg-teal-200',
        number: 200,
        color: '#99F6E4'
      },
      {
        class: 'bg-teal-300',
        number: 300,
        color: '#5EEAD4'
      },
      {
        class: 'bg-teal-400',
        number: 400,
        color: '#2DD4BF'
      },
      {
        class: 'bg-teal-500',
        number: 500,
        color: '#14B8A6'
      },
      {
        class: 'bg-teal-600',
        number: 600,
        color: '#0D9488'
      },
      {
        class: 'bg-teal-700',
        number: 700,
        color: '#0F766E'
      },
      {
        class: 'bg-teal-800',
        number: 800,
        color: '#115E59'
      },
      {
        class: 'bg-teal-900',
        number: 900,
        color: '#134E4A'
      }
    ]
  },
  {
    title: 'Rose',
    list: [
      {
        class: 'bg-rose-50',
        number: 50,
        color: '#FFF1F2'
      },
      {
        class: 'bg-rose-100',
        number: 100,
        color: '#FFE4E6'
      },
      {
        class: 'bg-rose-200',
        number: 200,
        color: '#FECDD3'
      },
      {
        class: 'bg-rose-300',
        number: 300,
        color: '#FDA4AF'
      },
      {
        class: 'bg-rose-400',
        number: 400,
        color: '#FB7185'
      },
      {
        class: 'bg-rose-500',
        number: 500,
        color: '#F43F5E'
      },
      {
        class: 'bg-rose-600',
        number: 600,
        color: '#E11D48'
      },
      {
        class: 'bg-rose-700',
        number: 700,
        color: '#BE123C'
      },
      {
        class: 'bg-rose-800',
        number: 800,
        color: '#9F1239'
      },
      {
        class: 'bg-rose-900',
        number: 900,
        color: '#881337'
      }
    ]
  },
  {
    title: 'Purple',
    list: [
      {
        class: 'bg-purple-50',
        number: 50,
        color: '#FAF5FF'
      },
      {
        class: 'bg-purple-100',
        number: 100,
        color: '#F3E8FF'
      },
      {
        class: 'bg-purple-200',
        number: 200,
        color: '#E9D5FF'
      },
      {
        class: 'bg-purple-300',
        number: 300,
        color: '#D8B4FE'
      },
      {
        class: 'bg-purple-400',
        number: 400,
        color: '#C084FC'
      },
      {
        class: 'bg-purple-500',
        number: 500,
        color: '#A855F7'
      },
      {
        class: 'bg-purple-600',
        number: 600,
        color: '#9333EA'
      },
      {
        class: 'bg-purple-700',
        number: 700,
        color: '#7E22CE'
      },
      {
        class: 'bg-purple-800',
        number: 800,
        color: '#6B21A8'
      },
      {
        class: 'bg-purple-900',
        number: 900,
        color: '#4C1D95'
      }
    ]
  },
  {
    title: 'Amber',
    list: [
      {
        class: 'bg-amber-50',
        number: 50,
        color: '#FFFBEB'
      },
      {
        class: 'bg-amber-100',
        number: 100,
        color: '#FEF3C7'
      },
      {
        class: 'bg-amber-200',
        number: 200,
        color: '#FDE68A'
      },
      {
        class: 'bg-amber-300',
        number: 300,
        color: '#FCD34D'
      },
      {
        class: 'bg-amber-400',
        number: 400,
        color: '#FBBF24'
      },
      {
        class: 'bg-amber-500',
        number: 500,
        color: '#F59E0B'
      },
      {
        class: 'bg-amber-600',
        number: 600,
        color: '#D97706'
      },
      {
        class: 'bg-amber-700',
        number: 700,
        color: '#B45309'
      },
      {
        class: 'bg-amber-800',
        number: 800,
        color: '#92400E'
      },
      {
        class: 'bg-amber-900',
        number: 900,
        color: '#78350F'
      }
    ]
  },
  {
    title: 'Neutral',
    list: [
      {
        class: 'bg-neutral-50',
        number: 50,
        color: '#fafafa'
      },
      {
        class: 'bg-neutral-100',
        number: 100,
        color: '#f5f5f5'
      },
      {
        class: 'bg-neutral-200',
        number: 200,
        color: '#e5e5e5'
      },
      {
        class: 'bg-neutral-300',
        number: 300,
        color: '#d4d4d4'
      },
      {
        class: 'bg-neutral-400',
        number: 400,
        color: '#a3a3a3'
      },
      {
        class: 'bg-neutral-500',
        number: 500,
        color: '#737373'
      },
      {
        class: 'bg-neutral-600',
        number: 600,
        color: '#525252'
      },
      {
        class: 'bg-neutral-700',
        number: 700,
        color: '#404040'
      },
      {
        class: 'bg-neutral-800',
        number: 800,
        color: '#262626'
      },
      {
        class: 'bg-neutral-900',
        number: 900,
        color: '#171717'
      }
    ]
  }

]

const fontSizeData = [
  {
    class: 'text-xs',
    size: '12px'
  },
  {
    class: 'text-sm',
    size: '13px'
  },
  {
    class: 'text-base',
    size: '14px'
  },
  {
    class: 'text-lg',
    size: '16px'
  },
  {
    class: 'text-xl',
    size: '18px'
  },
  {
    class: 'text-2xl',
    size: '20px'
  },
  {
    class: 'text-3xl',
    size: '22px'
  },
  {
    class: 'text-4xl',
    size: '32px'
  }
]
const fontWeightData = [
  {
    class: 'font-thin',
    weight: '100'
  },
  // {
  //   class: 'font-extralight',
  //   weight: '200'
  // },
  {
    class: 'font-light',
    weight: '300'
  },
  {
    class: 'font-normal',
    weight: '400'
  },
  {
    class: 'font-medium',
    weight: '500'
  },
  // {
  //   class: 'font-semibold',
  //   weight: '600'
  // },
  {
    class: 'font-bold',
    weight: '700'
  },
  {
    class: 'font-extrabold',
    weight: '800'
  },
  {
    class: 'font-black',
    weight: '900'
  }
]
const btnArrIcon = [
  {
    type: 'primary',
    label: 'primary',
    beforeIcon: 'cog',
    afterIcon: 'arrow-narrow-right'
  },
  {
    type: 'secondary',
    label: 'secondary',
    beforeIcon: 'cog',
    afterIcon: 'arrow-narrow-right'
  },
  {
    type: 'error',
    label: 'error',
    beforeIcon: 'cog',
    afterIcon: 'arrow-narrow-right'
  },
  {
    type: 'disable',
    label: 'disable',
    beforeIcon: 'cog',
    afterIcon: 'arrow-narrow-right'
  }
]

const shadowArr = [
  {
    class: 'shadow-sm',
    label: '0px 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  {
    class: 'shadow',
    label: '0px 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
  },
  {
    class: 'shadow-md',
    label: '0px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  },
  {
    class: 'shadow-lg',
    label: '0px 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  }
]

const rounderArr = [
  {
    class: 'rounded-sm',
    label: '2px'
  },
  {
    class: 'rounded',
    label: '4px'
  },
  {
    class: 'rounded-md',
    label: '6px'
  },
  {
    class: 'rounded-lg',
    label: '8px'
  },
  {
    class: 'rounded-full',
    label: '9999px'
  }
]

const btnArr = [
  {
    type: 'primary',
    label: 'small',
    size: 'small'
  },
  {
    type: 'secondary',
    label: 'default',
    size: 'default'
  },
  {
    type: 'error',
    label: 'large',
    size: 'large'
  }
]

const svgIcon = Array.from(document.querySelectorAll('.svgIcon symbol'))
const svgNameArr = svgIcon.map(item => item.getAttribute('id').replace(/^icon-/g, ''))
</script>
