<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :data-disabled="disabled"
      :for="id"
      :class="[
        getAttr('t-label-wrapper-class'),
        'group cursor-pointer select-none gap-2 l-inline-start-center c-disabled:cursor-default',
      ]"
    >
      <input
        type="radio"
        v-bind="{ ...$props }"
        :value="getAttr('value')"
        :class="[
          getAttr('t-form-control-class'),
          `h-4 w-4 cursor-pointer rounded-full border border-extra-4 checked:bg-primary-2 checked:bg-check checked:hover:bg-primary-2 focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-primary-2 disabled:cursor-default disabled:checked:bg-extra-3`,
        ]"
        @change="onChange"
        @input="onInput"
      />
      <p
        :class="[
          getAttr('t-label-text-class'),
          'text-extra-5 group-c-disabled:text-extra-4',
        ]"
      >
        {{ getAttr('description') }}
      </p></label
    >
    <small :class="[getAttr('t-error-message-class'), 'text-error-dark']">{{
      errors[0]
    }}</small>
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
    id: { type: String, required: true },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.value)
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style></style>
