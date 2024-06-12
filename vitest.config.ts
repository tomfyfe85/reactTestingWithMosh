import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // allows global settings - so I can remove imports for vitest in every file
    // "types": ["vitest/globals"] in tsconfig.json/"compilerOptions"
    setupFiles: 'tests/setup.ts'
  }
});  