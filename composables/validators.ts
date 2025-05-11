// Types
type ValidatorValue = string | null | undefined
type ValidationResult = string | null
type ValidatorFn = (value: ValidatorValue) => ValidationResult
type ValidationRuleFn = (value: ValidatorValue) => boolean

// Interfaces
interface ValidationRule {
  validate: ValidationRuleFn
  message: string
}

// Base validator factory
const createValidator = (rule: ValidationRule): ValidatorFn => {
  return (value: ValidatorValue): ValidationResult => {
    if (!rule.validate(value)) {
      return rule.message
    }
    return null
  }
}

// Validation rules
const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => Boolean(value && (typeof value === 'string' ? value.trim() !== '' : true)),
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      if (!value) return true
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message
  }),

  minLength: (length: number, message?: string): ValidationRule => ({
    validate: (value: ValidatorValue): boolean => {
      if (!value) return true
      return value.length >= length
    },
    message: message || `This field must be at least ${length} characters long`
  })
}

// Exported validator functions
export const required = (message?: string): ValidatorFn => 
  createValidator(validationRules.required(message))

export const isEmail = (message?: string): ValidatorFn => 
  createValidator(validationRules.email(message))

export const minLength = (length: number, message?: string): ValidatorFn => 
  createValidator(validationRules.minLength(length, message)) 