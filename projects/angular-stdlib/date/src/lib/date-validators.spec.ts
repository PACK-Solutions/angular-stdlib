import { FormControl, ValidatorFn } from '@angular/forms';
import { DateValidators } from './date-validators';

describe('DateValidators', () => {

  const badFormat = new Date('Invalid date');
  const isoString = '2019-01-01';
  const firstDate = new Date('2018-01-01');
  const secondDate = new Date('2020-01-01');

  it('should have valid date', () => {
    const dateControl = new FormControl(new Date(), DateValidators.date);
    expect(dateControl.valid).toBeTruthy();
    expect(dateControl.hasError('date')).toBeFalsy();
  });

  it('should have valid date (null)', () => {
    const dateControl = new FormControl(null, DateValidators.date);
    expect(dateControl.valid).toBeTruthy();
    expect(dateControl.hasError('date')).toBeFalsy();
  });

  it('should have valid date (undefined)', () => {
    const dateControl = new FormControl(undefined, DateValidators.date);
    expect(dateControl.valid).toBeTruthy();
    expect(dateControl.hasError('date')).toBeFalsy();
  });

  it('should have valid date (empty string)', () => {
    const dateControl = new FormControl('', DateValidators.date);
    expect(dateControl.valid).toBeTruthy();
    expect(dateControl.hasError('date')).toBeFalsy();
  });

  it('should have invalid date (bad format)', () => {
    const dateControl = new FormControl(badFormat, DateValidators.date);
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('date')).toBeTruthy();
  });

  it('should have invalid date (ISO string)', () => {
    const dateControl = new FormControl(isoString, DateValidators.date);
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('date')).toBeTruthy();
  });

  it('should have invalid date (number)', () => {
    const dateControl = new FormControl(0, DateValidators.date);
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('date')).toBeTruthy();
  });

  it('should have invalid date (all DateValidators)', () => {
    const dateControl = new FormControl(isoString, [
      DateValidators.date,
      DateValidators.beforeDate(firstDate),
      DateValidators.notBeforeDate(secondDate),
      DateValidators.afterDate(secondDate),
      DateValidators.notAfterDate(firstDate)
    ]);
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('date')).toBeTruthy();
    expect(dateControl.hasError('beforeDate')).toBeFalsy();
    expect(dateControl.hasError('notBeforeDate')).toBeFalsy();
    expect(dateControl.hasError('afterDate')).toBeFalsy();
    expect(dateControl.hasError('notAfterDate')).toBeFalsy();
  });

  it('should be before date valid', () => {
    expectValidDate(firstDate, DateValidators.beforeDate(secondDate), 'beforeDate');
  });

  it('should be before date valid (bad format)', () => {
    expectValidDate(badFormat, DateValidators.beforeDate(secondDate), 'beforeDate');
  });

  it('should be before date valid (ISO string)', () => {
    expectValidDate(isoString, DateValidators.beforeDate(secondDate), 'beforeDate');
  });

  it('should be before date valid (null param)', () => {
    expectValidDate(new Date(), DateValidators.beforeDate(null), 'beforeDate');
  });

  it('should be before date invalid (same dates)', () => {
    const dateControl = new FormControl(firstDate, DateValidators.beforeDate(firstDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('beforeDate')).toBeTruthy();
  });

  it('should be before date invalid (date after)', () => {
    const dateControl = new FormControl(secondDate, DateValidators.beforeDate(firstDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('beforeDate').dateName).toBeUndefined();
  });

  it('should be before date invalid with dateName', () => {
    const dateControl = new FormControl(secondDate, DateValidators.beforeDate(firstDate, 'birthdate'));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('beforeDate').dateName).toBe('birthdate');
  });

  it('should not be before date valid', () => {
    expectValidDate(secondDate, DateValidators.notBeforeDate(firstDate), 'notBeforeDate');
  });

  it('should not be before date valid (bad format)', () => {
    expectValidDate(badFormat, DateValidators.notBeforeDate(secondDate), 'notBeforeDate');
  });

  it('should not be before date valid (ISO string)', () => {
    expectValidDate(isoString, DateValidators.notBeforeDate(secondDate), 'notBeforeDate');
  });

  it('should not be before date valid (null param)', () => {
    expectValidDate(new Date(), DateValidators.notBeforeDate(null), 'notBeforeDate');
  });

  it('should not be before date valid (same dates)', () => {
    expectValidDate(firstDate, DateValidators.notBeforeDate(firstDate), 'notBeforeDate');
  });

  it('should not be before date invalid (date before)', () => {
    const dateControl = new FormControl(firstDate, DateValidators.notBeforeDate(secondDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('notBeforeDate').dateName).toBeUndefined();
  });

  it('should not be before date invalid with dateName', () => {
    const dateControl = new FormControl(firstDate, DateValidators.notBeforeDate(secondDate, 'birthdate'));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('notBeforeDate').dateName).toBe('birthdate');
  });

  it('should be after date valid', () => {
    expectValidDate(secondDate, DateValidators.afterDate(firstDate), 'afterDate');
  });

  it('should be after date valid (bad format)', () => {
    expectValidDate(badFormat, DateValidators.afterDate(secondDate), 'afterDate');
  });

  it('should be after date valid (ISO string)', () => {
    expectValidDate(isoString, DateValidators.afterDate(secondDate), 'afterDate');
  });

  it('should be after date valid (null param)', () => {
    expectValidDate(new Date(), DateValidators.afterDate(null), 'afterDate');
  });

  it('should be after date invalid (same dates)', () => {
    const dateControl = new FormControl(firstDate, DateValidators.afterDate(firstDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.hasError('afterDate')).toBeTruthy();
  });

  it('should be after date invalid (date before)', () => {
    const dateControl = new FormControl(firstDate, DateValidators.afterDate(secondDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('afterDate').dateName).toBeUndefined();
  });

  it('should be after date invalid with dateName', () => {
    const dateControl = new FormControl(firstDate, DateValidators.afterDate(secondDate, 'birthdate'));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('afterDate').dateName).toBe('birthdate');
  });

  it('should not be after date valid', () => {
    expectValidDate(firstDate, DateValidators.notAfterDate(secondDate), 'notAfterDate');
  });

  it('should not be after date valid (bad format)', () => {
    expectValidDate(badFormat, DateValidators.notAfterDate(secondDate), 'notAfterDate');
  });

  it('should not be after date valid (ISO string)', () => {
    expectValidDate(isoString, DateValidators.notAfterDate(secondDate), 'notAfterDate');
  });

  it('should not be after date valid (null param)', () => {
    expectValidDate(new Date(), DateValidators.notAfterDate(null), 'notAfterDate');
  });

  it('should not be after date valid (same dates)', () => {
    expectValidDate(firstDate, DateValidators.notAfterDate(firstDate), 'notAfterDate');
  });

  it('should not be after date invalid (date after)', () => {
    const dateControl = new FormControl(secondDate, DateValidators.notAfterDate(firstDate));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('notAfterDate').dateName).toBeUndefined();
  });

  it('should not be after date invalid with dateName', () => {
    const dateControl = new FormControl(secondDate, DateValidators.notAfterDate(firstDate, 'birthdate'));
    expect(dateControl.valid).toBeFalsy();
    expect(dateControl.getError('notAfterDate').dateName).toBe('birthdate');
  });

});

function expectValidDate(value: any, validator: ValidatorFn, errorCode: string) {
  const dateControl = new FormControl(value, validator);
  expect(dateControl.valid).toBeTruthy();
  expect(dateControl.hasError(errorCode)).toBeFalsy();
}
