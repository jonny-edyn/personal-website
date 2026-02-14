import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const YearReviewImage = () => {
  const data = useStaticQuery(graphql`
    query YearReviewImage {
      file(relativePath: { eq: "2023-review.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
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
    <GatsbyImage
      className="inline-feature-image"
      image={image}
      alt="2023 year in review"
    />
  )
}

export default YearReviewImage
