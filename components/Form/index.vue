<template>
  <form class="space-y-4" @submit.prevent>
    <div v-for="field in formFields" :key="field.id">
      <component
        :is="getComponent(field.fieldType)"
        :id="field.id"
        v-model="field.value"
        :expand="field?.expand"
        :type="field.fieldType === 'input' ? field.type : undefined"
        :label="field.label"
        :required="field.required"
        :disabled="field.disabled"
        :error-message="field.errorMessage || undefined"
        @input="handleInput(field)"
      />
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormField } from '~/composables/useForm'
import { useForm, FieldType } from '~/composables/useForm'
import type { Component } from 'vue'
import { useDebounceFn } from "@vueuse/core";

type FormFieldInput = Omit<FormField, 'validate' | 'errorMessage'>

interface FormProps {
  fields: FormFieldInput[],
  progressiveValidation?: boolean
}

const props = withDefaults(defineProps<FormProps>(), {
  progressiveValidation: false,
})

const emit = defineEmits<{
  submit: [data: Record<string, FormField['value']>]
}>()

const { formFields, validateForm } = useForm(props.fields)

const componentMap: Record<FieldType, string | Component> = {
  [FieldType.INPUT]: resolveComponent('FormInput'),
  [FieldType.CHECKBOX]: resolveComponent('FormCheckbox'),
}

const getComponent = (fieldType: FieldType) => {
  return componentMap[fieldType] || componentMap[FieldType.INPUT]
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

const handleInput = useDebounceFn((field: typeof formFields.value[number]) => {
  if(props.progressiveValidation) {
    field.validate(field.value)
  }
}, 300)

defineExpose({
  submit: handleSubmit
})
</script>
