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
            <svg
              class="h-6 w-7"
              viewBox="0 0 30 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.94 10.66A16.69 16.69 0 0 0 15 0 16.69 16.69 0 0 0 .06 10.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 15 22a16.69 16.69 0 0 0 14.94-10.66 1 1 0 0 0 0-.68ZM15 20c-5.3 0-10.9-3.93-12.93-9C4.1 5.93 9.7 2 15 2s10.9 3.93 12.93 9C25.9 16.07 20.3 20 15 20Z"
                fill="#AFAFAF"
              />
              <path
                d="M15 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                fill="#AFAFAF"
              />
            </svg>
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
