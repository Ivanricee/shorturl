import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../components/Layout'

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
