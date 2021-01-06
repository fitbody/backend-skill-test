import { Layout, Menu, Row, Col } from "antd"
import { Link } from "react-router-dom"
import React from "react"
import { logoutService } from "../services/auth"
import { useContextInfo } from "../hooks/context"
const { Header, Content, Footer } = Layout

const AppLayout = ({ children }) => {
  const { user, logout } = useContextInfo()
  const handleLogout = () => {
    logoutService()
    logout()
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          {!user ? (
            <>
              <Menu.Item key="2">
                <Link to="/signup">Signup</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item onClick={handleLogout} key="4">
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Row>
          <Col
            xs={{ span: 24 }}
            s={{ span: 22, offset: 1 }}
            lg={{ span: 22, offset: 1 }}
          >
            <div className="footer__container">
              <p>Developed by Mauricio Figueroa</p>
              <p>mfigueroadev © Copyright 2020</p>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default AppLayout
