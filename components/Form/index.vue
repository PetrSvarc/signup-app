<template>
  <form class="space-y-4" @submit.prevent>
    <div v-for="field in formFields" :key="field.id">
      <template v-if="field.fieldType === 'input'">
        <FormInput
          :id="field.id"
          v-model="field.value"
          :type="field.type"
          :label="field.label"
          :required="field.required"
          :disabled="field.disabled"
          :error-message="field.errorMessage || undefined"
        />
      </template>
      <template v-else-if="field.fieldType === 'checkbox'">
        <FormCheckbox
          :id="field.id"
          v-model="field.value"
          :label="field.label"
          :required="field.required"
          :disabled="field.disabled"
          :error-message="field.errorMessage || undefined"
        />
      </template>
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormField } from '~/composables/useForm'
import { useForm } from '~/composables/useForm'

type FormFieldInput = Omit<FormField, 'validate' | 'errorMessage'>

interface FormProps {
  fields: FormFieldInput[]
}

const props = defineProps<FormProps>()

const emit = defineEmits<{
  submit: [data: Record<string, FormField['value']>]
}>()

const { formFields, validateForm } = useForm(props.fields)

const handleSubmit = async () => {
  if (validateForm()) {
    const formData = formFields.value.reduce((acc, field) => {
      acc[field.name] = field.value
      return acc
    }, {} as Record<string, FormField['value']>)
    emit('submit', formData)
  }
}

defineExpose({
  submit: handleSubmit
})
</script>
