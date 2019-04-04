import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getLady = graphql`
  {
    file(relativePath: { eq: "katarzyna-grabowska-794471-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

//const getLady = graphql`
//{
//file(relativePath: { eq: "katarzyna-grabowska-794471-unsplash.jpg" }) {
//childImageSharp {
//fixed(width: 150, height: 300) {
//...GatsbyImageSharpFixed_tracedSVG
//}
//}
//}
//}
//`
export default function lady() {
  return (
    <StaticQuery
      query={getLady}
      render={data => {
        console.log(data)
        return (
          <div style={{ maxWidth: "300px" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )
      }}
    />
  )
}
