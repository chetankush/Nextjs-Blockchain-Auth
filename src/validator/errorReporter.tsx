import { errors } from '@vinejs/vine'
import {
   FieldContext,
   ErrorReporterContract
} from '@vinejs/vine/types'

export default class ErrorReporter implements ErrorReporterContract {
  /**
   * A flag to know if one or more errors have been
   * reported
   */
  hasErrors: boolean = false

  errors: { [field: string]: string } = {}; // Change to an object with string values

  report(message: string, rule: string, field: FieldContext, meta?: any) {
    this.hasErrors = true;

    // Directly assign the error message to the field
    this.errors[field.wildCardPath] = message;
  }

  /**
   * Creates and returns an instance of the
   * ValidationError class
   */
  createError() {
    return new errors.E_VALIDATION_ERROR(this.errors)
  }
}
