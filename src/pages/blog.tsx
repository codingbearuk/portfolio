import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/layout";
import BlogComponent from "../components/blog";

export interface PostInterface {
  id: string;
  content: string;
  introduction: string;
  published_at: string;
  strapiId: string;
  title: string;
  mainImage: {
    publicURL: string;
  };
}

interface BlogInterface {
  data: {
    allStrapiPosts: {
      edges: {
        node: PostInterface;
      }[];
    };
  };
}

export const query = graphql`
  query PostsQuery {
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
`;

const Blog: React.FC<BlogInterface> = (p) => {
  const posts: PostInterface[] = p.data.allStrapiPosts.edges.map(
    (el) => el.node
  );

  return (
    <Layout>
      <Helmet>
        <title>Blog - Kamil Pieczyk Portfolio</title>
        <meta
          name="description"
          content="Kamil Pieczyks portfolio blog page."
        />
      </Helmet>
      <BlogComponent posts={posts} />
    </Layout>
  );
};

export default Blog;
