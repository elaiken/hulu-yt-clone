import Head from 'next/head'
import Image from 'next/image'
import {Result} from 'postcss'
import Header from '../components/Header'
import Nav from '../components/Nav'


export default function Home() {
    return (<div>
        <Head>
            <title>Hulo 2.0</title>

            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <h1></h1>


        <Header/>,
        <Nav/>, {/* Results */}
        <Result/>
    </div>)
}
