import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    info: site {
      siteMetadata {
        title
        info
        description
        author
      }
    }
  }
`
const info = props => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const siteData = data.info.siteMetadata
        const { title, info, description, author } = siteData
        return (
          <div>
            <h2>title:{title}</h2>
            <h2>info:{info}</h2>
            <p>description:{description}</p>
            <h2>author:{author}</h2>
          </div>
        )
      }}
    />
  )
}

export default info
