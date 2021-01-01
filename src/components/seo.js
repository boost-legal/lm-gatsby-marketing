import React from "react"
import PropTypes from "prop-types"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, customTitle }) {
  const { site: { siteMetadata } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || siteMetadata.description

  return (
    <GatsbySeo
      language='en'
      title={title}
      titleTemplate={customTitle || `${siteMetadata.title} - %s`}
      description={metaDescription}
      canonical={siteMetadata.siteUrl}
      twitter={{
        cardType: 'summary',
        handle: siteMetadata.author,
        site: siteMetadata.title,
      }}
      openGraph={{
        title: customTitle || title,
        description: metaDescription,
        type: 'website',
        url: siteMetadata.siteUrl,
        site_name: siteMetadata.title,
      }}
    />
  )
}

SEO.defaultProps = {
  description: '',
  customTitle: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  customTitle: PropTypes.string,
}

export default SEO
