import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { Ingressar } from './Ingressar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Work } from './Work';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider hidden={false}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingressar">Ingressar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">Cola de Tickets</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear">Cola de Tickets</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/ingressar" component={Ingressar} />
              <Route path="/cola" component={Cola} />
              <Route path="/crear" component={CrearTicket} />

              <Route path="/work" component={Work} />

              <Redirect to="/ingressar" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
