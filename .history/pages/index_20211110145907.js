import Head from 'next/head'
import Image from 'next/image'
import { Result } from 'postcss'
import Header from '../components/Header'
import Nav from '../components/Nav'
// import Results from '../components/Results'
import requests from '../utlis/requests'


export default function Home({ props }) {
  // console.log(props)
  return (<div>
    <Head>
      <title>Hulo 2.0</title>

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1></h1>


    <Header />,
    <Nav />,
    <Result results={'Results'} />
  </div>)
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`).then((res) => res.json());
  // console.log(request)
  return {
    props: {

    }
  };
}
