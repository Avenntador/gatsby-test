import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
      };
      id: string;
      excerpt: string;
    }[];
  };
};

const BlogPage = ({ data: { allMdx } }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
