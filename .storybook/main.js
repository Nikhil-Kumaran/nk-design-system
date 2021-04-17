module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
    "storybook-addon-designs",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Return the altered config
    return config;
  },
};
