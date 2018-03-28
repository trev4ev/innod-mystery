module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: process.env.SPACE,
            accessToken: process.env.KEY 
        }
    }
  ],
};
