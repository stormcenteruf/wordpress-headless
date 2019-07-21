import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import '../styles/blog.css'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            date
            excerpt
            slug
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ol className='posts'>
        {data.allWordpressPost.edges.map(edge => {
          return (
            <li className='post' key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt}} />
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage