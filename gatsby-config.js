const siteTitle = "Kamil Pieczyk Portfolio";
const siteDescription =
"This is Kamil Pieczyks portfolio website. Kamil Pieczyk is the java-script full stack developer.";
const siteUrl = "https://kamilpieczyk.github.io/";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords =
  ["portfolio", "typescript", "javascript", "webdeveloper", "react", "web", "development", "next.js", "electron"];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: "Kamil Pieczyk",
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:100,400,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#00D7FF`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",

          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",

          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
