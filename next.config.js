module.exports = {

  distDir: 'build',
    env: {
      PUBLIC_URL: "https://code-above.github.io/my-landing-page",
      assetPrefix: './'
    },
    images: {
      loader: 'default',
      path: '',
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  };
  // module.exports = {
  //   images: {
  //     loader: 'default',
  //     path: '',
  //   },
  // };

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([
//   [optimizedImages, {
//     /* config for next-optimize
//     d-images */
//     path:'/',
//   }],

  // your other plugins here

// ]);
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

// module.exports = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
// };


// module.exports = {
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };