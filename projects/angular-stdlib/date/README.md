# @angular-stdlib/date

## Installation

| Angular | @angular-stdlib/date |
| ------- | -------------------- |
| 7 | 0.x |

Install `@angular-stdlib/date` from `npm`:
```bash
npm install @angular-stdlib/date --save
```

## Features

### AngularDateHttpInterceptor

**@angular-stdlib/date** provides an interceptor that intercepts HTTP calls and converts from JSON response body : [ISO 8601](https://www.iso.org/fr/iso-8601-date-and-time-format.html) date and datetime strings to native Date object.

To automatically use this interceptor, simply provide `AngularDateHttpInterceptor` as HTTP_INTERCEPTORS with `multi` flag enabled to keep Angular behavior:

```typescript
import { AngularDateHttpInterceptor } from '@ps-angular-common/date';

@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AngularDateHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> NOTE - `AngularDateHttpInterceptor` is only necessary due to [ngx-bootstrap/datepicker](https://github.com/valor-software/ngx-bootstrap/tree/development/src/datepicker) dependency use, this one does not handle "ISO string dates" unlike Angular. Linked to this unresolved issue: https://github.com/valor-software/ngx-bootstrap/issues/4487

### DateFormatter

`DateFormatter` is a static class that provides :
* **ISO_DATE** string format (*yyyy-MM-dd*) to use with Angular [DatePipe](https://angular.io/api/common/DatePipe).
* `toFakeSerializedDate(date: Date)` method transforms the param date in the same way as it is serialized :
   * Serialization uses `JSON.stringify` method which use the date `toJSON()` method which transforms the date into UTC Z.
   * Only use when you have to serialize dates and you don't want serialization to apply zero UTC offset transformation.
