import React, {useState,useEffect} from 'react'
import {ProductStore} from '../../context/ProductContext'
import {List, Image, Button, Row,Col} from 'antd'
import Layout from '../layout/Layout'
import {formatRupiah} from '../../helper/formatterRupiah'

export default function CartPage() {
    const [state , dispatch] = ProductStore()
    const [listProduct, setListProduct] = useState(state.items)
    // const listProduct = state.items
    console.log(state.total)
    useEffect(() => {
      setListProduct(state.items)
    },[state])

    const removeHandler = (id) => {
        dispatch({
            type: "remove_cart",
            product : {id}
        })
    }

    return (
        <Layout>
            {state.items.length === 0 ? (
                <div style={{minHeight:'600px'}}>
                    <h3 className="text-center mt-5">Daftar belanja kamu kosong</h3>
                </div>
            ) : (
                <div className="container-fluid" style={{minHeight:'600px'}}>
                    {/* <Table columns={fields} dataSource={listProduct} />
                     */}
                     <List
                            header={<div>Barang yang kamu beli</div>}
                            dataSource={listProduct}
                            itemLayout="vertikal"
                            pagination={{
                                onChange: page => {},
                                pageSize: 5,
                                size: 'small'
                            }}
                            renderItem={item => (
                            <List.Item>
                                <Image src={item.imagePath} width={250} style={{borderRadius:'14px'}}/>
                                <h6>{item.nama}</h6>
                                <h6>Harga: {formatRupiah(item.harga, 'Rp. ')}</h6>
                                <h6>Jumlah Barang: {item.qty}</h6>
                                <Button onClick={() => removeHandler(item.id)}>Hapus</Button>
                                {/* <Divider/> */}
                            </List.Item>
                            )}
                        />
                        <div className="card w-50 mt-5 mx-auto text-center">
                            <div className="card-body">
                            <h5 className="card-title">Total Harga: Rp. {state.total}</h5>
                                <p className="card-text">Jumlah Barang yang dibeli: {state.quantity}</p>
                                <Button style={{background:"#3C5186", color:"#FFF5DE"}}>Beli</Button>
                                {/* <a href="#" className="btn btn-primary">Button</a> */}
                            </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}
