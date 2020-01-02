import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

function isEmptyValue(value: any): boolean {
  return value == null || value.length === 0;
}

function isValid(value: any, dateParam: Date, operator): boolean {
  if (isEmptyValue(value) || !(value instanceof Date) || isNaN(value.getTime()) || dateParam == null || operator(value, dateParam)) {
    return true;
  }
  return false;
}

function buildErrorValue(dateName?: string): true | { dateName: string } {
  return dateName ? { dateName } : true;
}

function date(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (isEmptyValue(value) || (value instanceof Date && !isNaN(value.getTime()))) {
    return null;
  }
  return { date: true };
}

function beforeDate(dateParam: Date, dateName?: string): ValidatorFn {
  return (control: AbstractControl) => {
    return isValid(control.value, dateParam, (a, b) => a < b) ? null : { beforeDate: buildErrorValue(dateName) };
  };
}

function notBeforeDate(dateParam: Date, dateName?: string): ValidatorFn {
  return (control: AbstractControl) => {
    return isValid(control.value, dateParam, (a, b) => a >= b) ? null : { notBeforeDate: buildErrorValue(dateName) };
  };
}

function afterDate(dateParam: Date, dateName?: string): ValidatorFn {
  return (control: AbstractControl) => {
    return isValid(control.value, dateParam, (a, b) => a > b) ? null : { afterDate: buildErrorValue(dateName) };
  };
}

function notAfterDate(dateParam: Date, dateName?: string): ValidatorFn {
  return (control: AbstractControl) => {
    return isValid(control.value, dateParam, (a, b) => a <= b) ? null : { notAfterDate: buildErrorValue(dateName) };
  };
}

/**
 * @description
 * Provides a set of built-in validators for Dates that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @publicApi
 */
export const DateValidators = {
  /**
   * @description
   * Validator that requires the control's value to be a `Date`
   *
   * @usageNotes Usage :
   *
   * ```typescript
   * const control = new FormControl(123, DateValidators.date);
   * console.log(control.errors); // {date: true}
   * ```
   *
   * @returns An error map with the `date` property if the validation check fails, otherwise `null`.
   */
  date,

  /**
   * @description
   * Validator that requires the control's value to be prior than the date in parameter.
   *
   * @usageNotes Usage :
   * ```typescript
   * const control = new FormControl(new Date('2020-01-01'), DateValidators.beforeDate(new Date('2019-01-01')));
   * console.log(control.errors); // {beforeDate: true}
   * ```
   * With optional `dateName` parameter :
   * ```typescript
   * const control = new FormControl(new Date('2020-01-01'), DateValidators.beforeDate(new Date('2019-01-01'), 'birthdate'));
   * console.log(control.errors); // {beforeDate: {dateName: 'birthdate'}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `beforeDate` property if the validation check fails, otherwise `null`.
   */
  beforeDate,

  /**
   * @description
   * Validator that requires the control's value not to be prior than the date in parameter.
   *
   * @usageNotes Usage :
   * ```typescript
   * const control = new FormControl(new Date('2019-01-01'), DateValidators.notBeforeDate(new Date('2020-01-01')));
   * console.log(control.errors); // {notBeforeDate: true}
   * ```
   * With optional `dateName` parameter :
   * ```typescript
   * const control = new FormControl(new Date('2019-01-01'), DateValidators.notBeforeDate(new Date('2020-01-01'), 'birthdate'));
   * console.log(control.errors); // {notBeforeDate: {dateName: 'birthdate'}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `notBeforeDate` property if the validation check fails, otherwise `null`.
   */
  notBeforeDate,

  /**
   * @description
   * Validator that requires the control's value to be later than the date in parameter.
   *
   * @usageNotes Usage :
   * ```typescript
   * const control = new FormControl(new Date('2019-01-01'), DateValidators.afterDate(new Date('2020-01-01')));
   * console.log(control.errors); // {afterDate: true}
   * ```
   * With optional `dateName` parameter :
   * ```typescript
   * const control = new FormControl(new Date('2019-01-01'), DateValidators.afterDate(new Date('2020-01-01'), 'birthdate'));
   * console.log(control.errors); // {afterDate: {dateName: 'birthdate'}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `afterDate` property if the validation check fails, otherwise `null`.
   */
  afterDate,

  /**
   * @description
   * Validator that requires the control's value not to be later than the date in parameter.
   *
   * @usageNotes Usage :
   * ```typescript
   * const control = new FormControl(new Date('2020-01-01'), DateValidators.notAfterDate(new Date('2019-01-01')));
   * console.log(control.errors); // {notAfterDate: true}
   * ```
   * With optional `dateName` parameter :
   * ```typescript
   * const control = new FormControl(new Date('2020-01-01'), DateValidators.notAfterDate(new Date('2019-01-01'), 'birthdate'));
   * console.log(control.errors); // {notAfterDate: {dateName: 'birthdate'}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `notAfterDate` property if the validation check fails, otherwise `null`.
   */
  notAfterDate
};
