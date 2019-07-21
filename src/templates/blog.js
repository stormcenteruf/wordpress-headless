import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query(
    $id: String!
  ) {
    wordpressPost (
      id: {
        eq: $id
      }
    ) {
      content
      title
      date
    }
  }
`

const Blog = (props) => {

  return (
    <Layout>
      <Head title={props.data.wordpressPost.title} />
      <h1>{props.data.wordpressPost.title}</h1>
      <p>{props.data.wordpressPost.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content}}></div>
    </Layout>
  )
}

export default Blog