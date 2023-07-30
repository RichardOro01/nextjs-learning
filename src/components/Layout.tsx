import Head from "next/head";
import React from "react";

const Layout: React.FC<{ children?: React.ReactElement }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layout</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
