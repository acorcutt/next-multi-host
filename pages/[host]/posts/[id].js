import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Post({ host, id, time }) {
  const router = useRouter();

  // Host available on query from router if blocking or fallback
  const query = router.query;

  // Or params
  console.log(host, id, time, query);

  return (
    <div>
      <Head>
        <title>Next Multi Host Posts Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header host={host} />
      <h1>Posts - Host: {host}</h1>
      <p>
        <b>Generated At:</b>
        <i>{time}</i>
        {' - '}
        <b>Post:</b>
        <i>{id}</i>
      </p>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  // Available on server render
  console.log('getStaticProps', context);

  const host = context.params.host;
  const id = context.params.id;

  const time = Date.now();

  return {
    props: {
      host,
      id,
      time,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: 'a', host: 'localhost' } },
      { params: { id: 'a', host: 'next-multi-host.vercel.app' } },
      { params: { id: 'a', host: 'next-multi-host-acorcutt.vercel.app' } },
    ],
    fallback: 'blocking',
  };
}
