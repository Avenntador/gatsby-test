import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
  children?: React.ReactNode;
};

const BlogPost = ({ data, children }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataProps>) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
