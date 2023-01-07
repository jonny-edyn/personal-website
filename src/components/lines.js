import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const LinesPic = () => {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "lines-of-communication.jpeg" }) {
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
  
  export default LinesPic