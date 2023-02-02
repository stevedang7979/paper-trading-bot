import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Prices from "../components/Prices";
import Equity from "../components/Equity";
import OrdersHistory from "../components/OrdersHistory";
function Page() {
  return (
    <>
      <Head>
        <title>Trading BOT</title>
      </Head>
      <Layout>
        <Home />
        <Prices />
        <Equity />
        <OrdersHistory />
      </Layout>
    </>
  );
}

export default Page;
