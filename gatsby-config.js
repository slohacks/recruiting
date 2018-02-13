module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    adjectives: 'mustangs, students, creatives, innovators, hackers',
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
  pathPrefix: '/recruiting',
  polyfill: false,
};
