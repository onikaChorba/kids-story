import { useRef } from "react";
import { icons } from "../icons";
import { Link } from "react-router-dom";
import { CustomMap } from "../components";
import { Flex, Typography, List, Carousel, Button, Breadcrumb } from "antd";
import { FileTextOutlined, LeftOutlined, RightOutlined, HomeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const documents = [
  { id: 1, title: "Document title for download will be in 2 lines" },
  { id: 2, title: "Document" },
  { id: 3, title: "Document title for download" },
  { id: 4, title: "Document" },
];

const certificates = [
  { id: 1, img: icons.doc },
  { id: 2, img: icons.doc },
  { id: 3, img: icons.doc },
  { id: 4, img: icons.doc },
  { id: 5, img: icons.doc },
];

const DocumentsAndCertificates = () => {
  const carouselRef = useRef<any>(null);

  return (
    <Flex vertical style={{ padding: "20px 40px" }} gap={20}>
      <Breadcrumb
        items={[
          { title: <Link to="/"><HomeOutlined /></Link> },
          { title: "Documents" },
        ]}
      />
      <Flex vertical gap={20} style={{ maxWidth: "600px" }}>
        <h2>
          Documents
        </h2>
        <List
          dataSource={documents}
          renderItem={(item) => (
            <List.Item style={{ border: "none", padding: "12px 0" }}>
              <Flex gap={16} align="start">
                <FileTextOutlined style={{ fontSize: "32px", color: "#F27052" }} />
                <Text style={{ fontSize: "16px", color: "#8E83BC", cursor: "pointer", fontWeight: 500 }}>
                  {item.title}
                </Text>
              </Flex>
            </List.Item>
          )}
        />
      </Flex>

      <Flex vertical gap={20}>
        <h2>
          Our certificates
        </h2>

        <Flex vertical gap={20} style={{ position: "relative", padding: "0 50px" }}>
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current?.prev()}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
          />

          <Carousel
            ref={carouselRef}
            slidesToShow={4}
            dots={false}
            style={{ margin: "20px" }}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {certificates.map((cert) => (
              <div key={cert.id} style={{ padding: "0 10px" }}>
                <div style={{
                  marginLeft: '10px',
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}>
                  <img src={cert.img} alt="Certificate" style={{ width: "100%", display: "block" }} />
                </div>
              </div>
            ))}
          </Carousel>

          <Button
            shape="circle"
            type="primary"
            icon={<RightOutlined />}
            onClick={() => carouselRef.current?.next()}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "#8E83BC"
            }}
          />
        </Flex>
      </Flex>

      <CustomMap />
    </Flex>
  );
};

export default DocumentsAndCertificates;