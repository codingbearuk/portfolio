import React from "react";
import { Link } from "gatsby";
import { FaBookReader } from "react-icons/fa";

import { Container, Latest, Post, Button, PostWrapper } from "./blog.styles";
import { PostInterface } from "../../pages/blog";

const ReadBtn: React.FC<{ link: string; center?: boolean }> = ({
  link,
  center,
}) => (
  <span
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: center ? "center" : "flex-end",
    }}
  >
    <a href={link}>
      <Button>
        <FaBookReader /> read this post
      </Button>
    </a>
  </span>
);

interface ViewInterface {
  posts: PostInterface[];
}

const View: React.FC<ViewInterface> = (p) => {
  return (
    <Container>
      <PostWrapper>
        <Latest image={p.posts[0].mainImage.publicURL}>
          <section>
            <h2>{p.posts[0].title}</h2>
            <p>{p.posts[0].introduction}</p>
            <ReadBtn link={`/${p.posts[0].id}`} />
          </section>
        </Latest>
        <div>
          {p.posts.map((post, index) => {
            if (index === 0) return null;
            else
              return (
                <Post key={index + post.strapiId}>
                  <img src={post.mainImage.publicURL} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p>
                    {post.introduction.split(" ").slice(0, 30).join(" ")}...
                  </p>
                  <ReadBtn center link={`/${post.id}`} />
                </Post>
              );
          })}
        </div>
      </PostWrapper>
    </Container>
  );
};

export default View;
