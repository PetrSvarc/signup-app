<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div v-for="field in formFields" :key="field.id">
      <template v-if="field.fieldType === 'input'">
        <Input
          :id="field.id"
          v-model="field.value"
          :type="field.type"
          :label="field.label"
          :required="field.required"
          :disabled="field.disabled"
          :error-message="field.errorMessage"
        />
      </template>
      <template v-else-if="field.fieldType === 'checkbox'">
        <Checkbox
          :id="field.id"
          v-model="field.value"
          :label="field.label"
          :required="field.required"
          :disabled="field.disabled"
        />
      </template>
    </div>
    <slot name="submit">
      <button type="submit" class="w-full">
        Submit
      </button>
    </slot>
  </form>
</template>

<script setup lang="ts">
import type { FormField } from '~/composables/useForm'
import { useForm } from '~/composables/useForm'
import Input from '~/components/Form/Input.vue'
import Checkbox from '~/components/Form/Checkbox.vue'

type FormFieldInput = Omit<FormField, 'validate'>

interface FormProps {
  fields: FormFieldInput[]
}

const props = defineProps<FormProps>()

const emit = defineEmits<{
  submit: [success: boolean]
}>()

const { formFields, validateForm, submit } = useForm(props.fields)

const onSubmit = async () => {
  const success = await submit()
  emit('submit', success)
}
</script>
