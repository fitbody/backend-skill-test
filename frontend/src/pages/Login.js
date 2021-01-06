import React from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { loginService } from "../services/auth"
import { useContextInfo } from "../hooks/context"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Login = ({ history }) => {
  const { login, user } = useContextInfo()
  if (user) history.push("/")
  const loginHandle = async ({ email, password }) => {
    loginService({ email, password })
    .then((res) => {
      history.push("/")
      login(email)
    })
    .catch(err => toast.error("Something went wrong. Please verify your login data!"))
  }

  return (
    <>
      <br />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={loginHandle}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <br />
          Or
          <br />
          <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
