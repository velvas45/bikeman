import React from 'react'
import {Table, Image} from 'antd'
import {DUMMY_DATA} from '../../data/products/bikeProducts'
import { NavLink } from "react-router-dom"
import {formatRupiah} from '../../helper/formatterRupiah'

export default function Products() {

    const fields = [
        {
          title: 'Nama Sepeda',
          dataIndex: 'nama',
          key: 'nama',
        },
        {
          title: 'Gambar',
          dataIndex: 'imagePath',
          key: 'image',
          render: source => {
              return <Image src={source} width={200} />
          }
        },
        {
          title: 'Merk Sepeda',
          dataIndex: 'merk',
          key: 'merk',
        },
        {
          title: 'Harga Sepeda',
          key: 'harga',
          dataIndex: 'harga',
          render: price => formatRupiah(price, 'Rp. ')
        },
        {
          title: 'Action',
          key: 'id',
          render: (text, record) => (
                  <NavLink to={`/products/${record.id}`}>Detail</NavLink>
          ),
        },
      ];


    return (
        <div className="container">
            <div className="product__title">
                <h3 className="my-3">All Products</h3>
                <Table columns={fields} dataSource={DUMMY_DATA} />
            </div>
        </div>
    )
}
