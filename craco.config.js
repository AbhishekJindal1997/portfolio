const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#40a9ff",
              "@border-color-base": "#120338",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
