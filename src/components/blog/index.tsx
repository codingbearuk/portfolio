import React from "react";

import View from "./blog.view";
import { PostInterface } from "../../pages/blog";

interface BlogInterface {
  posts: PostInterface[];
}

const Blog: React.FC<BlogInterface> = (p) => {
  const sortedPost: PostInterface[] = [...p.posts].sort((a, b) => {
    const dateA: Date = new Date(a.published_at);
    const dateB: Date = new Date(b.published_at);
    if (dateA > dateB) return -1;
    else return 1;
  });
  return View({
    posts: sortedPost,
  });
};

export default Blog;
