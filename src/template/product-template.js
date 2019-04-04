import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function({ data }) {
  const { title, price } = data.contentfulProduct
  const { description } = data.contentfulProduct.description
  const { fluid } = data.contentfulProduct.image
  return (
    <Layout>
      <h1 style={{ color: "red" }}>Single Product Template</h1>
      <Img fluid={fluid} />
      <h2>
        {title}{" "}
        <span style={{ marginLeft: "2rem", color: "grey" }}>${price}</span>
      </h2>
      <p>{description}</p>
      <Link to="/products/">Back to Products</Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
