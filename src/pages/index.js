import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.css';
import Article from '../components/article';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.indexContent}>
      <div className={styles.hero}>
        <h1>Hi.</h1>
        <p>
          I&apos;m Shivam Arora, a Senior UX Developer with zero years of industry
          experience, specializing in developing pancakes with the best UX
          users can get.
        </p>
      </div>
      {data.allMarkdownRemark.edges.map(post => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          slug={post.node.fields.slug}
          key={post.node.fields.slug}
        />
      ))}
    </div>
  </Layout>
);

export default IndexPage;

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;