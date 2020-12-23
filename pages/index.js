import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Head>
        <title>Home - BoniLab</title>
      </Head>
      <div>        
        <h1>This is Home page</h1>
      </div>
    </Layout>
  );
}
