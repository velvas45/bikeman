import React, {useState} from 'react'
import {Card,Row, Col, Form, Input, Button, Alert} from 'antd'
import styles from './auth-ui.module.css'
import Lottie from 'react-lottie'
import Register from '../../data/lottieFiles/register.json'
import { useAuth } from '../../context/AuthContext'
import {Link, useHistory} from "react-router-dom";
import lottieHelper from '../../helper/lottieHelper'

export default function SignIn() {
    const { register } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async(values) => {
        const {username, password} = values

        try {
            setError(null)
            setLoading(true)
            await register(username, password)
            history.push('/')
        } catch(err) {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <div className={`${styles.container} d-flex align-items-center justify-content-center`}>
            <Card className={styles.cardStyle}>
                <Row justify="center" align="middle">
                    <Col sm={24} lg={12}>
                            <div className={styles.boxImg}>
                                <Lottie 
                                options={lottieHelper(Register)}
                                height={400}
                                width={400}
                                />
                            </div>
                    </Col>
                    <Col sm={24} lg={12}>
                        <h2 className='mt-3'>Bikeman</h2>
                        <p>Welcome to Bikeman, Please Register to try our amazing brand</p>

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

                                <Form.Item
                                label="Confirm password"
                                name="confirmPassword"
                                dependencies={['password']}
                                // hasFeedback
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error("Password doesn't match!"));
                                        },
                                    }),
                                ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                {error &&  <Alert message={error} style={{borderRadius: '12px', margin:"1rem 0"}} type="error" />}

                                <Form.Item>
                                    <Button type="primary" block className={styles.btnSubmit} htmlType="submit" loading={loading}>
                                        Submit
                                    </Button>
                                </Form.Item>

                                <p className={styles.notRegister}>Already have an account? <Link to="/">Login here</Link></p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>    
    
    )
}
