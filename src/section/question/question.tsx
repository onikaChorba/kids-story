import './index.css';
import { Flex, Input, Button, Radio, Form, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface QuestionProps {
  title: string;
  description: string;
  inputBg?: string;
  buttonBg?: string;
  textColor?: string;
  radioLabel?: string;
  buttonText?: string;
  placeholder?: string;
  background?: string;
  backgroundColor?: string;
}

const Question = ({
  title,
  description,
  textColor = "#fff",
  inputBg = "#fff",
  buttonBg = "#F6B31F",
  radioLabel = "I accept the terms user agreement",
  buttonText = "Send",
  background,
  placeholder = "+ 380 _ _  _ _ _  _ _  _ _",
  backgroundColor,
}: QuestionProps) => {
  return (
    <section
      className="question-section"
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <Form className="question-form">
        <Flex vertical gap={20}>
          <Title level={2} style={{ color: textColor, margin: 0 }} className="form-title">
            {title}
          </Title>

          <Paragraph style={{ color: textColor, margin: 0 }} className="form-description">
            {description}
          </Paragraph>

          <Flex gap="small" wrap="wrap" className="input-group">
            <Input
              type="tel"
              placeholder={placeholder}
              size="large"
              className="form-input"
              style={{ background: inputBg }}
            />
            <Button
              type="primary"
              size="large"
              className="form-button"
              style={{ backgroundColor: buttonBg, borderColor: buttonBg }}
            >
              {buttonText}
            </Button>
          </Flex>

          <Radio className="form-radio" style={{ color: textColor }}>
            {radioLabel}
          </Radio>
        </Flex>
      </Form>

      <div className='question-img'>
        <img src={background} />
      </div>
    </section>
  );
};

export { Question };