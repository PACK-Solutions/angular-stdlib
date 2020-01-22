# 0.3.1 (2020-01-22)

### GitHub

* add a contributing file, closes ([#9](https://github.com/PACK-Solutions/angular-stdlib/issues/9))
* **date:** add relevant keywords to `package.json`, closes ([#11](https://github.com/PACK-Solutions/angular-stdlib/issues/11))
* replace contact email address with oss@pack-solutions.com, closes ([#8](https://github.com/PACK-Solutions/angular-stdlib/issues/8))


# 0.3.0 (2020-01-04)

### BREAKING CHANGES

* **date:** `AngularDateHttpInterceptor` has been renamed `DateHttpInterceptor`, closes ([#4](https://github.com/PACK-Solutions/angular-stdlib/issues/4))

### Features

* **date:** add `DateValidators` built-in validators for Dates, closes ([#3](https://github.com/PACK-Solutions/angular-stdlib/issues/3))

### GitHub

* add a code of conduct (based on [Contributor Covenant Code of Conduct v1.4](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html)), closes ([#6](https://github.com/PACK-Solutions/angular-stdlib/issues/6))


# 0.2.1 (2019-12-22)

### Documentation

* **date:** fix `AngularDateHttpInterceptor` example on README, closes ([#1](https://github.com/PACK-Solutions/angular-stdlib/issues/1))


# 0.2.0 (2019-11-18)

### Features

* **date:** add `DateFormatter.toFakeSerializedDate()` method that transforms a Date to have zero UTC offset timezone at serialization.


# 0.1.0 (2019-11-07)

### Features

* **date:** `AngularDateHttpInterceptor` provides an interceptor that intercepts HTTP calls and converts from JSON response body : **ISO 8601** date and datetime strings to native Date object.
  > NOTE - Only necessary for projects using dependencies like `ngx-bootstrap/datepicker`, this one does not handle *ISO string dates* unlike **Angular**.<br/>
  > Linked to this open issue : https://github.com/valor-software/ngx-bootstrap/issues/4487
* **date:** add `DateFormatter.ISO_DATE` formatter.
