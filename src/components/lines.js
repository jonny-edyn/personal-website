import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LinesPic = () => {
  const data = useStaticQuery(graphql`
    query LinesImage {
      file(relativePath: { eq: "lines-of-communication.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 88
          )
        }
      }
    }
  `)

  const image = getImage(data.file)

  return (
    <GatsbyImage
      className="inline-feature-image"
      image={image}
      alt="Lines of communication artwork"
    />
  )
}

export default LinesPic
