module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-source-google-sheets',
        options: {
            spreadsheetId: '1J9tJQNVYoN64QbZjOMwpSmA62GWOehcUpgVeTDv6jNA',
            worksheetTitle: 'mystery',
            credentials: require("./InnoD\ Mystery-975d82e0c439.json")
        }
    },
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: process.env.SPACE,
            accessToken: process.env.KEY 
        }
    }
  ],
};
