import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kstrohma.github.io',
  base: '/wedding',
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
