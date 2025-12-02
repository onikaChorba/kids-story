import { About } from "../../section/about/about";
import { Hero } from "../../section/hero/hero";
import { Flex } from "antd";
import { Question } from "../../section/question/question";
import { AdditionalServices } from "../../section/additional-services/additional-services";
import { VideoGallery } from "../../section/video-gallery/video-gallery";

export const Home = () => {
  return (
    <Flex gap="large" vertical>
      <Hero />
      <About />
      <Question />
      <AdditionalServices />
      <VideoGallery />
    </Flex>);
}