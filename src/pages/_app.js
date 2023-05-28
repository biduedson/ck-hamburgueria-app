import Head from "next/head"
import '../styles/global.scss'
import '../styles/navbar.scss'
import '../styles/index.scss'
import '../styles/menu.scss'
import NavBar from "../componets/NavBar";

function Myapp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Head>
                <title>Hamburgueria CK</title>
                <meta name="description" content="CK Hamburgueria" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Myapp;