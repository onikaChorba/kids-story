import { Flex, Row, Col, Card, Typography } from "antd";
import {
  CustomerServiceOutlined,
  AppstoreOutlined,
  FlagOutlined,
  BuildOutlined,
  ExperimentOutlined,
  AudioOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { icons } from '../icons';

const { Text, Title } = Typography;

const services = [
  { id: 1, title: "Yoga", img: icons.extra1, icon: CustomerServiceOutlined },
  { id: 2, title: "Montessori group", img: icons.extra2, icon: AppstoreOutlined },
  { id: 3, title: "Golf for toddlers", img: icons.extra3, icon: FlagOutlined },
  { id: 4, title: "Lego building", img: icons.extra4, icon: BuildOutlined },
  { id: 5, title: "Clay modeling", img: icons.extra5, icon: ExperimentOutlined },
  { id: 6, title: "Rhetoric and public speaking", img: icons.extra6, icon: AudioOutlined },
  { id: 7, title: "Rock climbing", img: icons.extra7, icon: RiseOutlined },
];

const ExtraServices = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ marginBottom: '40px' }}>Additional services</Title>

      <Row gutter={[20, 20]}>
        {services.map((service) => {
          const IconComponent = service.icon;

          return (
            <Col xs={24} sm={12} md={8} lg={6} key={service.id}>
              <Card
                hoverable
                bordered={false}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#f1f4ff',
                  height: '100%'
                }}
                cover={
                  <div style={{ overflow: 'hidden', height: '180px' }}>
                    <img
                      alt={service.title}
                      src={service.img}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                      }}
                      className="card-image"
                    />
                  </div>
                }
                bodyStyle={{ padding: 0 }}
              >
                <Flex align="stretch" style={{ minHeight: '70px' }}>
                  <div style={{
                    background: '#ffce00',
                    width: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComponent style={{ fontSize: '22px', color: '#000' }} />
                  </div>
                  <Flex align="center" style={{ padding: '10px 15px' }}>
                    <Text strong style={{ fontSize: '13px', lineHeight: '1.3' }}>
                      {service.title}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ExtraServices;