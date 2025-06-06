<template>
  <div class="w-full">
    <provet-input
        v-bind="computedInputProps"
        v-model="modelValue"
        class="form-input"
    >
      <provet-button
        v-if="type === 'password'"
        slot="end"
        aria-describedby="password-tooltip"
        block
        square
        @click="togglePassword"
      >
        <provet-icon :name="passwordIcon" />
      </provet-button>
    </provet-input>

    <provet-tooltip v-if="type === 'password'" id="password-tooltip">
      {{ passwordTooltipText }}
    </provet-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, useAttrs } from 'vue'

type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number'

interface FormInputProps {
  id: string
  label: string
  modelValue: string | number
  type?: InputType
  required?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<FormInputProps>(), {
  type: 'text',
  required: false,
  errorMessage: '',
})

const { id, label, type, required, errorMessage } = toRefs(props)
const attrs = useAttrs()

const showPassword = ref(false)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const passwordIcon = computed(() =>
    showPassword.value ? 'interface-edit-off' : 'interface-edit-on'
)

const passwordTooltipText = computed(() =>
    showPassword.value ? 'Hide password' : 'Show password'
)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const computedInputProps = computed(() => ({
  id: id.value,
  label: label.value,
  type: type.value === 'password' && showPassword.value ? 'text' : type.value,
  required: required.value,
  ...(errorMessage.value && { error: errorMessage.value || undefined }),
  ...attrs,
}))
</script>
