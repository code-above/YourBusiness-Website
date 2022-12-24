module.exports = {

  distDir: 'build',
    env: {
      PUBLIC_URL: "https://code-above.github.io/my-landing-page",
      assetPrefix: './'
    },
  
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  };


  