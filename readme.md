# graphql-test-suite

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/graphql-test-suite.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/graphql-test-suite
[license_badge]: https://img.shields.io/npm/l/graphql-test-suite.svg?style=flat-square
[license_link]: https://github.com/fisker/graphql-test-suite/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/graphql-test-suite.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/graphql-test-suite

> GraphQL Parsing Test Suite.

## Install

```bash
yarn add graphql-test-suite
```

## Usage

```js
import graphqlTestSuite from 'graphql-test-suite'

console.log(graphqlTestSuite)
// =>
// [
//   {
//     name: 'apollo-rs/lexer/err/0001_unterminated_spread_operator_with_one.graphql',
//     error: true,
//     input: '.'
//   },
//   ...,
// ]
```

## Acknowledgments

Currently, test cases comes from [apollo-rs](https://github.com/apollographql/apollo-rs) project.
