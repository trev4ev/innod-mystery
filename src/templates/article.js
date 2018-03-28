import React from 'react';
const moment = require('moment');

class ArticleTemplate extends React.Component {
    render() {
        const {
          title,
          author,
          date,
          article: { article },
          coverPhoto: {
            file: { url: coverPhoto }
          }
        } = this.props.data.contentfulBlogPost;

        return (<div>
          <h1>{title}</h1>
          <img src={coverPhoto} />
          <sub>By {author} on {moment(date).format('MM/DD/YYYY')}</sub>
          <p>{article}</p>
        </div>);
    }
}


export default ArticleTemplate;

export const pageQuery = graphql`
    query ArticleQuery($id: String!) {
        contentfulBlogPost(id: {eq: $id}) {
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
`;
