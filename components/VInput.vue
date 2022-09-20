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
          'mb-1 text-gray-600 text-sm md:text-base disable:text-gray-400',
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
          'text-gray-600 w-full border border-gray-300 rounded h-[40px] p-2 focus:ring-1 focus:ring-blue-700 focus:outline-none active:ring-transparent mb-2 disable:text-gray-400 error:border-red-600 error:focus:ring-red-700 error:text-red-600 primary:focus:ring-orange-400 primary:focus:ring-2',
        ]"
        @change="onChange"
        @input="onInput"
      />
      <small :class="[getAttr('TErrorClasses'), 'text-red-600']">{{
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