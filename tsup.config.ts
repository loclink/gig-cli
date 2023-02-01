import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/main.ts'],
  format: ['cjs'],
  target: 'node16',
  platform: 'node',
  bundle: true,
  clean: true,
  watch: true,
});
