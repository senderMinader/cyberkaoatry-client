import type { Config } from 'jest';
import { createEsmPreset } from 'jest-preset-angular/presets';

export default {
  ...createEsmPreset(),
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/out/',
    '/build/',
  ],
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
} satisfies Config;