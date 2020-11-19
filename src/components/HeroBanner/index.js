import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

const HeroBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
          linkTo2
          linkText2
        }
      }
    }
  `);

  const heroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      linkTo2={heroBanner.linkTo2}
      linkText2={heroBanner.linkText2}
    />
  );
};

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo2: PropTypes.string.isRequired,
  linkText2: PropTypes.string.isRequired
};

export default HeroBanner;
