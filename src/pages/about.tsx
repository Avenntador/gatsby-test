import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
