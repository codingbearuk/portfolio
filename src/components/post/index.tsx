import { PageProps } from "gatsby";
import React from "react";

import View from "./post.view";

interface PostInterface extends PageProps {
  pageContext: {
    title: string;
    id: string;
    content: string;
    introduction: string;
    publicationDate: string;
    strapiID: string;
    image: string;
  };
}

const Post: React.FC<PostInterface> = (p) => {
  console.log(`https://kamilpieczyk.github.io${p.uri}`);
  return View({
    data: p.pageContext,
    location: p.uri,
  });
};

export default Post;
