import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sarah-und-karl.info',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
