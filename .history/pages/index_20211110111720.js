import Head from 'next/head'
import Image from 'next/image'
import {Result} from 'postcss'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'


export default function Home(props) {
    return (<div>
        <Head>
            <title>Hulo 2.0</title>

            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <h1></h1>


        <Header/>,
        <Nav/>,
        <Result results={results}/>
    </div>)
}

export async function getServerSideProps(content) {
    const genre = content.query.genre

    const request = await fetch(`http:// api.themoviedb.org/3${
        request[genre] ?. url || requests.fetchTrending.url
    } `).then((res) => res.json());

    return {
        props: {
            results: requests.results
        }
    };
}
