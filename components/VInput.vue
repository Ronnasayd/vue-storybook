<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :for="id"
      :class="[getAttr('TLabelClasses'), 'l-stack-start']"
      :data-disable="disabled"
      :data-error="!!errors[0]"
      :data-variant="variant"
    >
      <p
        :class="[
          getAttr('TDescriptionClasses'),
          'mb-1 text-extra-0 heading-2 disable:text-gray-400',
        ]"
      >
        {{ getAttr('description') }}
      </p>
      <input
        v-bind="{ ...$props }"
        :value="getAttr('value')"
        :name="id"
        :class="[
          getAttr('TInputClasses'),
          'text-extra-0 w-full border border-[#E0E0E0] rounded-[10px] h-[46px] p-2 placeholder:text-[#B3B3B3] focus:ring-1 focus:ring-secondary-2 focus:outline-none active:ring-transparent mb-2 disable:text-extra-4 disable:bg-[#E2E2E2] error:border-error error:focus:ring-0 error:text-error primary:focus:ring-primary-2 secondary:focus:ring-secondary-2',
        ]"
        @change="onChange"
        @input="onInput"
      />
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
      validator: (value) => ['text', 'number', 'password'].includes(value),
      default: 'text',
    },
    id: { type: String, required: true },
    placeholder: { type: String, default: '' },
    variant: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.value)
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
  },
}
</script>

<style lang="postcss">
</style>