import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MarsPic = () => {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "2023-review.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.file.childImageSharp.fluid} />
  }
  
  export default MarsPic