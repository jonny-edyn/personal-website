// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarsPic from "../components/mars"
import LinesPic from "../components/lines"

type DataProps = {
  site: {
    buildTime: string
  }
}


const Aboutme: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <Layout title="About me" location={location}>
   <MarsPic />
   <h1>A little more..</h1>
    <p>
    I’m Jonny, a London based founder of <a href="https://www.edyn.care">edyn</a> a tech-enabled live-in care company
    helping the elderly live at home as they age - happily and safely. We're building a care company fit for the 21st century which cares for it's carers as much as it does for its clients and fortunate to be backed by leading industry professionals and angel investors. 
    </p>

    <p>
    Previously, I’ve worked for think tanks, in Parliament and banks. 
    </p>

    <p>
    This site is where I'm learning to code, exploring new ideas and sharing what I’ve learned so far. 
    I’m particularly interested in political engagement, producing better technology and music. 
    If there’s anything here you find interesting, please  <a href="https://www.twitter.com/jonny_bottomley">DM</a> / <a href="mailto: bottomley91@gmail.com">email</a> me or lets go for a coffee if you’re in London. 

    </p>
  <br></br>
   <LinesPic />
    <h4>Connect:</h4>
        <ul>
            <li>
            <a href="https://www.twitter.com/jonny_bottomley">Twitter </a>
            </li>
            <li>
            <a href="https://www.instagram.com/jonny_bottomley">Instagram </a> - I’m trying to use this more
            </li>
            <li>
            <a href="https://www.linkedin.com/jonny_bottomley">Linkedin </a>
            </li>
            <li>
            <a href="https://open.spotify.com/user/1147615138?si=38e3c2d6f8ce4865">Spotify</a>
            </li>
        </ul>
    <p>

    </p>

    <h4>Projects:</h4>
    <ul>
        <li>
        <a href="https://www.edyn.care">Edyn</a> (2018 - present)
        </li>
        <li>
        <a href="https://twitter.com/referendum_wtf">Referendum.wtf</a> (2016)
        </li>
        <li>
        <a href="https://github.com/jonny-edyn/Whip">Whip</a> (2015)
        </li>   
    </ul>
    
    <h4>Bucket list:</h4>
    <ul>
        <li>
        Sail the Atlantic
        </li>
        <li>
        Own a house in the Hebrides
        </li>
        <li>
        Surf inside a barrel wave
        </li>   
        <li>
        Play golf at Augusta
        </li> 
        <li>
        Work on a US presidential election campaign 
        </li> 
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="About me" />

export default Aboutme

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
