import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Samoyed" src="../images/samoyed.jpg" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
