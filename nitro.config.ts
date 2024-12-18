// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2024-12-18',
  preset: 'netlify_builder',
  routeRules: {
    '/api/**': { cache: false, swr: false },
  },
});
