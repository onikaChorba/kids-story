import './index.css'
import { icons } from '../../icons';
import { Link } from "react-router-dom";
import { PhoneFilled, } from "@ant-design/icons";
import { Layout, Row, Col, Space, Typography, Button, Flex } from "antd";

const { Footer } = Layout;
const { Title, Text } = Typography;

const CustomFooter = () => {
  const footerLinks = {
    about: [
      { label: 'About Centre', path: '/courses' },
      { label: 'Documents', path: '/contacts' },
      { label: 'For Parents', path: '/about' },
      { label: 'Nutrition', path: '/about' },
      { label: 'News', path: '/about' },
      { label: '3D Tour', path: '/about' },
      { label: 'Reviews', path: '/about' },
    ],
    schedule: [
      { label: 'Main Schedule', path: '/about' },
      { label: 'Additional Services', path: '/about' },
    ],
    program: [
      { label: 'Group 2-3 years', path: '/about' },
      { label: 'Group 3-5 years', path: '/about' },
      { label: 'Group 5-7 years', path: '/about' },
    ],
    photos: [{ label: 'Photo', path: '/about' }],
    team: [{ label: 'Photo', path: '/about' }],
  };

  return (
    <Footer className="footer">
      <Row gutter={[40, 32]} justify="start" wrap={false} style={{ flexWrap: "nowrap" }}>
        <Col style={{ flex: "none" }}>
          <Flex vertical align="flex-start" gap="small">
            <Title level={3} style={{ marginBottom: 16 }}>
              <Link to="/"><img className="logo" src={icons.logo} /></Link>
            </Title>

            <Button
              type="text"
              className='primary-grey-color'
              icon={<PhoneFilled className='primary-orange-color' />}
            >
              +380967161448
            </Button>

            <Text>
              Learning through play. Programming, design, and creativity courses for children aged 6-14.
            </Text>

            <Flex>
              <Button type="text" icon={<img src={icons.vk} />} />
              <Button type="text" icon={<img src={icons.telegram} />} />
            </Flex>
          </Flex>
        </Col>

        {Object.entries(footerLinks).map(([key, links]) => (
          <Col key={key} xs={24} sm={12} md={6} lg={4}>
            <Title level={4} className="title">{key.charAt(0).toUpperCase() + key.slice(1)}</Title>
            <Space vertical size={8}>
              {links.map(link => (
                <Link key={link.label} to={link.path} className="link">{link.label}</Link>
              ))}
            </Space>
          </Col>
        ))}
      </Row>

      <div className='footer-bottom'>
        <Text>© {new Date().getFullYear()} KidsStory. All rights reserved.</Text>
      </div>
    </Footer>
  );
};

export { CustomFooter };