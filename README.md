# incubateur-territoires

## Deploy to Prod

`make deploy` will generate static files to _/docs_ dir and
do a couple of required things for deployment.
It pushes the `/docs/` directory that is served by Github
and should be pushed for deploying an update.

## Environment variables

| name | description | default value |
| --- | --- | --- |
| MATOMO_URL | Url to matomo installation | `http://localhost:8080` |
| MATOMO_SITE_ID | Matomo site id | `1` |
| MATOMO_CONSENT_REQUIRED | If true, Matomo will not start tracking until the user has given consent | `true` |
| MATOMO_DO_NOT_TRACK | If true, dont track users who have set Mozilla's Do Not Track setting | `true` |

## Matomo configuration

Matomo is configured thanks to (a dedicated nuxt module)[https://github.com/pimlie/nuxt-matomo]. Current configuration is set to behave as:
- User consent and Do not track options are set to `true` by default
- In dev environment, debug and verbose mode are active

__Warning: due to some (caveats[https://github.com/pimlie/nuxt-matomo#caveats]) we use onMetaChange option which requires pages to have a (head)[https://nuxtjs.org/docs/components-glossary/head/] property__


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
