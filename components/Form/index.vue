<template>
  <form class="space-y-4" @submit.prevent>
    <div v-for="field in formFields" :key="field.id">
      <component
        :is="getComponent(field.fieldType)"
        :id="field.id"
        :expand="field?.expand"
        v-model="field.value"
        :type="field.fieldType === 'input' ? field.type : undefined"
        :label="field.label"
        :required="field.required"
        :disabled="field.disabled"
        :error-message="field.errorMessage || undefined"

      />
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormField } from '~/composables/useForm'
import { useForm } from '~/composables/useForm'
import type { Component } from 'vue'

type FormFieldInput = Omit<FormField, 'validate' | 'errorMessage'>

interface FormProps {
  fields: FormFieldInput[]
}

const props = defineProps<FormProps>()

const emit = defineEmits<{
  submit: [data: Record<string, FormField['value']>]
}>()

const { formFields, validateForm } = useForm(props.fields)

const componentMap: Record<string, string | Component> = {
  default: resolveComponent('FormInput'),
  input:  resolveComponent('FormInput'),
  checkbox: resolveComponent('FormCheckbox'),
}

const getComponent = (fieldType: string) => {
  return componentMap[fieldType] || componentMap.default
}

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
