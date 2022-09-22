<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid, errors }">
    <form
      :class="[getAttr('TFormClasses')]"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <slot :invalid="invalid" , :errors="errors" />
    </form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'VForm',
  components: {
    ValidationObserver,
  },
  methods: {
    onSubmit() {
      this.$emit('submit')
    },
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
  },
}
</script>
