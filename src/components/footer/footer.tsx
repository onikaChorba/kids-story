import './index.css';
import { icons } from '../../icons';
import { Link } from 'react-router-dom';
import { PhoneFilled } from '@ant-design/icons';
import { Layout, Row, Col, Space, Typography, Button, Flex } from 'antd';

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
    team: [{ label: 'Team', path: '/about' }],
  };

  return (
    <Footer className="footer">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={8} lg={6}>
          <Flex vertical gap="small" className="footer-brand">
            <Link to="/">
              <img className="logo" src={icons.logo} alt="KidsStory logo" />
            </Link>

            <Button
              type="text"
              className="footer-phone"
              icon={<PhoneFilled />}
            >
              +380 96 716 14 48
            </Button>

            <Text className="footer-description">
              Learning through play. Programming, design, and creativity courses
              for children aged 6–14.
            </Text>

            <Flex gap={12}>
              <Button type="text" className="footer-social">
                <img src={icons.vk} alt="VK" />
              </Button>
              <Button type="text" className="footer-social">
                <img src={icons.telegram} alt="Telegram" />
              </Button>
            </Flex>
          </Flex>
        </Col>

        {Object.entries(footerLinks).map(([key, links]) => (
          <Col key={key} xs={12} sm={8} md={4} lg={4}>
            <Title level={5} className="footer-title">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Title>

            <Space vertical size={6}>
              {links.map((link) => (
                <Link key={link.label} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </Space>
          </Col>
        ))}
      </Row>

      <div className="footer-bottom">
        <Text>© {new Date().getFullYear()} KidsStory. All rights reserved.</Text>
      </div>
    </Footer>
  );
};

export { CustomFooter };
