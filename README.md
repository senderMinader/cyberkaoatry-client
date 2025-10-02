# cyberkaoatry-client
Simple web app for managing cybercafé and coworking space
# Cyberkaoatry

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Here to full setup a proper running best practice angular project
- Create the project with angular CLI: 
```bash
ng new <project name>
```

- Add angular Material : 
```bash
ng add @angular/material
```
- Add angular ESLINT : 
```bash
ng add angular-eslint
```

- [OPTIONAL - REQUIRED IF USING COMMIT-LINT] Add husky for some pre-commit hooks
```bash
npm i -D husky`
npx husky init
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```
Don't forget to delete ng test from .husky/pre-commit if you don't want to run test when commiting


- [OPTIONAL] Add Commit-lint if you want to follow conventionnal commit format
```bash
npm install --save-dev @commitlint/config-angular @commitlint/cli
echo "export default {extends: ['@commitlint/config-angular']};" > commitlint.config.js  # create commitlint config file 
```

- [OPTIONAL] Add prettier
```bash
npm install --save-dev --save-exact prettier
```

Add Eslint prettier to avoid conflict with eslint rules
```bash
npm i -D eslint-config-prettier
```

Add eslint-config-prettier to your eslintrc or eslint.config.js
```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

Add these lines to your package.json scripts: 

```json
"format": "prettier --write \"src/**/*.{ts,html,css}\""
```
Then add `npm run format` inside your `.husky/pre-commit` file

