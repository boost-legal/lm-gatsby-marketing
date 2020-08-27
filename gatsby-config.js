const targetAddress = new URL(`https://www.lawmatics.com`);

module.exports = {
  siteMetadata: {
    title: `Lawmatics`,
    description: `Engage > Convert > Nurture > Grow your law firm with the most powerful Client Intake and Marketing Automation Platform built for the modern practice`,
    author: `@lawmatics`,
    siteWidth: 1280,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lawmatics`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FF8800`,
        display: `minimal-ui`,
        icon: `src/images/lawmatics-mark.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `lm-gatsby-marketing`,
        protocol: `https`,
        hostname: targetAddress.href,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      }
    },
    `gatsby-plugin-react-svg`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
