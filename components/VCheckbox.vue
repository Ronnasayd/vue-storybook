<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :data-disabled="disabled"
      :for="id"
      :class="[
        getAttr('t-label-class'),
        'group cursor-pointer select-none gap-2 l-inline-start-center c-disabled:cursor-default',
      ]"
    >
      <input
        :name="id"
        type="checkbox"
        v-bind="{ ...$props }"
        :value="getAttr('value')"
        :checked="getAttr('value')"
        :class="[
          getAttr('t-input-class'),
          `h-4 w-4 cursor-pointer rounded border border-extra-4 checked:bg-primary-2 checked:hover:bg-primary-2 focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-primary-2 disabled:cursor-default disabled:checked:bg-extra-3`,
        ]"
        @change="onChange"
        @input="onInput"
      />
      <p
        :class="[
          getAttr('t-description-class'),
          'text-extra-5 group-c-disabled:text-extra-4',
        ]"
      >
        {{ getAttr('description') }}
      </p></label
    >
    <small :class="[getAttr('t-error-class'), 'text-error-dark']">{{
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

<style></style>
