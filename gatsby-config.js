module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
    'airbnb-browser-shims',
  ],
  polyfill: false,
};
