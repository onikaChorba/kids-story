import { Flex } from "antd";
import { Hero } from "../../section/hero/hero";
import { About } from "../../section/about/about";
import questionBg from '../../assets/img/question.png';
import questionBg2 from '../../assets/img/question2.png';
import { OurTeam } from "../../section/our-team/our-team";
import { Question } from "../../section/question/question";
import { AboutCenter } from "../../section/about/about-center";
import { VideoGallery } from "../../section/video-gallery/video-gallery";
import { AdditionalServices } from "../../section/additional-services/additional-services";



export const Home = () => {
  return (
    <Flex gap="large" vertical>
      <Hero />
      <About />
      <Question
        title="Have questions? Get a free consultation."
        description="Leave your phone number and we'll call you back with all the details about the branch"
        background={questionBg}
        inputBg="#f0f0f0"
        buttonText="Send Request"
        radioLabel="I agree with privacy policy"
      />
      <AdditionalServices />
      <VideoGallery />
      <OurTeam />
      <Question
        textColor="#334155"
        inputBg="#FDDC4E"
        buttonBg="#EA5D4A"
        title="Still have questions?"
        description="Leave your phone number and we'll call you back
with all the details about the branch"
        background={questionBg2}
      />
      <AboutCenter
        title="About our center"
        description="We have created a space in which every child expresses and reveals themselves, developing their individual characteristics and talents."
        highlightText="Our goal is to make every day at Kids Story a happy one."
        list={[
          "English Kids Club. For children aged 2 to 7. Language immersion, on-site kitchen, secure fenced area, medical office, and salt cave.",
          "Additional services. For children aged 2 to 18. Developing studios, creative workshops, sports sections.",
          'Kids Story - "daily development of children at 360 degrees."'
        ]}
      />
    </Flex>);
}