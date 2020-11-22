module.exports = {
  siteMetadata: {
    title: `Alejandro Mantilla`,
    description: `My user website. Some might even call it a CV.`,
    author: `MantiMantilla`,
    url: "https://mantimantilla.github.io",
    siteUrl: "https://mantimantilla.github.io",
    twitterUsername: "@mantimantilla"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MantiMantilla's Blog",
        short_name: `Blog`,
        start_url: `/`,
        scope: "/",
        display: "fullscreen",
        background_color: `#ed64a6`,
        theme_color: `#ed64a6`,
        icon: "src/assets/images/gatsby-icon.png",
        icons: [
          {
            "src":"/images/gatsby-icon.png",
            "sizes":"512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
