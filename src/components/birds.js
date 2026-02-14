import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Birds = () => {
  const data = useStaticQuery(graphql`
    query BirdsImage {
      file(relativePath: { eq: "birds.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 70
          )
        }
      }
    }
  `)

  const image = getImage(data.file)

  return (
    <figure className="hero-image-wrap">
      <GatsbyImage className="hero-image" image={image} alt="Birds in flight" />
    </figure>
  )
}

export default Birds
