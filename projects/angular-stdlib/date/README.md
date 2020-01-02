 [![npm version](https://badge.fury.io/js/%40angular-stdlib%2Fdate.svg)](https://badge.fury.io/js/%40angular-stdlib%2Fdate)

# @angular-stdlib/date

> WARNING - Library is under development and may have API breaking changes for versions prior to 1.0.0.

## Installation

| Angular | @angular-stdlib/date |
| ------- | -------------------- |
| 7 | 0.x |

Install `@angular-stdlib/date` from `npm`:
```bash
npm install @angular-stdlib/date --save
```

## Features

### DateHttpInterceptor

**@angular-stdlib/date** provides an interceptor that intercepts HTTP calls and converts from JSON response body : [ISO 8601](https://www.iso.org/fr/iso-8601-date-and-time-format.html) date and datetime strings to native Date object.

To automatically use this interceptor, simply provide `DateHttpInterceptor` as HTTP_INTERCEPTORS with `multi` flag enabled to keep Angular behavior:

```typescript
import { DateHttpInterceptor } from '@angular-stdlib/date';

@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DateHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> NOTE - `DateHttpInterceptor` for projects using dependencies like [ngx-bootstrap/datepicker](https://github.com/valor-software/ngx-bootstrap/tree/development/src/datepicker), this one does not handle "ISO string dates" unlike Angular.<br>
> Linked to this open issue: https://github.com/valor-software/ngx-bootstrap/issues/4487

### DateFormatter

`DateFormatter` is a static class that provides :
* **ISO_DATE** string format (*yyyy-MM-dd*) to use with Angular [DatePipe](https://angular.io/api/common/DatePipe).
* `toFakeSerializedDate(date: Date)` method : transforms the param date in the same way as it would be serialized :
   * Serialization uses `JSON.stringify` method which use the `toJSON()` date method which transforms the date into UTC Z.
   * Only use when you have to serialize dates and you don't want serialization to apply zero UTC offset transformation.

### DateValidators

Provides a set of built-in validators for Dates that can be used by form controls :
* **date** : Validator that requires the control's value to be a `Date` :
  ```typescript
  const control = new FormControl(123, DateValidators.date);
  console.log(control.errors); // {date: true}
  ```
* **beforeDate** : Validator that requires the control's value to be prior than the date in parameter :
  ```typescript
  const control = new FormControl(new Date('2020-01-01'), DateValidators.beforeDate(new Date('2019-01-01')));
  console.log(control.errors); // {beforeDate: true}
  ```
  With optional `dateName` parameter :
  ```typescript
  const control = new FormControl(new Date('2020-01-01'), DateValidators.beforeDate(new Date('2019-01-01'), 'birthdate'));
  console.log(control.errors); // {beforeDate: {dateName: 'birthdate'}}
  ```
* **notBeforeDate** : Validator that requires the control's value not to be prior than the date in parameter :
  ```typescript
  const control = new FormControl(new Date('2019-01-01'), DateValidators.notBeforeDate(new Date('2020-01-01')));
  console.log(control.errors); // {notBeforeDate: true}
  ```
  With optional `dateName` parameter :
  ```typescript
  const control = new FormControl(new Date('2019-01-01'), DateValidators.notBeforeDate(new Date('2020-01-01'), 'birthdate'));
  console.log(control.errors); // {notBeforeDate: {dateName: 'birthdate'}}
  ```
* **afterDate** : Validator that requires the control's value to be later than the date in parameter :
  ```typescript
  const control = new FormControl(new Date('2019-01-01'), DateValidators.afterDate(new Date('2020-01-01')));
  console.log(control.errors); // {afterDate: true}
  ```
  With optional `dateName` parameter :
  ```typescript
  const control = new FormControl(new Date('2019-01-01'), DateValidators.afterDate(new Date('2020-01-01'), 'birthdate'));
  console.log(control.errors); // {afterDate: {dateName: 'birthdate'}}
  ```
* **notAfterDate** : Validator that requires the control's value not to be later than the date in parameter :
  ```typescript
  const control = new FormControl(new Date('2020-01-01'), DateValidators.notAfterDate(new Date('2019-01-01')));
  console.log(control.errors); // {notAfterDate: true}
  ```
  With optional `dateName` parameter :
  ```typescript
  const control = new FormControl(new Date('2020-01-01'), DateValidators.notAfterDate(new Date('2019-01-01'), 'birthdate'));
  console.log(control.errors); // {notAfterDate: {dateName: 'birthdate'}}
  ```

For **beforeDate**, **notBeforeDate**, **afterDate** and **notAfterDate**, if control's value is not a `Date`, validation is always a success.
