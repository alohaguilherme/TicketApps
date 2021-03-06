import React, { useState } from 'react';

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};



export const Ingressar = () => {

  const history = useHistory();
  const [usuario] = useState(getUsuarioStorage());
  useHideMenu(false);

  const onFinish = ({ agent, work }) => {

    localStorage.setItem('agent', agent);
    localStorage.setItem('work', work);

    history.push('/work');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (usuario.agent && usuario.work) {
    return <Redirect to='/work' />
  }

  return (
    <>
      <Title level={2}>Entrar</Title>
      <Text level={2}>Informe o nome e a número de escritório do agent.</Text>
      <Divider />

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agente"
          name="agent"
          rules={[{ required: true, message: 'Por favor preencha o nome!' }]}
        >
          <Input />
        </Form.Item >

        <Form.Item
          label="Escritorio"
          name="work"
          rules={[{ required: true, message: 'Informe o escritório!' }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
          >
            <SaveOutlined />
          Entrar
        </Button>
        </Form.Item>
      </Form >
    </>
  );
};
