import React from "react";

import View from "./blog.view";
import { PostInterface } from "../../pages/blog";

interface BlogInterface {
  posts: PostInterface[];
}

const Blog: React.FC<BlogInterface> = (p) => {
  return View({
    posts: p.posts,
  });
};

export default Blog;
