<template>
  <div>
    <VModal :must-show="mustShowModal" @close="mustShowModal = false">
      <VCard
        t-card-class="bg-white w-full h-full max-w-[300px] max-h-[300px] p-4"
        >hello world</VCard
      >
    </VModal>
    <VButton
      variant="primary"
      class="m-4 max-w-[300px]"
      @click="mustShowModal = true"
      >show modal</VButton
    >
    <VCard t-card-class="max-w-[400px] p-4 m-4">
      <VForm v-slot="{ invalid }" t-form-class="" @submit="handleSubmit">
        <VInput
          id="teste"
          v-model.lazy="text"
          description="Description"
          rules="required"
          variant="secondary"
          placeholder="description"
          t-label-class=""
          t-description-class=""
          t-input-wrapper-class=""
          t-input-class=""
          t-error-class=""
          max-length=""
        >
          <template #right>
            <img :src="eyeSVG" class="h-6 w-6" />
          </template>
        </VInput>
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
    </VCard>
  </div>
</template>

<script>
import eyeSVG from '@/static/icons/eye.svg'
export default {
  name: 'IndexPage',
  data() {
    return {
      text: '',
      checkbox: true,
      slider: false,
      radio: '',
      eyeSVG,
      mustShowModal: false,
    }
  },
  methods: {
    handleSubmit() {},
  },
}
</script>
