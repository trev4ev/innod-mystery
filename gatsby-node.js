/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const moment = require('moment');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const {createPage} = boundActionCreators;
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              author
              date
              coverPhoto {
                file {
                  url
                  fileName
                  contentType
                }
              }
              article {
                article
              }
            }
          }
        }
      }
      `).then((queryResult) => {
          let blogPosts = queryResult.data.allContentfulBlogPost.edges;
          blogPosts.forEach(({node:post}, index) => {
              createPage({
                  path: `/article/${index}`,
                  component: path.resolve('src/templates/article.js'),
                  context: {id: post.id}
              });
          });
      });
};
