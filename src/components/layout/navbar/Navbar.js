import React from 'react'
import { Badge } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import Logo from '../../../assets/images/logo.png'
import {useAuth} from '../../../context/AuthContext'
import {Dropdown, Navbar, Container} from 'react-bootstrap'
import styles from './navbar.module.css'
import {ProductStore} from '../../../context/ProductContext'
import {NavLink} from 'react-router-dom'


export default function NavbarLayout() {
    const {currentUser, logout} = useAuth()
    const [state] = ProductStore()

    async function handleLogout() {
        try{
            await logout()
        }catch(err){
            return
        }
    }
    return (
        <>
            <Navbar expand="lg" style={{background:'#9B72AA'}}>
                <Container fluid style={{justifyContent:'space-between'}}>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img src={Logo} alt="title" width="30" height="24" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <div className="d-flex flex-sm-row align-items-center justify-content-around">
                            {/* badge cart */}
                            <NavLink to="/cart">
                                <Badge count={state?.quantity} size="small">
                                    <ShoppingCartOutlined style={{fontSize:'1.5rem'}} />
                                </Badge>      
                            </NavLink>

                            <Dropdown>
                                <Dropdown.Toggle variant="primary" className={styles.dropdownBtn} id="dropdown-basic" style={{color:'#FFF5DE'}}>
                                    Welcome, {currentUser.email}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
