<template>
  <div
    :data-focus="open"
    :data-variant="variant"
    :class="[getAttr('t-dropdown-wrapper-class'), 'group relative']"
  >
    <button
      :tabindex="0"
      :data-focus="open"
      :class="[
        getAttr('t-dropdown-toggle-wrapper-class'),
        'gap-2 rounded-lg border border-gray-300 py-2 px-4 l-inline-start-center',
      ]"
      type="button"
      @blur="handleBlur"
      @click.prevent="open = !open"
    >
      <slot name="toggle"></slot>
      <svg
        :class="[
          getAttr('t-arrow-class'),
          'h-4 w-4 stroke-primary-2 transition-all duration-500 group-secondary:stroke-secondary-2 group-c-focus:rotate-180 group-error:stroke-error-dark',
        ]"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1 1 7 7 7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <ul
      v-show="open"
      :class="[
        getAttr('t-dropdown-items-wrapper-class'),
        'absolute w-full bg-white p-2 shadow-button',
      ]"
    >
      <slot name="items"></slot>
    </ul>
  </div>
</template>

<script>
import custom from '@/mixins/custom'
export default {
  mixins: [custom],
  props: {
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
  },
  data() {
    return { open: false }
  },
  methods: {
    handleBlur(event) {
      setTimeout(() => {
        this.open = false
      }, 200)
    },
  },
}
</script>

<style></style>
