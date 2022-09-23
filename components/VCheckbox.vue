<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :data-disabled="disabled"
      :for="id"
      :class="[
        getAttr('t-label-classes'),
        'l-inline-start-center gap-2 cursor-pointer select-none c-disabled:cursor-default',
      ]"
    >
      <input
        :name="id"
        type="checkbox"
        v-bind="{ ...$props }"
        :value="getAttr('value')"
        :checked="getAttr('value')"
        :class="[
          getAttr('t-input-classes'),
          `rounded w-4 h-4 focus:outline-none focus:ring-0 focus:ring-transparent border border-extra-4 checked:bg-primary-2 checked:hover:bg-primary-2 checked:focus:bg-primary-2 disabled:cursor-default disabled:checked:bg-extra-3 cursor-pointer`,
        ]"
        @change="onChange"
        @input="onInput"
      />
      <p
        :class="[
          getAttr('t-description-classes'),
          'text-extra-5 c-disabled:text-extra-4',
        ]"
      >
        {{ getAttr('description') }}
      </p></label
    >
    <small :class="[getAttr('t-error-classes'), 'text-error-dark']">{{
      errors[0]
    }}</small>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
  },
  props: {
    id: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    /**
     * @param {string} attr
     */
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
    onChange(event) {
      this.$emit('change', event.target.checked)
    },
    onInput(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<style>
</style>