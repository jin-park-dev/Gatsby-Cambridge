import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


// Use solution from https://github.com/gatsbyjs/gatsby/issues/2293 as string interpolation is not allowed.
const Image = (props) => {
  const data = useStaticQuery(graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)

  return <Img fluid={data.allImageSharp.edges.find((element) => {
    // Match string after final slash
    return (element.node.fluid.src.split('/').pop() === props.imgsrc);
  }).node.fluid} />
}

export default Image
