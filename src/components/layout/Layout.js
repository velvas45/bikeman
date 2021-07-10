import React from 'react'
import { Layout} from 'antd';
import Navbar from './navbar/Navbar'

const {Footer} = Layout


export default function Layouts({children}) {
    return (
        <Layout className="layout">
            <Navbar />
            {children}
            <Footer style={{ textAlign: 'center', background: '#9B72AA', marginTop:'24px' }}>Bikeman, ©2021 Created by Helmi Agustiawan</Footer>
        </Layout>
    )
}
