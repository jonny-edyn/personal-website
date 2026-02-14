import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MarsPic = () => {
  const data = useStaticQuery(graphql`
    query MarsImage {
      file(relativePath: { eq: "mars5.png" }) {
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
      alt="Mars illustration"
    />
  )
}

export default MarsPic
