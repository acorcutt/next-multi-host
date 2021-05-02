import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from 'components/header';
import Footer from 'components/footer';
export default function Slug({ host, time, path }) {
  const router = useRouter();

  // Host available on query from router if blocking or fallback
  const query = router.query;

  // Or params
  console.log(host, time, path, query);

  return (
    <div>
      <Head>
        <title>Next Multi Host Catch All Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header host={host} />
      <h1>
        Catch All With Path - Host: <i>{host}</i>
      </h1>
      <p>
        Path: <i>/{path}</i> {' - '}
        Generated At: <i>{time}</i>
      </p>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  // Available on server render
  console.log('getStaticProps', context);

  // If this route catches path then host is the 1st part
  const host = context.params.path ? context.params.path[0] : null;
  const path = (context.params.path?.slice(1) || []).join('/');
  const time = Date.now();
  return {
    props: {
      host,
      path,
      time,
    },
    //revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
