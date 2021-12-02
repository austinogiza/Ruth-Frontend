import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/container/Layout";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <>
      <Layout>
        {route.pathname === "/404" ? null : (
          <>
            <Navbar />
          </>
        )}
        <Component {...pageProps} />

        {route.pathname === "/404" || route.pathname === "/contact" ? null : (
          <>
            <Message />
            <Footer />
          </>
        )}
      </Layout>
    </>
  );
}

export default MyApp;
