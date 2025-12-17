import { Breadcrumb, Flex, Image } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AboutCenter } from "../section/about/about-center";
import { VideoGallery } from "../section/video-gallery/video-gallery";
import { AdditionalServices } from "../section/additional-services/additional-services";
import { Question } from "../section/question/question";
import questionBg3 from '../assets/img/question3.png'
import { CustomMap } from "../components";

export const AboutCenterPage = () => {
  return (
    <Flex vertical gap="large">
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined />
              </Link>
            ),
          },
          {
            title: "About Center",
          },
        ]}
      />

      <h2>About Our Education Center</h2>

      <Flex vertical gap="large">
        <Flex gap="middle" align="center">
          <Image
            width={200}
            style={{ borderRadius: '20px' }}
            src="https://i.pravatar.cc/300?img=9"
          />

          <div className="director-info">
            <h3>Anna Williams</h3>
            <p className="role">Founder & Director</p>

            <p>
              Anna Williams is the founder and director of our education center
              with over <b>12 years of experience</b> in education management and
              teaching. She believes in modern, student-centered learning.
            </p>

            <p>
              Her mission is to create a safe, inspiring space where children and
              adults can grow, learn, and achieve their goals.
            </p>
          </div>
        </Flex>
        <AboutCenter
          title=""
          description="We have created a space in which every child expresses and reveals themselves, developing their individual characteristics and talents."
          highlightText="Our goal is to make every day at Kids Story a happy one."
          list={[
            "English Kids Club. For children aged 2 to 7. Language immersion, on-site kitchen, secure fenced area, medical office, and salt cave.",
            "Additional services. For children aged 2 to 18. Developing studios, creative workshops, sports sections.",
            'Kids Story - "daily development of children at 360 degrees."'
          ]}
        />
      </Flex>
      <VideoGallery />
      <AdditionalServices />
      <Question
        textColor="white"
        inputBg="white"
        buttonBg="#F6B31F"
        title="Still have questions?"
        description="Leave your phone number and we'll call you back
with all the details about the branch"
        background={questionBg3}
      />
      <CustomMap />
    </Flex>
  );
};
