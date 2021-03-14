import React, { Suspense } from "react";
import moment from "moment";
import { FaCalendar } from "react-icons/fa";
import { FacebookProvider, Comments } from "react-facebook";
import Like from "react-fb-like";

import {
  Container,
  Head,
  Date,
  Article,
  Introduction,
  Content,
  LikeContainer,
  CommentsBox,
} from "./post.styled";
import { Layout } from "../layout";

interface ViewInterface {
  data: {
    title: string;
    id: string;
    content: string;
    introduction: string;
    publicationDate: string;
    strapiID: string;
    image: string;
  };
  location: string;
}

const FbId: string = "764545717819651";

const View: React.FC<ViewInterface> = (p) => (
  <Layout>
    <Container>
      <Head image={p.data.image}>
        <h1>{p.data.title}</h1>
        <Date>
          <FaCalendar />
          {moment(p.data.publicationDate).format("ll")}
        </Date>
      </Head>
      <Article>
        <LikeContainer>
          <Suspense fallback={<div>...loading</div>}>
            <Like appId={FbId} />
          </Suspense>
        </LikeContainer>
        <Introduction>{p.data.introduction}</Introduction>
        <Content>{p.data.content}</Content>
        <CommentsBox>
          <Suspense fallback={<div>...loading</div>}>
            <FacebookProvider appId={FbId}>
              <Comments href={`https://kamilpieczyk.github.io${p.location}`} />
            </FacebookProvider>
          </Suspense>
        </CommentsBox>
      </Article>
    </Container>
  </Layout>
);

export default View;
