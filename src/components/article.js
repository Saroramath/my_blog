import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabcase';

import Subline from './Subline';

import styled from 'styled-components';

import styles from './article.module.css';

/* const Article = ({ title, date, excerpt, slug }) => {
  const firstChar = title.charAt(0);

  return (
    <article className={styles.post}>
      <h2 className={styles.title}>
        <span className={styles.initiale}>{firstChar}</span>
        <Link to={slug}>{title}</Link>
      </h2>
      <h4 className={styles.date}>{date}</h4>
      <p className={styles.excerpt}>{excerpt}</p>
    </article>
  );
};

export default Article;
 */

//new code start here
const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, category }) => {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
        <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

//new code ends here



Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}