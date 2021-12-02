import React, { FC } from "react";
import Head from "next/head";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  image?: any;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title} - Ruth Ikegah </title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={`Ruth Ikegah ${title}`} />
      </Head>

      {children}
    </>
  );
};

export default Layout;
