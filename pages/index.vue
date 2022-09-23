<template>
  <VForm
    v-slot="{ invalid }"
    t-form-classes="p-4 max-w-[400px]"
    @submit="handleSubmit"
  >
    <VInput
      id="teste"
      v-model.lazy="text"
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
      max-length=""
    />
    <VCheckbox
      id="checkbox"
      v-model="checkbox"
      :disabled="invalid"
      description="Description"
      t-label-classes=""
      t-description-classes=""
      t-input-classes=""
      t-error-classes=""
    />
    <VRadio
      id="radio1"
      value="radio1"
      name="radio"
      :disabled="invalid"
      description="Radio 1"
      t-label-classes=""
      t-description-classes=""
      t-input-classes=""
      t-error-classes=""
      @change="(value) => (radio = value)"
    />
    <VRadio
      id="radio2"
      name="radio"
      value="radio2"
      :disabled="invalid"
      description="Radio 2"
      t-label-classes=""
      t-description-classes=""
      t-input-classes=""
      t-error-classes=""
      @change="(value) => (radio = value)"
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
    return { text: '', checkbox: true, radio: '', eyeSVG }
  },
  methods: {
    handleSubmit() {},
  },
}
</script>
