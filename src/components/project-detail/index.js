import React from 'react'
import { useParams, Link } from "react-router-dom"
import {Image, Divider, Button,InputNumber ,Form, Row, Col,Tabs,List,Descriptions, Card} from 'antd'

import {getProductById,getProductBesidesId} from '../../data/products/bikeProducts'
import Layout from '../layout/Layout'
import {formatRupiah} from '../../helper/formatterRupiah'
import {ProductStore} from '../../context/ProductContext'

const {TabPane} = Tabs
const { Meta } = Card

export default function ProductDetail() {
    const [form] = Form.useForm();
    const {id} = useParams();
    const [, dispatch] = ProductStore()

    const detailProduct = getProductById(id)
    const otherProduct = getProductBesidesId(id)
    const dataDesc = detailProduct.description ?? {}

    const handleSubmit = (values) => {
        const data = detailProduct
        data.qty = values.qty
        dispatch({
            type: 'add_cart',
            product: data
        })

        form.resetFields();
    }

    const descItem = Object.keys(dataDesc)

    
    return (
        <Layout>
            <div className="container-fluid pt-5">
                <Row gutter={[16,24]}>
                    <Col md={24} lg={14}>
                        <Row gutter={[16,18]}>
                            <Col xs={24} lg={12}>
                            <div className="px-3">
                                <Image src={detailProduct.imagePath} alt={detailProduct.nama} height={300} style={{borderRadius:"16px", width:"100%"}} />
                            </div>
                            </Col>
                            <Col xs={24} lg={12}>
                                <h2>
                                {detailProduct.nama}</h2>
                                <div className="mt-3">
                                    <p>
                                        {formatRupiah(detailProduct.harga, 'Rp. ')}
                                    </p>
                                </div>
                                <Divider/>
                                <div>
                                    <span>
                                        Status Barang : {detailProduct.isProductStock ? "Tersedia" : "Tidak Tersedia"}
                                    </span>
                                </div>
                                <Divider/>
                                <div className="mt-5">
                                    <Form name="add-basket" 
                                        form={form}
                                        onFinish={handleSubmit}
                                        initialValues={{ qty: 0}}
                                    >
                                        <Form.Item name="qty" label="Jumlah Barang yang Dibeli">
                                            <InputNumber min={0} />
                                        </Form.Item>
                                        <Divider/>
                                        <Form.Item>
                                            <Button block disabled={!detailProduct.isProductStock} type="primary" htmlType="submit">Tambah Menuju Keranjang</Button>
                                        </Form.Item>
                                    </Form>

                                    <Link to="/home">
                                        <Button block > Melihat Semua Sepeda </Button>
                                    </Link>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={24} lg={10}>
                        <div>
                                <Tabs defaultActiveKey="1" tabPosition="left">
                                    <TabPane tab="Details" key="1">
                                        <Descriptions bordered layout="vertical">
                                            {descItem.map(data => {
                                                return (
                                                    <Descriptions.Item key={data} span={3} label={data}>{dataDesc[data]}</Descriptions.Item>
                                                )
                                            })}
                                        </Descriptions>
                                        {/* <Table columns={fields} dataSource={dataDesc} /> */}
                                    </TabPane>
                                </Tabs>
                            </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col span={24}>
                    <List
                        grid={{ gutter: 16,
                                column: 4
                                }}
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                        onChange: page => {
                        },
                        pageSize: 4,
                        size:'small'
                        }}
                        dataSource={otherProduct}
                        renderItem={item => (
                            <Card
                            style={{margin:'1.25rem',borderRadius: '0.5rem'}}
                            cover={
                            <Image
                                alt={item.nama}
                                src={item.imagePath}
                                // width={200}
                                style={{borderRadius: '0.5rem'}}
                            />
                            
                            }
                            actions={[
                            <Link to={`/products/${item.id}`}>
                                <span>Detail</span>
                            </Link>
                            ]}
                        >
                            <Meta
                            title={item.nama}
                            description={formatRupiah(item.harga, 'Rp. ')}
                            />
                        </Card>
                        )}
                    />
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}
