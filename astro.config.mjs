import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'DM-Safety',
      locales: {
        he: {
          label: 'עברית',
          lang: 'he',
          dir: 'rtl',
          root: true,
        },
      },
      defaultLocale: 'he',
      customCss: ['/src/styles/rtl.css'],
      // פה שאר ההגדרות שלך: social, sidebar וכו'
    }),
  ],
});
