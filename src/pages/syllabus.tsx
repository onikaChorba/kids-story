import { icons } from "../icons";
import { Question, Syllabus } from "../section"
import { Flex, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { CustomMap } from "../components";
import { HomeOutlined } from "@ant-design/icons";

const SyllabusPage = () => {
  return (
    <Flex vertical gap={20} style={{ padding: '20px 40px' }}>
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
            title: "Syllabus",
          },
        ]}
      />
      <h2>Syllabus</h2>
      <Syllabus />

      <Question
        title="Have questions? Get a free consultation."
        description="Leave your phone number and we'll call you back with all the details about the branch"
        background={icons.questionBg}
        inputBg="#f0f0f0"
        buttonText="Send Request"
        radioLabel="I agree with privacy policy"
        backgroundColor="#8081BD"
      />
      <CustomMap />
    </Flex>
  )
}

export default SyllabusPage;