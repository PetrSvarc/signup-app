<template>
  <div class="w-full">
    <provet-checkbox
      :id="id"
      :error="errorMessage"
      v-model="modelValue"
      type="checkbox"
      :label="label"
      :required="required"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
interface CheckboxProps {
  id: string
  label: string
  modelValue: boolean
  required?: boolean
  disabled?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  required: false,
  disabled: false,
  errorMessage: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
