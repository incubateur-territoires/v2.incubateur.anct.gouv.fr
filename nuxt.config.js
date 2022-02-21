const IS_DEV_ENVIRONMENT = process.env.NODE_ENV === 'development';
const isUndefined = (environmentVariable) =>  typeof environmentVariable === 'undefined'

const {
  MATOMO_URL, MATOMO_SITE_ID, MATOMO_CONSENT_REQUIRED, MATOMO_DO_NOT_TRACK
} = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: 'docs'
  },

  telemetry: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Incubateur des Territoires',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@gouvfr/dsfr/dist/dsfr/dsfr.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/node_modules/@gouvfr/dsfr/dist/dsfr/dsfr.nomodule.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    [
      'nuxt-matomo',
      {
        matomoUrl: MATOMO_URL || 'http://localhost:8080',
        siteId: MATOMO_SITE_ID || 1,
        onMetaChange: true,
        consentRequired: isUndefined(MATOMO_CONSENT_REQUIRED) || !!MATOMO_CONSENT_REQUIRED,
        doNotTrack: isUndefined(MATOMO_DO_NOT_TRACK) || !!MATOMO_DO_NOT_TRACK,
        debug: IS_DEV_ENVIRONMENT,
        verbose: IS_DEV_ENVIRONMENT
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
