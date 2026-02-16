import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SubscribeForm from "../components/subscribe-form"

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [selectedTag, setSelectedTag] = React.useState("All")

  const tags = React.useMemo(() => {
    const allTags = posts.flatMap(post => post.frontmatter.tags || [])
    return [
      "All",
      ...Array.from(new Set(allTags)).sort((a, b) => a.localeCompare(b)),
    ]
  }, [posts])

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter(post =>
          (post.frontmatter.tags || []).includes(selectedTag)
        )

  return (
    <Layout location={location} title={siteTitle}>
      <section className="home-feed" aria-label="Blog posts">
        <h1 className="section-title">Blog</h1>
        <p className="page-back-link">
          <Link to="/">← Back to homepage</Link>
        </p>
        <div className="tag-filter-row" aria-label="Filter posts by tag">
          {tags.map(tag => (
            <button
              key={tag}
              type="button"
              className={`tag-filter-button${
                selectedTag === tag ? " is-active" : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <ol className="post-list" style={{ listStyle: `none` }}>
          {filteredPosts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article className="post-list-item">
                  <header>
                    <h3>
                      <Link to={post.fields.slug}>{title}</Link>
                    </h3>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  {post.frontmatter.tags?.length > 0 && (
                    <p className="post-tags">
                      {post.frontmatter.tags.map(tag => (
                        <span
                          className="post-tag"
                          key={`${post.fields.slug}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
        <SubscribeForm />
      </section>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
