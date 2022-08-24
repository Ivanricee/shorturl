import React from 'react'
import { Helmet } from 'react-helmet'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title> ShortUrl</title>
                <meta name="description" content="Home del template" />
            </Helmet>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
