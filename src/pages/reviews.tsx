import { useState } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Row, Col, Card, Avatar, Typography, Button, Flex, Modal, Breadcrumb, Pagination } from "antd";

const { Text, Paragraph } = Typography;

interface IReview {
  id: number;
  name: string;
  location: string;
  text: string;
  bgColor: string;
  sourceUrl: string;
  isSpecial?: boolean;
}

const reviewsData: IReview[] = [
  { id: 1, name: "Dmitry", location: "Moscow", text: "We take two children, very satisfied with the level and quality of education. If you need just a kindergarten, this is not the place for you. Children know English (pronunciation, grammar, etc.).", bgColor: "#FFF9D6", sourceUrl: "https://google.com" },
  { id: 2, name: "Dmitry", location: "Moscow", text: "The approach to education here is unique. We've seen great progress in social skills and language. Highly recommend for parents who value quality over convenience.", bgColor: "#F0F2FF", sourceUrl: "http://googleusercontent.com" },
  { id: 3, name: "Elena", location: "London", text: "Fantastic environment! The teachers are very attentive. My son loves the creative classes and has started speaking English at home.", bgColor: "#F0F2FF", sourceUrl: "https://facebook.com" },
  { id: 4, name: "Dmitry", location: "Moscow", text: "We take two children, very satisfied with the level and quality of education. Children know English perfectly now.", bgColor: "#FFF9D6", sourceUrl: "https://instagram.com", isSpecial: true },
  { id: 5, name: "Dmitry2", location: "Moscow", text: "We take two children, very satisfied with the level and quality of education. If you need just a kindergarten, this is not the place for you. Children know English (pronunciation, grammar, etc.).", bgColor: "#FFF9D6", sourceUrl: "https://google.com" },
  { id: 6, name: "Dmitr3", location: "Moscow", text: "The approach to education here is unique. We've seen great progress in social skills and language. Highly recommend for parents who value quality over convenience.", bgColor: "#F0F2FF", sourceUrl: "http://googleusercontent.com" },
  { id: 7, name: "Elena", location: "London", text: "Fantastic environment! The teachers are very attentive. My son loves the creative classes and has started speaking English at home.", bgColor: "#F0F2FF", sourceUrl: "https://facebook.com" },
  { id: 8, name: "Dmitry", location: "Moscow", text: "We take two children, very satisfied with the level and quality of education. Children know English perfectly now.", bgColor: "#FFF9D6", sourceUrl: "https://instagram.com", isSpecial: true },
];

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<IReview | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const showReview = (review: IReview) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleSourceClick = (url: string) => {
    window.open(url, "_blank");
  };

  const currentData = reviewsData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Flex vertical style={{ padding: "20px 40px" }} gap={20}>
      <Breadcrumb
        items={[
          { title: <Link to="/"><HomeOutlined /></Link> },
          { title: "Reviews" },
        ]}
      />
      <h2>Reviews</h2>

      <Row gutter={[24, 24]}>
        {currentData.map((review, index) => (
          <Col xs={24} md={12} key={`${review.id}-${index}`}>
            <Card
              bordered={false}
              style={{
                backgroundColor: review.bgColor,
                borderRadius: "24px",
                height: "100%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}
              bodyStyle={{ padding: "32px" }}
            >
              <Flex gap={16} align="center" style={{ marginBottom: "20px" }}>
                <Avatar
                  size={54}
                  icon={<UserOutlined />}
                  style={{ backgroundColor: "#8E83BC" }}
                />
                <Flex vertical>
                  <Text strong style={{ fontSize: "18px" }}>{review.name}</Text>
                  <Text type="secondary" style={{ fontSize: "14px" }}>{review.location}</Text>
                </Flex>
              </Flex>

              <Paragraph
                ellipsis={{ rows: 3 }}
                style={{ fontSize: "15px", marginBottom: "32px", color: "#444" }}
              >
                {review.text}
              </Paragraph>

              <Flex justify="space-between" align="center">
                <Button
                  type="link"
                  onClick={() => showReview(review)}
                  style={{ padding: 0, color: review.isSpecial ? "#E76F51" : "#555", fontWeight: 500 }}
                >
                  Read review
                </Button>
                <Button
                  shape="round"
                  onClick={() => handleSourceClick(review.sourceUrl)}
                  style={{
                    backgroundColor: review.isSpecial ? "#E76F51" : "#fff",
                    color: review.isSpecial ? "#fff" : "#333",
                    border: "none",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "0 25px",
                    textTransform: "uppercase"
                  }}
                >
                  Source
                </Button>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>

      <Flex justify="center" style={{ marginTop: "40px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={reviewsData.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </Flex>

      <Modal
        title={selectedReview ? `Review from ${selectedReview.name}` : "Review"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{selectedReview?.text}</p>
        <Text type="secondary">{selectedReview?.location}</Text>
      </Modal>
    </Flex>
  );
};

export default Reviews;