import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Interceptor that handle Http Request and convert from JSON response body : ISO 8601 date and datetime to Date object.
 * Only necessary due to ngx-bootstrap/datepicker dependency use, this one does not handle "ISO string dates" unlike Angular.
 * Linked to this unresolved issue : https://github.com/valor-software/ngx-bootstrap/issues/4487
 */
@Injectable()
export class AngularDateHttpInterceptor implements HttpInterceptor {

  /**
   * Regular expression for ISO 8601 date and date time
   * Accepted formats :
   * - 'yyyy-MM-dd'
   * - 'yyyy-MM-ddThh:mm:ss'
   * - 'yyyy-MM-ddThh:mm:ss+00:00'
   * - 'yyyy-MM-ddThh:mm:ss-01:00'
   * - 'yyyy-MM-ddThh:mm:ssZ'
   * - 'yyyy-MM-ddThh:mm:ss.sss'
   * - 'yyyy-MM-ddThh:mm:ss.sss+00:00'
   * - 'yyyy-MM-ddThh:mm:ss.sss-01:00'
   * - 'yyyy-MM-ddThh:mm:ss.sssZ'
   */
  private readonly iso8601RegExp = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(([+-]\d{2}:\d{2})|Z)?)?$/;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.convertToDate(event.body);
        }
      })
    );
  }

  private convertToDate(body) {
    if (body === null || body === undefined || typeof body !== 'object') {
      return;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIso8601(value)) {
        body[key] = new Date(value);
      } else if (typeof value === 'object') {
        this.convertToDate(value);
      }
    }
  }

  private isIso8601(value) {
    if (value === null || value === undefined) {
      return false;
    }
    return this.iso8601RegExp.test(value);
  }

}
