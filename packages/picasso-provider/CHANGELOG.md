# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.2.0](https://github.com/toptal/picasso/compare/@toptal/picasso-provider@0.1.2...@toptal/picasso-provider@0.2.0) (2021-10-13)


### Features

* **Typography:** update line heights and colors to match BASE 2.0 ([#2184](https://github.com/toptal/picasso/issues/2184)) ([aacd827](https://github.com/toptal/picasso/commit/aacd8271dd6c6ef5093fef78d4a419c48b046db5))


### BREAKING CHANGES

* **Typography:** - Changed line-height of small heading and body
- Removed blue color from Typography
- Removed blue color from OverviewBlock





## [0.1.2](https://github.com/toptal/picasso/compare/@toptal/picasso-provider@0.1.1...@toptal/picasso-provider@0.1.2) (2021-09-16)


### Bug Fixes

* remove material-ui/styles from dependencies ([#2165](https://github.com/toptal/picasso/issues/2165)) ([d403a67](https://github.com/toptal/picasso/commit/d403a67d11338bb2fcb1af09dc9766b235e27236))





## [0.1.1](https://github.com/toptal/picasso/compare/@toptal/picasso-provider@0.1.0...@toptal/picasso-provider@0.1.1) (2021-09-08)

**Note:** Version bump only for package @toptal/picasso-provider





# 0.1.0 (2021-06-25)


### Features

* [FX-1956] Add picasso-provider package ([#2104](https://github.com/toptal/picasso/issues/2104)) ([8a766bd](https://github.com/toptal/picasso/commit/8a766bd174e9662e663819a3d772b757a08cc9b4))


### BREAKING CHANGES

* Picasso root component has been moved to the separate package - `@toptal/picasso-provider`. This should help us in managing multiple different versions of Picasso package (`@toptal/picasso`) for sub-applications, while the main host application would be able to share Picasso Context via the locked version of `@toptal/picasso-provider` package.

To migrate to the new version you need to change

```
import Picasso from '@toptal/picasso'
```

to

```
import Picasso from '@toptal/picasso-provider'
```

in your applications.
