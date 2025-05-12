<template>
  <form class="space-y-4" @submit.prevent>
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
          :error-message="field.errorMessage"
        />
      </template>
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormField } from '~/composables/useForm'
import { useForm } from '~/composables/useForm'
import Input from '~/components/Form/Input.vue'
import Checkbox from '~/components/Form/Checkbox.vue'

type FormFieldInput = Omit<FormField, 'validate' | 'errorMessage'>

interface FormProps {
  fields: FormFieldInput[]
}

const props = defineProps<FormProps>()

const emit = defineEmits<{
  submit: [data: Record<string, any>]
}>()

const { formFields, submit } = useForm(props.fields)

const handleSubmit = async () => {
  const success = await submit()
  if (success) {
    const formData = formFields.value.reduce((acc, field) => {
      acc[field.name] = field.value
      return acc
    }, {} as Record<string, any>)
    emit('submit', formData)
  }
}

defineExpose({
  submit: handleSubmit
})
</script>
