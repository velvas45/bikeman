import React, {useState, useEffect} from 'react'
import {Card,Row, Col, Form, Input, Button, Divider, Alert} from 'antd'
import styles from './auth-ui.module.css'
import Lottie from 'react-lottie'
import SignInData from '../../data/lottieFiles/sign-up'
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext'
import {Link, useHistory} from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {googleProvider,facebookProvider, auth} from '../../firebaseAuth/base'
import lottieHelper from '../../helper/lottieHelper'

export default function SignUp() {
    const { login, currentUser } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            googleProvider,facebookProvider
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };

    const handleSubmit = async(values) => {
        const {username, password} = values

        try {
            setError(null)
            setLoading(true)
            await login(username, password)
            history.push('/home')
        } catch(err) {
            setError('Failed to login')
        }
        setLoading(false)
    }

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user => {
            if(currentUser){
                history.push('/home')
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      }, [currentUser]);

    return (
        <div className={`${styles.container} d-flex align-items-center justify-content-center`}>
            <Card className={styles.cardStyle}>
                <Row justify="center" align="middle">
                    <Col flex="auto">
                        <h2 className='mt-3'>Bikeman</h2>
                        <p>Welcome Back, Please login to your account</p>
                        
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                        

                        <Divider plain>Or</Divider>

                        <div className="px-3">
                            <Form
                                name="basic"
                                labelCol={{
                                span: 24,
                                }}
                                wrapperCol={{
                                span: 24,
                                }}
                                onFinish={handleSubmit}
                            >
                                <Form.Item
                                label="Email address"
                                name="username"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your username!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>

                                <Form.Item
                                label="Set password"
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
                                >
                                <Input.Password />
                                </Form.Item>

                                {error &&  <Alert message={error} style={{borderRadius: '12px'}} type="error" />}

                                <Form.Item>
                                    <Button type="primary" block className={`${styles.btnSubmit} my-3`} htmlType="submit" loading={loading}>
                                        Submit
                                    </Button>
                                </Form.Item>

                                <p className={styles.notRegister}>Not registered yet? <Link to="/register">Create an account</Link></p>
                            </Form>
                        
                        </div>
                    </Col>
                    <Col flex="auto">
                            <div className={styles.boxImg}>
                                <Lottie 
                                options={lottieHelper(SignInData)}
                                height={350}
                                width={350}
                                />
                            </div>
                    </Col>
                </Row>
            </Card>
        </div>    
    
    )
}
