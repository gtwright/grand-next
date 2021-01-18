import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "apollo/client";
import { useRouter } from "next/router";
import Loading from "components/Loading";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = ({ slug }) => {
  const { data } = useQuery(ViewerQuery);
  const { isFallback } = useRouter();
  let viewer = data?.viewer;
  if (isFallback) return <Loading />;
  return (
    <div>
      hello You're signed in as {viewer ? viewer.name : "FirstName"} and you're{" "}
      {viewer ? viewer.status : "ViewStatus"} on {slug} goto{" "}
      <Link href="/about">
        <a>static</a>
      </Link>{" "}
      page.
    </div>
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.slug,
    },
    revalidate: 1,
  };
}

export default Index;
