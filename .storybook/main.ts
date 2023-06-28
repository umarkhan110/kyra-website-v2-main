module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  "staticDirs": [
    { from: '../src/assets/fonts', to: '/assets/fonts' },
    { from: '../public', to: '/public' },
  ],
};