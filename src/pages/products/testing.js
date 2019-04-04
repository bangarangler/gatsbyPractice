import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
const testing = props => {
  return (
    <Layout>
      <h1>hello from testing</h1>
      <Link to="/">back to home</Link>
    </Layout>
  )
}

export default testing
