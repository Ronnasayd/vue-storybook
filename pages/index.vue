<template>
  <VForm
    v-slot="{ invalid }"
    t-form-class="p-4 max-w-[400px]"
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
      t-label-class=""
      t-description-class=""
      t-input-wrapper-class=""
      t-left-icon-class=""
      t-input-class=""
      t-right-icon-class="cursor-pointer"
      t-error-class=""
      max-length=""
    />
    <VCheckbox
      id="checkbox"
      v-model="checkbox"
      :disabled="invalid"
      description="Description"
      t-label-class=""
      t-description-class=""
      t-input-class=""
      t-error-class=""
    />
    <VRadio
      id="radio1"
      value="radio1"
      name="radio"
      :disabled="invalid"
      description="Radio 1"
      t-label-class=""
      t-description-class=""
      t-input-class=""
      t-error-class=""
      @change="(value) => (radio = value)"
    />
    <VRadio
      id="radio2"
      name="radio"
      value="radio2"
      :disabled="invalid"
      description="Radio 2"
      t-label-class=""
      t-description-class=""
      t-input-class=""
      t-error-class=""
      @change="(value) => (radio = value)"
    />
    <VSlider
      id="slider"
      v-model="slider"
      description="Slider description"
      :disabled="invalid"
      t-label-class=""
      t-description-class=""
      t-slider-container-class=""
      t-slider-content-class=""
      t-error-class=""
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
    return { text: '', checkbox: true, slider: false, radio: '', eyeSVG }
  },
  methods: {
    handleSubmit() {},
  },
}
</script>
