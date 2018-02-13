module.exports = {
  siteMetadata: {
    title: 'SLO Hacks Recruiting',
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
