import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const sample_page = data.sample_page.edges[0].node
  return (
    <Layout>
      <SEO
        title={sample_page.seo_title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div
        style={{
          height: `50%`,
          display: `flex`,
          padding: `1rem`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          background: `linear-gradient(-45deg, rgb(29, 64, 86) 0%, rgb(60, 24, 78) 100%)`,
        }}
      >
        <h1
          style={{
            textAlign: `center`,
            color: `white`,
            fontSize: `2.5rem`,
            fontWeight: `100`,
            maxWidth: `960px`,
          }}
        >
          {sample_page.slug}
        </h1>
        <button
          style={{
            padding: `0.75rem`,
            backgroundColor: `white`,
            border: `none`,
            fontSize: `1.5rem`,
            borderRadius: `10px`,
          }}
        >

        </button>
      </div>
      {/* <h1> {page.hero_image}</h1> */}
      <h1 style={{ fontWeight: `100`, textAlign: `center` }}>Our Customers</h1>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >

      </div>
    </Layout>
  )
}
//GraphQl query to fetch example page data
export const query = graphql`
  {
    sample_page: allButterPage(filter: { slug: { eq: "*" } }) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

export default IndexPage
