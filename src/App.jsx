// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./index.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  UserOutlined,
  CalculatorOutlined, 
  UploadOutlined
} from "@ant-design/icons";
import ChessIcon from './icons/ChessIcon'
import { Layout, Menu, Image, Button, theme, Avatar, Typography, Space  } from "antd";
import Calculator from './component/Calculator/Calculator'
import ChessBoard from './component/Board/ChessBoard'
import Calendars from "./component/Calendar/Calendar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UnitConverter from "./component/UnitConvert/UnitConvert";

const { Header, Sider, Content, Footer } = Layout;
const {Text} = Typography;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
          <Header style={{ display: "flex", alignItems: "center",background: "white" }}>
            <div className="demo-logo" >
            <Image width={collapsed ? 30: 40 } preview={false} src={'/KITS.png'}></Image>
            </div>
          </Header>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <ChessIcon size={16} />,
                  label: <Link to="/ChessBoard">ChessBoard</Link>
                },
                {
                  key: "2",
                  icon: <CalculatorOutlined />,
                  label: <Link to="/Calculator">Calculator</Link>  
                },
                {
                  key: "3",
                  icon: <CalendarOutlined />,
                  label: <Link to="/Calendars">Calendars</Link>
                },
                {
                  key: "4",
                  icon: <UploadOutlined/>,
                  label: <Link to="/UniConvert">UniConvert</Link>
                }
              ]}
            />
          </Sider>
          <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex',
                                     flexDirection: 'row',justifyContent: 'space-between' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64
              }}
            />
            <Space style={{marginRight: 20}}>
            <Avatar size={25} icon={<UserOutlined />} />
            <Text>Nguyen Manh Cuong</Text>
            </Space>
          
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 550,
              background: colorBgContainer
            }}
          >
            <Routes>
              <Route path="/ChessBoard" element={<ChessBoard/>}></Route>
              <Route path="/Calculator" element={<Calculator/>}></Route>
              <Route path="/Calendars" element={<Calendars/>}></Route>
              <Route path="/UniConvert" element={<UnitConverter/>}></Route>
            </Routes>
          </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer style={{ textAlign: "center" }}>
            Copyright by Nguyen Manh Cuong
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
