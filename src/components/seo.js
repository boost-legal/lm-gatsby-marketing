import React from "react"
import PropTypes from "prop-types"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, customTitle }) {
  const { site } = useStaticQuery(
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <GatsbySeo
      langauge={lang}
      title={title}
      titleTemplate={customTitle || `${site.siteMetadata.title} - %s`}
      description={metaDescription}
      canonical={site.siteMetadata.siteUrl}
      twitter={{
        cardType: 'summary',
        handle: site.siteMetadata.author,
        site: site.siteMetadata.title,
      }}
      openGraph={{
        title: customTitle || title,
        description: metaDescription,
        type: 'website',
        url: site.siteMetadata.siteUrl,
        site_name: site.siteMetadata.title,
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
  customTitle: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  customTitle: PropTypes.string,
}

export default SEO
