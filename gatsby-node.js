const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/post/index.tsx`)
  const result = await graphql(`
    query {
      allStrapiPosts {
        edges {
          node {
            id
            content
            introduction
            published_at
            strapiId
            title
            mainImage {
              publicURL
            }
          }
        }
      }
    }
  `)
  result.data.allStrapiPosts.edges.forEach(edge => {
    createPage({
      path: `${edge.node.id}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.id,
        content: edge.node.content,
        introduction: edge.node.introduction,
        publicationDate: edge.node.published_at,
        strapiID: edge.node.strapiId,
        image: edge.node.mainImage.publicURL
      },
    })
  })
}
