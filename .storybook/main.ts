/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
