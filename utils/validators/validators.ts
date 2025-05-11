type ValidatorValue = string | boolean | null | undefined
export type ValidationResult = string | null
export type ValidatorFn = (value: ValidatorValue) => ValidationResult
type ValidationRuleFn = (value: ValidatorValue) => boolean

interface ValidationRule {
  validate: ValidationRuleFn
  message: string
}

const createValidator = (rule: ValidationRule): ValidatorFn => {
  return (value: ValidatorValue): ValidationResult => {
    if (!rule.validate(value)) {
      return rule.message
    }
    return null
  }
}

const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      if (typeof value === 'boolean') return value
      return Boolean(value && (value.trim() !== ''))
    },
    message
  }),

  requiredCheckbox: (message = 'This checkbox must be checked'): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      return value === true
    },
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      if (!value || typeof value === 'boolean') return true
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message
  }),

  minLength: (length: number, message?: string): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      if (!value || typeof value === 'boolean') return true
      return value.length >= length
    },
    message: message || `This field must be at least ${length} characters long`
  })
}

export const required = (message?: string): ValidatorFn =>
  createValidator(validationRules.required(message))

export const requiredCheckbox = (message?: string): ValidatorFn =>
  createValidator(validationRules.requiredCheckbox(message))

export const isEmail = (message?: string): ValidatorFn =>
  createValidator(validationRules.email(message))

export const minLength = (length: number, message?: string): ValidatorFn =>
  createValidator(validationRules.minLength(length, message))
