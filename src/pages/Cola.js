import React from 'react';
import { Row, Col, List, Typography, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';


const { Title, Text } = Typography

const data = [
  {
    ticketNo: 33,
    work: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    work: 4,
    agent: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    work: 5,
    agent: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    work: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    work: 3,
    agent: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    work: 2,
    agent: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    work: 5,
    agent: 'Carlos Castro'
  },
];

export const Cola = () => {

  useHideMenu(true)

  return (
    <>
      <Title level={1}>Atendimento ao cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
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
                  <Title>No.{item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>Histórico</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket no. ${item.ticketNo}`}
                  description={
                    <>
                      <Text>No escritório: </Text>
                      <Tag color="magenta">{item.ticketNo}</Tag>
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
