<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :for="id"
      :class="[getAttr('t-label-class'), 'group l-stack-start']"
      :data-disabled="disabled"
      :data-error="!!errors[0]"
      :data-variant="variant"
      :data-focus="focusState"
    >
      <p
        :class="[
          getAttr('t-description-class'),
          'mb-1 pl-3 text-s2 font-bold text-extra-5 group-c-disabled:text-extra-4 sm:text-s3',
        ]"
      >
        {{ getAttr('description') }}
      </p>
      <div>
        <select
          v-bind="{
            ...$props,
          }"
          :value="getAttr('value')"
          :name="id"
          :class="['sr-only']"
          @focus="handleFocus"
          @focusout="handleFocusOut"
        ></select>
        <div
          :class="[
            getAttr('t-select-wrapper-class'),
            'mb-2 h-[46px] w-full gap-1 rounded-[10px] border border-[#E0E0E0] p-2 text-extra-3 l-inline-start-center-nowrap placeholder:text-[#B3B3B3] group-c-focus:border-primary-2 group-primary:group-c-focus:border-primary-2 group-secondary:group-c-focus:border-secondary-2 group-error:border-error-dark group-error:text-error-dark group-error:group-c-focus:border-error-dark group-c-disabled:bg-[#E2E2E2] group-c-disabled:text-extra-3 ',
          ]"
        >
          <p :class="[getAttr('t-selected-class'), 'w-[93%] text-extra-5']">
            {{ selectedOption }}
          </p>
          <svg
            :class="[
              getAttr('t-arrow-class'),
              'h-4 w-4 stroke-primary-2 transition-all duration-500 group-c-focus:rotate-180 group-error:stroke-error-dark',
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
      <small :class="[getAttr('t-error-class'), 'text-error-dark']">{{
        errors[0]
      }}</small>
    </label>
    <ul
      v-show="focusState"
      :class="[getAttr('t-options-class'), 'mb-2 p-2 shadow-button']"
    >
      <li
        v-for="option in options"
        :key="option.key"
        :class="[
          getAttr('t-option-class'),
          'option cursor-pointer p-2 text-extra-5 hover:bg-extra-1',
        ]"
        :value="option.key"
        @click="handleSelect(option.key)"
      >
        {{ option.value }}
      </li>
    </ul>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import custom from '@/mixins/custom'
export default {
  components: {
    ValidationProvider,
  },
  mixins: [custom],
  props: {
    options: { type: Array, required: true },
    id: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
  },
  data() {
    return { focusState: false }
  },
  computed: {
    selectedOption() {
      const option = this.options.find(
        (option) => option.key === this.getAttr('value')
      )
      return option?.value ?? this.getAttr('placeholder')
    },
  },
  methods: {
    handleFocus() {
      this.focusState = true
    },
    handleFocusOut(event) {
      if (!event?.explicitOriginalTarget?.classList?.contains('option'))
        this.focusState = false
    },
    handleSelect(option) {
      this.$emit('input', option)
      this.$emit('change', option)
      this.focusState = false
    },
  },
}
</script>
