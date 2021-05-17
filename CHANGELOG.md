# 0.3.2 (2021-05-17)

### Bug Fixes

* **deps-dev:** bump ng-packagr from 4.2.0 to 5.7.1 dependencies, closes ([#31](https://github.com/PACK-Solutions/angular-stdlib/issues/31))
* **deps:** bump yargs-parser from 5.0.0 to 5.0.1 dependencies, closes ([#35](https://github.com/PACK-Solutions/angular-stdlib/issues/35))
* **deps:** bump hosted-git-info from 2.8.5 to 2.8.9 dependencies, closes ([#34](https://github.com/PACK-Solutions/angular-stdlib/issues/34))
* **deps:** bump lodash from 4.17.15 to 4.17.21 dependencies, closes ([#33](https://github.com/PACK-Solutions/angular-stdlib/issues/33))
* **deps:** bump url-parse from 1.4.7 to 1.5.1 dependencies, closes ([#32](https://github.com/PACK-Solutions/angular-stdlib/issues/32))
* **deps:** bump handlebars from 4.5.3 to 4.7.7 dependencies, closes ([#30](https://github.com/PACK-Solutions/angular-stdlib/issues/30))
* **deps:** bump y18n from 3.2.1 to 3.2.2 dependencies, closes ([#29](https://github.com/PACK-Solutions/angular-stdlib/issues/29))
* **deps:** bump elliptic from 6.5.2 to 6.5.4 dependencies, closes ([#28](https://github.com/PACK-Solutions/angular-stdlib/issues/28))
* **deps:** bump http-proxy from 1.18.0 to 1.18.1 dependencies, closes ([#27](https://github.com/PACK-Solutions/angular-stdlib/issues/27))
* **deps:** bump websocket-extensions from 0.1.3 to 0.1.4 dependencies, closes ([#24](https://github.com/PACK-Solutions/angular-stdlib/issues/24))


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
