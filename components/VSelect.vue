<template>
  <ValidationProvider
    v-slot="{ errors, validate }"
    tag="div"
    :rules="getAttr('rules')"
  >
    <select :value="getAttr('value')" class="hidden" />
    <div :tabindex="tabindex" @blur="handleBlur(validate)">
      <div
        :class="[
          getAttr('t-label-wrapper-class'),
          'group cursor-pointer l-stack-start',
        ]"
        :data-disabled="disabled"
        :data-error="!!errors[0]"
        :data-variant="variant"
        :data-focus="open"
        @click="handleOpen"
      >
        <p
          :class="[
            getAttr('t-label-text-class'),
            'mb-1 pl-3 text-s2 font-bold text-extra-5 group-c-disabled:text-extra-4 sm:text-s3',
          ]"
        >
          {{ getAttr('description') }}
        </p>
        <div>
          <div
            :class="[
              getAttr('t-select-wrapper-class'),
              'mb-2 h-[46px] w-full gap-1 rounded-[10px] border border-[#E0E0E0] p-2 text-extra-3 l-inline-start-center-nowrap placeholder:text-[#B3B3B3] group-c-focus:border-primary-2 group-primary:group-c-focus:border-primary-2 group-secondary:group-c-focus:border-secondary-2 group-error:border-error-dark group-error:text-error-dark group-error:group-c-focus:border-error-dark group-c-disabled:bg-[#E2E2E2] group-c-disabled:text-extra-3 ',
            ]"
          >
            <p :class="[getAttr('t-selected-class'), 'w-full text-extra-5']">
              {{ selectedOption }}
            </p>
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
          </div>
        </div>
        <small :class="[getAttr('t-error-message-class'), 'text-error-dark']">{{
          errors[0]
        }}</small>
      </div>
      <ul
        v-show="open"
        :class="[getAttr('t-options-class'), 'mb-2 p-2 shadow-button']"
      >
        <li
          v-for="key in Object.keys(options)"
          :key="key"
          :class="[
            getAttr('t-option-class'),
            'option cursor-pointer p-2 text-extra-5 hover:bg-extra-1',
          ]"
          :value="key"
          @click="handleSelect(key)"
        >
          {{ options[key] }}
        </li>
      </ul>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import custom from '@/mixins/custom'
export default {
  components: { ValidationProvider },
  mixins: [custom],
  props: {
    tabindex: { type: Number, default: 0 },
    options: { type: Object, required: true },
    id: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
  },
  data() {
    return { open: false }
  },
  computed: {
    selectedOption() {
      return (
        this.options?.[this.getAttr('value')] ?? this.getAttr('placeholder')
      )
    },
  },
  methods: {
    handleSelect(option) {
      this.open = false
      this.$emit('input', option)
    },
    handleBlur(validate) {
      validate()
      this.open = false
    },
    handleOpen() {
      this.open = !this.open
    },
  },
}
</script>
