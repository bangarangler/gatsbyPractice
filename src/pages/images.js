import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

const images = ({ data }) => {
  const images = data.allFile.edges
  return (
    <Layout>
      <h1>all the images</h1>
      {images.map(({ node }, index) => {
        return <h3 key={index}>{node.relativePath}</h3>
      })}
    </Layout>
  )
}

export default images

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
