/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"


const Birds = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div>
      <StaticImage
        className="birds"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/birds.jpeg"
        width={750}
        quality={98}
        alt="Profile picture"
      />
      <br></br>
      </div>
  )
}

export default Birds
