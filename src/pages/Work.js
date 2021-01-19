import React, { useContext, useState } from 'react';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';

import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { SocketContext } from '../context/SocketContex';

const { Title, Text } = Typography

export const Work = () => {

  useHideMenu(false)
  const [usuario] = useState(getUsuarioStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);
  const history = useHistory();

  const close = () => {
    localStorage.clear()
    history.replace('/ingressar')
  }

  const nextTicket = () => {

    socket.emit('call-next-ticket', usuario, (ticket) => {
      setTicket(ticket)
    });

  }

  if (!usuario.agent && !usuario.work) {
    return <Redirect to='/ingressar' />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agent}</Title>
          <Text >Você está trabalhando no escritório: </Text>
          <Text type="success">{usuario.work}</Text>
        </Col>

        <Col span={4} align="right">
          <Button
            shape="round"
            type="danger"
            onClick={() => close()}
          >
            <CloseCircleOutlined />
            Sair
          </Button>
        </Col>
      </Row>

      <Divider />

      {
        ticket &&
        <Row>
          <Col>
            <Text>Está atendendo o ticket número: </Text>
            <Text
              style={{ fontSize: 30 }}
              type="danger"
            >
              {ticket.number}
            </Text>
          </Col>
        </Row>
      }

      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={nextTicket}
            shape="round"
            type="primary"
          >
            <RightOutlined />
            Próximo
          </Button>
        </Col>
      </Row>
    </>
  );
};
