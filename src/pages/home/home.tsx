import { About } from "../../section/about/about";
import { Hero } from "../../section/hero/hero";
import { Flex } from "antd";
import { Question } from "../../section/question/question";

export const Home = () => {
  return (
    <Flex gap="large" vertical>
      <Hero />
      <About />
      <Question />
    </Flex>);
}