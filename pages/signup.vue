<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Sign Up</h1>
    <Form
      :fields="formFields"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { required, isEmail, minLength } from '~/composables/validators'
import type { FormField as FormFieldExternal } from '~/composables/useForm'

type FormField = Omit<FormFieldExternal, 'validate' | 'errorMessage'>

const formFields: FormField[] = [
  {
    id: 'email',
    name: 'email',
    fieldType: 'input',
    type: 'email',
    label: 'Email',
    value: '',
    validators: [required(), isEmail()],
    required: true
  },
  {
    id: 'password',
    name: 'password',
    fieldType: 'input',
    type: 'password',
    label: 'Password',
    value: '',
    validators: [required(), minLength(6)],
    required: true
  },
  {
    id: 'wantsUpdates',
    name: 'wantsUpdates',
    fieldType: 'checkbox',
    type: 'checkbox',
    label: 'I want to receive updates',
    value: false
  }
]

const handleSubmit = (success: boolean) => {
  if (success) {
    // Handle successful form submission
    console.log('Form submitted successfully')
  }
}
</script> 