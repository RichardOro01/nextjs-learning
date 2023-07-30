import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
  dir: string;
}

const hola: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <Layout>
      <>
        <Head>
          <title>Hola</title>
        </Head>
        <Link href={"/carpeta/adios"}>hola</Link>

        <div
          key={data.id.toString()}
          className="text-start flex flex-col gap-2 items-start justify-start w-full p-8"
        >
          <h1 className="font-medium text-xl w-full">{data.title}</h1>
          <p className="w-full">{data.body}</p>
          <p>{data.dir}</p>
        </div>
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const n: string = (Math.random() * 10).toFixed(0);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${n}`);
    const data = await res.json();
    return { props: { data: { ...data, dir: process.cwd() } } };
  } catch (e) {}
}

export default hola;
