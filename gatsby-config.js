const targetAddress = new URL('https://www.lawmatics.com');

module.exports = {
  siteMetadata: {
    title: 'Lawmatics',
    description: 'Engage > Convert > Nurture > Grow your law firm with the most'
      + 'powerful Client Intake and Marketing Automation Platform built for the modern practice',
    author: '@lawmatics',
    siteWidth: 1320,
    siteUrl: targetAddress.href,
  },
  plugins: [
    'gatsby-plugin-next-seo',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        once: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        stages: ['develop'],
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/sal.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lawmatics',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FF8800',
        display: 'minimal-ui',
        icon: 'src/assets/images/lawmatics-mark.png',
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'lm-gatsby-marketing',
        protocol: 'https',
        hostname: targetAddress.href,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
