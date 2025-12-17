import "./index.css"
import { Row, Col, Flex } from "antd";
import {
  ClockCircleOutlined, GroupOutlined, HomeOutlined, VideoCameraOutlined,
  MessageOutlined, UserOutlined, MedicineBoxOutlined, ShopOutlined
} from "@ant-design/icons";

const About = () => {
  const aboutData = [
    { icon: ClockCircleOutlined, color: "primary-orange-light-bg", text: <><b>Hours of operation:</b> from 7:00 a.m. to 7:00 p.m</> },
    { icon: GroupOutlined, color: "primary-pink-light-bg", text: <><b>Groups:</b> up to 15 people</> },
    { icon: HomeOutlined, color: "primary-violet-light-bg", text: <><b>Walking area:</b> private equipped walking area</> },
    { icon: VideoCameraOutlined, color: "primary-violet-light-bg", text: <><b>Video surveillance:</b> online</> },
    { icon: MessageOutlined, color: "primary-orange-light-bg", text: <><b>English-speaking environment:</b> bilingual / expat</> },
    { icon: UserOutlined, color: "primary-pink-light-bg", text: <><b>Age of children:</b> from 1.5 to 7 years</> },
    { icon: MedicineBoxOutlined, color: "primary-pink-light-bg", text: <><b>Morning filter by a health worker:</b> daily</> },
    { icon: HomeOutlined, color: "primary-violet-light-bg", text: <><b>Premises:</b> 800 sq.m.</> },
    { icon: ShopOutlined, color: "primary-orange-light-bg", text: <><b>Meals:</b> 5 times a day</> },
  ];

  return (
    <section className="about">
      <Row justify="center" gutter={[0, 20]}>
        {aboutData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={7}
          >
            <Flex align="center" gap={16}>
              <div className={`icon-wrapper ${item.color}`}>
                <item.icon style={{ fontSize: 26, color: "white" }} />
              </div>
              <p className="textblock">{item.text}</p>
            </Flex>
          </Col>
        ))}
      </Row>
    </section>

  );
};

export { About }
