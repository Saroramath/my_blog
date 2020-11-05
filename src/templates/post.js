import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
import styles from './post.module.css';
import SEO from '../components/seo';
import kebabCase from 'lodash/kebabCase';
import '../utils/prismjs-theme.css';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Subline from '../components/Subline';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { media } from '../utils/media';/* 








const Post = props => {
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <article className={styles.blogPost}>
        <Link to="/">
          Gatsby Starter - Minimal Blog | Get back to the overview
        </Link>
        <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
        <h1 className={styles.title}>{post.title}</h1>
        <h4 className={styles.date}>{post.date}</h4>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
      </article>
    </Layout>
  );
};

export default Post; */


//new code start here
const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Post = props => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;


  return (
    <Layout>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Helmet title={`${post.title}`} />
        <Header>
          {/* <Link to="/">{config.siteTitle}</Link> */}
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </Subline>
          <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;



// newcode ends here

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
    }
  }
`;