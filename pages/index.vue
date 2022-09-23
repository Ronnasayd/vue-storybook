<template>
  <VForm
    v-slot="{ invalid }"
    t-form-classes="p-4 max-w-[400px]"
    @submit="handleSubmit"
  >
    <VInput
      id="teste"
      v-model="model"
      description="Description"
      rules="required"
      variant="secondary"
      placeholder="description"
      left-icon=""
      :right-icon="eyeSVG"
      t-label-classes=""
      t-description-classes=""
      t-input-wrapper-classes=""
      t-left-icon-classes=""
      t-input-classes=""
      t-right-icon-classes=""
      t-error-classes=""
      max-length="2"
    />
    <VButton type="submit" class="" :disabled="invalid" variant="secondary"
      >Enviar</VButton
    >
  </VForm>
</template>

<script>
import eyeSVG from '@/static/icons/eye.svg'
export default {
  name: 'IndexPage',
  data() {
    return { model: '', eyeSVG }
  },
  methods: {
    handleSubmit() {},
  },
}
</script>
