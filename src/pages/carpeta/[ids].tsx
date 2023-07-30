import React from "react";

const Blog = ({ params }: { params: string }) => {
  return <div>{params}</div>;
};

export default Blog;

export async function getStaticProps({ params }: any) {
  console.log(params);
  return { props: { params: params.ids } };
}

// export async function getStaticPaths() {
//   return { paths: [{ params: { ids: "1" } }], fallback: true };
// }

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
