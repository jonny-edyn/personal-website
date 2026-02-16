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

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <section className="bio" aria-label="Intro">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/jonny-profile-pic.png"
        width={120}
        height={120}
        quality={72}
        placeholder="blurred"
        imgStyle={{ borderRadius: "50%" }}
        alt="Profile picture"
      />
      {author?.name && (
        <div className="bio-copy">
          <div className="blah">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString("Hello! I'm Jonny")
                  .pauseFor(450)
                  .deleteChars(9)
                  .pauseFor(300)
                  .typeString("I hope this finds you well 💯")
                  .start()
              }}
            />
          </div>
          <p>
            These days, I spend most of my time in London building
            {` `}
            <a className="bio-inline-link" href="https://www.edyn.care">
              edyn
            </a>
            . {author?.summary || null}
            {` `}You can learn more{" "}
            <Link className="bio-inline-link" to="/about-me">
              here
            </Link>{" "}
            and see what I am thinking about in the posts below.
          </p>
          <p className="twitter-row">
            <a
              className="button1"
              href={`https://twitter.com/${
                social?.twitter || `jonny_bottomley`
              }`}
            >
              @{social?.twitter || `jonny_bottomley`}
            </a>
          </p>
        </div>
      )}
    </section>
  )
}

export default Bio
