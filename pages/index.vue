<template>
  <div>
    <VModal
      t-modal-class=""
      :must-show="mustShowModal"
      @close="mustShowModal = false"
    >
      <VCard
        t-card-class="bg-white w-full h-full max-w-[300px] max-h-[300px] p-4"
      >
        <div class="w-full l-inline-end">
          <button @click="mustShowModal = false">
            <svg
              class="h-[16px] w-[16px]"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.209.67a2.291 2.291 0 0 1 3.24 0l8.103 8.104L20.655.67a2.291 2.291 0 0 1 3.24 3.24l-8.103 8.103 8.103 8.103a2.291 2.291 0 0 1-3.24 3.24l-8.103-8.103-8.103 8.103a2.291 2.291 0 0 1-3.24-3.24l8.103-8.103L1.209 3.91a2.291 2.291 0 0 1 0-3.24Z"
                fill="#000"
              />
            </svg>
          </button>
        </div>
        <div>hello world</div>
      </VCard>
    </VModal>
    <VDropdown
      t-dropdown-items-wrapper-class="max-w-[300px]"
      t-dropdown-wrapper-class="m-4"
      t-dropdown-toggle-wrapper-class=""
    >
      <template #toggle> Click me !</template>
      <template #items>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="handleClick">
          item 1
        </li>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="handleClick">
          item 2
        </li>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="handleClick">
          item 3
        </li>
      </template>
    </VDropdown>
    <VButton
      variant="primary"
      class="m-4 max-w-[300px]"
      @click="mustShowModal = true"
      >show modal</VButton
    >

    <VCard t-card-class="max-w-[400px] p-4 m-4">
      <VForm v-slot="{ invalid }" t-form-class="" @submit="handleSubmit">
        <VTextarea
          id="textarea"
          v-model.lazy="textarea"
          description="Description"
          rules="required"
          variant="primary"
          placeholder="description"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-input-wrapper-class=""
          t-form-control-class=""
          t-error-message-class=""
          max-length=""
        />
        <VInput
          id="teste"
          v-model.lazy="text"
          description="Description"
          rules="required"
          variant="secondary"
          placeholder="description"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-form-control-wrapper-class=""
          t-form-control-class=""
          t-error-message-class=""
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
        <VSelect
          id="select"
          v-model.lazy="select"
          description="Description"
          rules="required"
          variant="primary"
          :options="{ '1': 'option 1', '2': 'option 2' }"
          placeholder="Selecione ..."
          t-label-wrapper-class=""
          t-label-text-class=""
          t-select-wrapper-class=""
          t-selected-class=""
          t-arrow-class=""
          t-error-message-class=""
          t-options-class=""
          t-option-class=""
          max-length=""
        ></VSelect>
        <VCheckbox
          id="checkbox"
          v-model="checkbox"
          :disabled="invalid"
          description="Description"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-form-control-class=""
          t-error-message-class=""
        />
        <VRadio
          id="radio1"
          value="radio1"
          name="radio"
          :disabled="invalid"
          description="Radio 1"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-form-control-class=""
          t-error-message-class=""
          @change="(value) => (radio = value)"
        />
        <VRadio
          id="radio2"
          name="radio"
          value="radio2"
          :disabled="invalid"
          description="Radio 2"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-form-control-class=""
          t-error-message-class=""
          @change="(value) => (radio = value)"
        />
        <VToggle
          id="slider"
          v-model="slider"
          description="Slider description"
          :disabled="invalid"
          t-label-wrapper-class=""
          t-label-text-class=""
          t-toggle-wrapper-class=""
          t-toggle-content-class=""
          t-error-message-class=""
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
      select: '',
      checkbox: true,
      slider: false,
      radio: '',
      eyeSVG,
      textarea: '',
      mustShowModal: false,
    }
  },
  methods: {
    handleSubmit() {},
    handleClick() {
      console.log('clicked')
    },
  },
}
</script>
