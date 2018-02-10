module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    adjectives: 'students, mustangs, designers',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'airbnb-browser-shims',
  ],
  polyfill: false,
};
