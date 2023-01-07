/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"


const Bio = () => {
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
    <div className="bio">
      <StaticImage
        className="bio-avatar spinhov"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/jonny-profile-pic.png"
        width={125}
        height={125}
        quality={98}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            <div className="blah">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString("Hello! I'm Jonny")
                    .pauseFor(500)
                    .deleteChars(9)
                    .pauseFor(500)
                    .typeString("I hope you enjoy reading this")
                    .start()
                }}
              />
            </div>
              These days, I spend most of my days in London working on{` `}
            <a href="https://www.edyn.care">
              edyn
            </a>. {` `}
            {author?.summary || null}
            {` `} You can find out a little more <Link to="/about-me">here</Link> and see a list of projects I've worked on.
            <br></br>
            <button className="button1">
              {" "}
              I'm on twitter{" "}
              <a href={`https://twitter.com/${social?.twitter || ``}`}>
                 @jonny_bottomley
              </a>
            </button>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
