import React from 'react';

class ArticleTemplate extends React.Component {
    render() {
        let blogPost = this.props.data.contentfulBlogPost;
        return (
            <div>
                <h1>{blogPost.title}</h1>
                <img src={blogPost.coverPhoto ? blogPost.coverPhoto.file.url : ''}  />
                <h3>By {blogPost.author} </h3>
                <h3>{blogPost.date}</h3>
                <p>{blogPost.article.article}</p>
            </div>
        );
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
