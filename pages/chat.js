import React from "react";
import Chat from "../src/components/chat";
import Layout from "../src/components/Layout";


export default function Home({ initialUsers }) {
  return (
    <>
      <Layout title="MyPlace"></Layout>
      <Chat></Chat>
      <div>CHAT</div>
    </>
  );
}
