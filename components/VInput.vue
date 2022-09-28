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
          'mb-1 text-s2 font-bold text-extra-5 group-c-disabled:text-extra-4 sm:text-s3',
        ]"
      >
        {{ getAttr('description') }}
      </p>
      <div
        :class="[
          getAttr('t-input-wrapper-class'),
          customVariantClasse('input-wrapper'),
          'mb-2 h-[46px] w-full gap-1 rounded-[10px] border border-[#E0E0E0] p-2 text-extra-3 l-inline-start-center-nowrap placeholder:text-[#B3B3B3] group-c-focus:border-primary-2 group-primary:group-c-focus:border-primary-2 group-secondary:group-c-focus:border-secondary-2 group-error:border-error-dark group-error:text-error-dark group-error:group-c-focus:border-error-dark group-c-disabled:bg-[#E2E2E2] group-c-disabled:text-extra-3 ',
        ]"
      >
        <img
          v-if="!!getAttr('left-icon')"
          :src="getAttr('left-icon')"
          :class="[getAttr('t-left-icon-class'), 'h-[24px] w-[24px]']"
          @click="onLeftIconClick"
        />
        <input
          v-bind="{
            ...$props,
          }"
          :value="getAttr('value')"
          :name="id"
          :class="[
            getAttr('t-input-class'),
            'h-full w-full border-none text-extra-5 focus:border-none focus:outline-none focus:ring-0 disabled:bg-[#E2E2E2]',
          ]"
          @change="onChange"
          @input="onInput"
          @focus="handleFocus"
          @focusout="handleFocusOut"
        />
        <img
          v-if="!!getAttr('right-icon')"
          :src="getAttr('right-icon')"
          :class="[getAttr('t-right-icon-class'), 'h-[24px] w-[24px]']"
          @click="onRightIconClick"
        />
      </div>
      <small :class="[getAttr('t-error-class'), 'text-error-dark']">{{
        errors[0]
      }}</small>
    </label>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'VInput',
  components: {
    ValidationProvider,
  },

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
    onLeftIconClick(event) {
      this.$emit('leftIconClick')
    },
    onRightIconClick(event) {
      this.$emit('rightIconClick')
    },

    /**
     * @param {string} attr
     */
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
    handleFocus() {
      this.focusState = true
    },
    handleFocusOut() {
      this.focusState = false
    },
    customVariantClasse(prefix) {
      return this.variant ? prefix + '-' + this.variant : ''
    },
  },
}
</script>
