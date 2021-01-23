import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, List, Typography, Card, Tag, Divider } from 'antd';

import { SocketContext } from '../context/SocketContex';
import { useHideMenu } from '../hooks/useHideMenu';
import { getLast } from '../helpers/getLastTickets';


const { Title, Text } = Typography


export const Cola = () => {

  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    getLast().then(setTickets);
  }, [])

  useEffect(() => {

    socket.on('ticket-assigned', (assigned) => {
      setTickets(assigned);
    });

    return () => {
      socket.off('ticket-assigned');
    }

  }, [socket])

  return (
    <>
      <Title level={1}>Atendimento ao cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Escritório: {item.work}</Tag>
                  ]
                  }
                >
                  <Title>No.{item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>Histórico</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket no. ${item.number}`}
                  description={
                    <>
                      <Text>No escritório: </Text>
                      <Tag color="magenta">{item.work}</Tag>
                      <Text>agent: </Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />



        </Col>
      </Row>
    </>
  );
};
