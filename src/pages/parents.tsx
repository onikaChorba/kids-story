import { icons } from "../icons";
import { Question } from "../section";
import { Link } from "react-router-dom";
import { Collapse, Typography, Flex, Breadcrumb } from "antd";
import { PlusOutlined, MinusOutlined, HomeOutlined } from "@ant-design/icons";
import { CustomMap } from "../components";


const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    key: "1",
    question: "FREQUENTLY ASKED QUESTION ABOUT ONE THING?",
    answer: "We have created a space where every child expresses and discovers themselves, develops individual characteristics and talents. We have created a space where every child expresses and discovers themselves, develops individual characteristics and talents. We have created a space where every child expresses and discovers themselves, develops individual characteristics and talents.",
  },
  {
    key: "2",
    question: "ABOUT SOMETHING ELSE?",
    answer: "Detailed information about other aspects of our educational process and child safety measures.",
  },
  {
    key: "3",
    question: "IF THERE ARE ANY OTHER QUESTIONS?",
    answer: "You can always contact our administration via the feedback form or by phone for a personal consultation.",
  },
  {
    key: "4",
    question: "FREQUENTLY ASKED QUESTION ABOUT ONE THING?",
    answer: "Another detailed explanation to ensure parents feel confident about their choice of our center.",
  },
];

const ParentsFAQ = () => {
  return (
    <Flex vertical style={{ padding: "20px 40px" }} gap={20}>
      <Breadcrumb
        items={[
          { title: <Link to="/"><HomeOutlined /></Link> },
          { title: "Parents" },
        ]}
      />

      <Title level={1} style={{ color: "#8E83BC", marginBottom: "40px" }}>
        Parents
      </Title>

      <Collapse
        accordion
        ghost
        expandIconPosition="start"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined style={{ color: "#F27052" }} /> : <PlusOutlined style={{ color: "#8E83BC" }} />
        }
        style={{ background: "transparent" }}
      >
        {faqData.map((item) => (
          <Panel
            header={
              <Text
                strong
                style={{
                  fontSize: "16px",
                  color: "#8E83BC",
                  textTransform: "uppercase",
                  paddingLeft: "10px"
                }}
              >
                {item.question}
              </Text>
            }
            key={item.key}
            style={{
              borderBottom: "2px solid #FADB14",
              marginBottom: "10px"
            }}
          >
            <div style={{ padding: "10px 40px 20px 40px" }}>
              <Paragraph style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", margin: 0 }}>
                {item.answer}
              </Paragraph>
              <br />
              <Paragraph style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", margin: 0 }}>
                {item.answer}
              </Paragraph>
            </div>
          </Panel>
        ))}
      </Collapse>

      <Question
        textColor="#334155"
        inputBg="#FDDC4E"
        buttonBg="#EA5D4A"
        title="Still have questions?"
        description="Leave your phone number and we'll call you back
with all the details about the branch"
        background={icons.questionBg2}
        backgroundColor="#8081BD"
      />
      <CustomMap />
    </Flex>
  );
};

export default ParentsFAQ;