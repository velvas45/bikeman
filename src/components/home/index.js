import React from 'react'
import {useAuth} from './../../context/AuthContext'
import Layout from '../layout/Layout'
import Hero from './Hero'
import Products from './Products'

export default function HomePage() {
    return (
        <Layout>
            <Hero/>
            <Products/>
        </Layout>
    )
}
