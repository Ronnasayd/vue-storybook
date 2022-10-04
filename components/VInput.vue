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
      <div
        :class="[
          getAttr('t-input-wrapper-class'),
          'mb-2 h-[46px] w-full gap-1 rounded-[10px] border border-[#E0E0E0] p-2 text-extra-3 l-inline-start-center-nowrap placeholder:text-[#B3B3B3] group-c-focus:border-primary-2 group-primary:group-c-focus:border-primary-2 group-secondary:group-c-focus:border-secondary-2 group-error:border-error-dark group-error:text-error-dark group-error:group-c-focus:border-error-dark group-c-disabled:bg-[#E2E2E2] group-c-disabled:text-extra-3 ',
        ]"
      >
        <slot name="left"></slot>
        <input
          v-bind="{
            ...$props,
          }"
          :value="getAttr('value')"
          :name="id"
          :class="[
            getAttr('t-input-class'),
            'h-full w-full border-none p-0 text-extra-5 focus:border-none focus:outline-none focus:ring-0 disabled:bg-[#E2E2E2]',
          ]"
          @change="onChange"
          @input="onInput"
          @focus="handleFocus"
          @focusout="handleFocusOut"
        />
        <slot name="right"></slot>
      </div>
      <small :class="[getAttr('t-error-class'), 'text-error-dark']">{{
        errors[0]
      }}</small>
    </label>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
import custom from '@/mixins/custom'
export default {
  name: 'VInput',
  components: {
    ValidationProvider,
  },
  mixins: [custom],

  props: {
    type: {
      type: String,
      validator: (value) =>
        ['text', 'number', 'password', 'email', 'tel', 'hidden'].includes(
          value
        ),
      default: 'text',
    },
    id: { type: String, required: true },
    placeholder: { type: String, default: '' },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
    disabled: { type: Boolean, default: false },
    min: { type: String, default: '' },
    max: { type: String, default: '' },
    maxLength: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
  },
  data() {
    return { focusState: false }
  },

  methods: {
    onChange(event) {
      this.$emit('change', event.target.value)
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },

    handleFocus() {
      this.focusState = true
    },
    handleFocusOut() {
      this.focusState = false
    },
  },
}
</script>
