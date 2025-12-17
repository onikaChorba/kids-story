import './index.css'
import Slider from "react-slick";
import { icons } from "../../icons";
import { Image, Row, Col, Flex } from "antd";
import {
  HddOutlined,
  BulbOutlined,
  SoundOutlined,
  SmileOutlined,
  LaptopOutlined,
  UserSwitchOutlined
} from "@ant-design/icons";

const images = [icons.img1, icons.img2, icons.img3, icons.img1, icons.img2];

const advantagesData = [
  { icon: HddOutlined, color: "primary-orange-light-bg", text: <><b>Master classes</b></> },
  { icon: LaptopOutlined, color: "primary-pink-light-bg", text: <><b>Quest games</b></> },
  { icon: SmileOutlined, color: "primary-violet-light-bg", text: <><b>Conferences and projects</b></> },
  { icon: BulbOutlined, color: "primary-blue-light-bg", text: <><b>Experiments and trials</b> </> },
  { icon: SoundOutlined, color: "primary-orange-light-bg", text: <><b>Concerts and performances</b></> },
  { icon: UserSwitchOutlined, color: "primary-pink-light-bg", text: <><b>Competitions</b></> },
];

const VideoGallery = () => {
  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "0px",
    autoplaySpeed: 3000,
  };

  return (
    <section className="videoGallery">
      <h2>Video gallery of our garden</h2>
      <p>You can see how our everyday life goes.</p>
      <Slider {...settings} className="slider">
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`img${index}`}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        ))}
      </Slider>

      <h2 className="title">Advantages</h2>
      <Row justify="center" gutter={[0, 20]}>
        {advantagesData.map((item, index) => (
          <Col span={8} key={index}>
            <Flex align="center" gap={20}>
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

export { VideoGallery }