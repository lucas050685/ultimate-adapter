# Boilerplate Typescript
This is a simple ts boilerplate.

# Features
## Tests
This repository uses jest as default test engine.

To run tests use:
```bash
yarn test
# OR
yarn test:watch
```

## Alias
This repository uses alias path to easily import internal modules and components. For example, to import the function `example` from file `./src/lib/example.ts` you can simply use:
```ts
import { example } from '~/lib/example';
...
```

It means that anything inside the `src` folder can be imported as `~/`;

## Code quality
This project uses ESLint to ensure the good practice of code quality.

To get a better development experience please enable the eslint auto save. It will prettify your code always when a file is saved. So follow these steps:

1 - If you're using VS Code, please install the [ESLint]() plugin;

2 - In VS Code open the file [`~/.config/Code/User/settings.json`](vscode://~/.config/Code/User/settings.json);

3 - Add the following lines:
```json
{ 
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],
  "eslint.enable": true,
  "eslint.format.enable": true
}
```
4 - Restart VS Code if needed.