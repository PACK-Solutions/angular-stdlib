# 0.2.0 (2019-11-18)

### Features

* **DateFormatter:** add `toFakeSerializedDate()` method that transforms a Date to have zero UTC offset timezone at serialization.


# 0.1.0 (2019-11-07)

### Features

* **AngularDateHttpInterceptor:** provides an interceptor that intercepts HTTP calls and converts from JSON response body : **ISO 8601** date and datetime strings to native Date object.
  > NOTE - Only necessary for projects using dependencies like `ngx-bootstrap/datepicker`, this one does not handle *ISO string dates* unlike **Angular**.<br/>
  > Linked to this open issue : https://github.com/valor-software/ngx-bootstrap/issues/4487
* **DateFormatter:** contains ISO_DATE formatter.
