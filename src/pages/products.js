import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const products = ({ data }) => {
  return (
    <Layout>
      <Link to="/">Go back to home page</Link>
      <h1>Our Products</h1>
      {data.products.edges.map(({ node: product }) => {
        return (
          <div key={product.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Img fixed={product.image.fixed} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {product.title}{" "}
              <span style={{ color: "grey", marginLeft: "2rem" }}>
                ${product.price}
              </span>
            </h3>
            {/*<p>{product.description.description}</p>*/}
            <Link to={`/products/${product.title}`}>
              {" "}
              <h2>Details</h2>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default products
