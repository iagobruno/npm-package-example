# npm-package-example

Um exemplo de como criar um bom pacote para o NPM.

> Transform a string between camelCase, PascalCase, Capital Case, snake_case, kebab-case and CONSTANT_CASE.

[![npm](https://img.shields.io/npm/v/npm-package-example)](https://www.npmjs.com/package/npm-package-example)
[![npm](https://img.shields.io/npm/dt/npm-package-example)](https://www.npmjs.com/package/npm-package-example)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/npm-package-example)
![Module system](https://img.shields.io/badge/module%20system-ESM%2C%20CJS%2C%20UMD-brightgreen)
![npm type definitions](https://img.shields.io/badge/types-TypeScript-blue)

[![.github/workflows/tests.yml](https://github.com/iagobruno/npm-package-example/actions/workflows/tests.yml/badge.svg)](https://github.com/iagobruno/npm-package-example/actions/workflows/tests.yml)
![Coveralls](https://img.shields.io/coveralls/github/iagobruno/npm-package-example)
![Code quality](https://img.shields.io/scrutinizer/quality/g/iagobruno/npm-package-example)

## Objetivos

- [x] Permitir tree-shaking
- [x] Usar TypeScript
- [x] Usar o eslint e o prettier
- [x] Testar o pacote usando o Jest
- Publicar no NPM
- Automatização
  - [x] Executar os testes em pull-requests
  - Publicar no NPM automaticamente quando criar uma tag no git
  - [x] Gerar uma release no github automaticamente com o changelog
  - Publicar uma nova versão da documentação quando modificar a pasta "docs"
- [x] Escrever um bom README
- Criar um site de documentação

## Installation

```
npm install npm-package-example --save
```

```
yarn add npm-package-example
```

## Usage

```ts
import kebabCase from 'npm-package-example/kebabCase'

kebabCase('Hello world') // => hello-world
```

It's also possible to use this package directly in the browser without any build tools.

```html
<script type="module">
  import { constantCase } from 'https://unpkg.com/npm-package-example?module'

  constantCase('hello-world') // => HELLO_WORLD
</script>
```

## Core

- `camelCase('hello world') // => 'helloWorld'`
- `pascalCase('hello world') // => 'HelloWorld'`
- `kebabCase('hello world') // => 'hello-world'`
- `snakeCase('hello world') // => 'hello_world'`
- `dotCase('hello world') // => 'hello.world'`
- `capitalCase('hello world') // => 'Hello World'`
- `constantCase('hello world') // => 'HELLO_WORLD'`

## Documentation

See https://link-da-documentação.com

## Development

Clone locally:

```
git clone https://github.com/iagobruno/npm-package-example
cd npm-package-example
yarn install
code .
```

### Running Tests

To run tests, run the command below.

```
yarn run test --watch
```

### Building

Create an optimized and minified version of the package in CJS, ESM and UMD ready to be distributed.

```
yarn run build
```

### Release a new version

```
yarn run release
```

This script uses [release-it](https://github.com/webpro/release-it) to:

- Prevent new releases if any tests fail.
- Bump package.json version.
- Create git tag.
- Push to remote.
- Post new release in GitHub with changelog.
- Publish a new version in npm registry.

## Contributing

Contributions are always welcome!

<!-- - ❤️ Sponsor this project. -->

- ⭐ [Star this project on GitHub](https://github.com/iagobruno/npm-package-example/stargazers).
- 🐞 [Submit bugs and feature requests](https://github.com/iagobruno/npm-package-example/issues/new). (Please first search for existing and closed issues)
- ❔ Engage and help each other in the [Discussions tab](https://github.com/iagobruno/npm-package-example/discussions).
- 🔍 [Review the source code changes](https://github.com/iagobruno/npm-package-example/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc).
- 👨‍💻 You can submit any ideas as pull requests.

## License

MIT
