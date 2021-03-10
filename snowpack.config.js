// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    docs: '/',
  },
  // routes: [{ match: 'routes', src: '.*', dest: '/docs' }],
  plugins: ['@marlonmarcello/snowpack-plugin-pug'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
