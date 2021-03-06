import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from 'components/header';
import Footer from 'components/footer';
export default function Home({ host, id, time }) {
  const router = useRouter();

  // Host available on query from router if blocking or fallback
  const query = router.query;

  // Or params
  console.log(host, id, time, query);

  return (
    <div>
      <Head>
        <title>Next Multi Host Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header host={host} />
      <h1>Home - Host: {host}</h1>
      <p>
        <b>Generated At:</b>
        <i>{time}</i>
      </p>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  // Available on server render
  console.log('getStaticProps', context);

  const host = context.params.host;

  const time = Date.now();

  return {
    props: {
      host,
      time,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
