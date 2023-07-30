import Layout from "@/components/Layout";
import React from "react";
import fs from "fs";
import { getAllPostIds, getPostData } from "../../../lib/posts";

const Post: React.FC<{ postData: { id: string; title: string } }> = ({
  postData,
}) => {
  return (
    <Layout>
      <div>{postData.title}</div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
