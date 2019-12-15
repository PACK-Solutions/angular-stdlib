# 0.2.0 (2019-11-18)

### Features

* **DateFormatter:** add `toFakeSerializedDate()` method that transforms a Date to have zero UTC offset timezone at serialization.


# 0.1.0 (2019-11-07)

### Features

* **AngularDateHttpInterceptor:** Interceptor that handle Http Request and convert from JSON response body : **ISO 8601** date and datetime to Date object.
  > Only necessary due to `ngx-bootstrap/datepicker` dependency use, this one does not handle *ISO string dates* unlike **Angular**.<br/>
  > Linked to this unresolved issue : https://github.com/valor-software/ngx-bootstrap/issues/4487
* **DateFormatter:** contains ISO_DATE formatter.
