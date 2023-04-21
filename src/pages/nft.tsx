import React from "react";
import Head from "next/head";
import Header from "../components/Header"
type Props = {};

const NFT = (props: Props) => {
  return (
    <>
      <Head>
        <title>We&apos;re on a Mission</title>
        <meta
          name="description"
          content="Notification infrastructure platform for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="bg-[#0E0E0E] text-white antialiased h-screen">
        <Header/>
        <h1 className="text-5xl lg:text-7xl font-extrabold lg:my-12 p-4 pt-12">
          NFT
        </h1>
      </div>
    </>
  );
};

export default NFT;
