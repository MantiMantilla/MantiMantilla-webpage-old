import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      {/*Google Analytics Scripts (Google Search Console)*/}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PHR3L63QNF"></script>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.js" data-cfasync="false"></script>
      <script>
        {`
        window.addEventListener('load', function(){
          window.cookieconsent.initialise({
          revokeBtn: "<div class='cc-revoke'></div>",
          type: "opt-in",
          position: "top",
          static: true,
          theme: "edgeless",
          palette: {
              popup: {
                  background: "#f7fafc",
                  text: "#3c366b"
                },
              button: {
                  background: "#ed64a6",
                  text: "#fff"
                }
            },
          content: {
              message: "This website uses cookies to ensure you get the best experience on our website.",
              link: "Cookie notice",
              href: "https://2gdpr.com/cookies"
            },
            onInitialise: function(status) {
              if(status == cookieconsent.status.allow) myScripts();
            },
            onStatusChange: function(status) {
              if (this.hasConsented()) myScripts();
            }
          })
        });

        function myScripts() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-PHR3L63QNF');
        }
        `}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.any,
  title: PropTypes.string.isRequired
};

export default SEO;
