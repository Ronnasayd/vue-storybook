<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :for="id"
      :class="[getAttr('TLabelClasses'), 'l-stack-start group ']"
      :data-disabled="disabled"
      :data-error="!!errors[0]"
      :data-variant="variant"
      :data-focus="focusState"
    >
      <p
        :class="[
          getAttr('TDescriptionClasses'),
          'mb-1 text-extra-0 text-heading-2 disable:text-gray-400 ',
        ]"
      >
        {{ getAttr('description') }}
      </p>
      <div
        :class="[
          getAttr('TInputWrapperClasses'),
          customVariantClasse('input-wrapper'),
          'cfocus:border-primary-2 error:border-error error:text-error l-inline-start-center-nowrap gap-1 text-extra-0 w-full border border-[#E0E0E0] rounded-[10px] h-[46px] p-2 placeholder:text-[#B3B3B3] mb-2 cdisabled:text-extra-4 cdisabled:bg-[#E2E2E2]',
        ]"
      >
        <img
          v-if="!!getAttr('leftIcon')"
          :src="getAttr('leftIcon')"
          :class="[getAttr('TLeftIconClasses'), 'w-[24px] h-[24px]']"
          @click="onLeftIconClick"
        />
        <input
          v-bind="{ ...$props }"
          :value="getAttr('value')"
          :name="id"
          :class="[
            getAttr('TInputClasses'),
            'w-full h-full focus:outline-none ',
          ]"
          @change="onChange"
          @input="onInput"
          @focus="handleFocus"
          @focusout="handleFocusOut"
        />
        <img
          v-if="!!getAttr('rightIcon')"
          :src="getAttr('rightIcon')"
          :class="[getAttr('TRightIconClasses'), 'w-[24px] h-[24px]']"
          @click="onRightIconClick"
        />
      </div>
      <small :class="[getAttr('TErrorClasses'), 'text-error']">{{
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
    maxlength: { type: String, default: '' },
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

<style lang="postcss" scoped>
[data-variant='primary'] {
  &[data-focus='true'] .input-wrapper-primary {
    @apply border-primary-2;
  }
  &[data-error='true'] .input-wrapper-primary {
    @apply border-error;
  }
}
[data-variant='secondary'] {
  &[data-focus='true'] .input-wrapper-secondary {
    @apply border-secondary-2;
  }
  &[data-error='true'] .input-wrapper-secondary {
    @apply border-error;
  }
}
</style>