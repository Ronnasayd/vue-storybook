<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :rules="getAttr('rules')">
    <label
      :data-disabled="disabled"
      :data-checked="getAttr('value')"
      :for="id"
      :class="[
        getAttr('t-label-class'),
        'group l-inline-start-center gap-2 cursor-pointer select-none c-disabled:cursor-default',
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
          getAttr('t-slider-container-class'),
          'rounded-full border border-extra-4 w-[64px] h-[32px] p-[3px]',
        ]"
      >
        <div
          :class="[
            getAttr('t-slider-content-class'),
            'bg-primary-2 w-[24px] h-[24px] rounded-full transition-all mr-auto group-c-checked:ml-auto group-c-checked:mr-0 group-c-checked:bg-check group-c-disabled:bg-extra-4',
          ]"
        ></div>
      </div>
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

<style>
</style>