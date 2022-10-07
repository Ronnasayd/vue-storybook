<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :data-disabled="disabled"
      :data-checked="getAttr('value')"
      :data-variant="variant"
      :for="id"
      :class="[
        getAttr('t-label-wrapper-class'),
        'group cursor-pointer select-none gap-2 l-inline-start-center c-disabled:cursor-default',
      ]"
    >
      <input
        :name="id"
        type="checkbox"
        v-bind="{ ...$props }"
        :value="getAttr('value')"
        :checked="getAttr('value')"
        :class="['hidden']"
        @change="onChange"
        @input="onInput"
      />
      <div
        :class="[
          getAttr('t-toggle-wrapper-class'),
          'h-[32px] w-[64px] rounded-full border border-primary-2 bg-primary-0 p-[3px]  group-secondary:border-secondary-2 group-secondary:bg-secondary-0 group-c-disabled:border-extra-3 group-c-disabled:bg-extra-2',
        ]"
      >
        <div
          :class="[
            getAttr('t-toggle-content-class'),
            'h-[24px] w-[24px] translate-x-0 rounded-full bg-primary-2 transition-all duration-300 group-secondary:bg-secondary-2  group-c-checked:translate-x-[132%] group-c-checked:bg-check group-c-disabled:bg-extra-3',
          ]"
        ></div>
      </div>
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
    disabled: { type: Boolean, default: false },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
  },
  methods: {
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
