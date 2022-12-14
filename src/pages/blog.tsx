import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

type DataProps = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const BlogPage = ({ data: { allFile } }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
