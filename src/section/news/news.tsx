import './news.css';
import { useState, useMemo } from 'react';
import { icons } from '../../icons';
import { Row, Col, Card, Button, Pagination, Typography, Modal } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface INews {
  id: number;
  date: string;
  title: string;
  description: string;
  fullText?: string;
  image?: string;
}

const newsData: INews[] = [
  {
    id: 1,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Full description of the LEGO® Education program. Our students learn to build complex mechanisms and understand the basics of engineering through play.",
    image: icons.news
  },
  {
    id: 2,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Detailed info about robotics...",
    image: icons.news1
  },
  {
    id: 3,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Detailed info about robotics...",
    image: icons.news2
  },
  {
    id: 4,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Detailed info about robotics...",
    image: icons.news3
  },
  {
    id: 5,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Detailed info about robotics...",
    image: icons.news4
  },
  {
    id: 6,
    date: "2021.08.22",
    title: "LEGO® EDUCATION AND ROBOTICS",
    description: "Programs provide knowledge in physics, mathematics, natural sciences, and programming. Developing critical and creative thinking skills...",
    fullText: "Detailed info about robotics...",
    image: icons.news5
  },
];

export const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const pageSize = 6;

  const randomizedNews = useMemo(() => {
    return [...Array(3)].flatMap(() => newsData)
      .map((item, index) => ({ ...item, id: index }))
      .sort(() => Math.random() - 0.5);
  }, []);

  const currentData = randomizedNews.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section className="news-section">
      <Row gutter={[24, 40]}>
        {currentData.map((item) => (
          <Col xs={24} md={12} lg={8} key={item.id}>
            <Card
              hoverable
              className="news-card"
              cover={<img alt="news" src={item.image} className="news-image" />}
            >
              <Text type="secondary" className="news-date">Date of publication: {item.date}</Text>
              <Title level={4} className="news-card-title">{item.title}</Title>
              <Paragraph ellipsis={{ rows: 3 }} className="news-description">
                {item.description}
              </Paragraph>
              <Button
                shape="round"
                size="large"
                className="btn-details"
                onClick={() => setSelectedNews(item)}
              >
                MORE DETAILS
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="pagination-wrapper">
        <Pagination
          current={currentPage}
          total={randomizedNews.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>

      <Modal
        title={null}
        open={!!selectedNews}
        onCancel={() => setSelectedNews(null)}
        footer={null}
        width={700}
        centered
      >
        {selectedNews && (
          <div className="modal-content">
            <img src={selectedNews.image} alt="detail" className="modal-main-img" />
            <Text type="secondary">{selectedNews.date}</Text>
            <Title level={3} style={{ color: '#8E83BC', marginTop: '10px' }}>{selectedNews.title}</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {selectedNews.fullText}
            </Paragraph>
            <Button type="primary" block size="large" onClick={() => setSelectedNews(null)} className="primary-orange-bg">
              CLOSE
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
};