import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../../lib/posts";

const adios: React.FC<{
  allPostsData: { date: string; id: string; title: string }[];
}> = ({ allPostsData }) => {
  return (
    <Layout>
      <>
        <Link href="../hola">adios</Link>
        {allPostsData.map((data) => (
          <div key={data.id}>{data.title}</div>
        ))}
      </>
    </Layout>
  );
};

export default adios;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
