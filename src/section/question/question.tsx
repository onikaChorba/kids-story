import './index.css'
import Form from 'antd/es/form/Form'
import { Flex, Input, Button, Radio } from 'antd';

interface QuestionProps {
  title: string;
  description: string;
  background?: string;
  inputBg?: string;
  buttonBg?: string;
  textColor?: string;
  radioLabel?: string;
  buttonText?: string;
  placeholder?: string;
}

export const Question = ({
  title,
  description,
  background,
  textColor = "#fff",
  inputBg = "#fff",
  buttonBg = "#ea5d4a",
  radioLabel = "I accept the terms user agreement",
  buttonText = "Send",
  placeholder = "+ 3 _  _  _  -  _  _  _  -  _  _  -  _  _",
}: QuestionProps) => {
  return (
    <section
      className="question"
      style={{
        background: background
          ? `url(${background}) no-repeat center/cover`
          : `url("../../assets/img/question.png") no-repeat center/cover`,
      }}
    >
      <Form className='form' style={{
        color: textColor
      }}>
        <Flex vertical>
          <h2 style={{
            color: textColor
          }}>{title}</h2>
          <p>{description}</p>
          <Flex gap="small">
            <Input
              type="tel"
              placeholder={placeholder}
              size="large"
              className='input'
              style={{ background: inputBg }}
            />
            <Button
              type="primary"
              className="button"
              style={{ background: buttonBg, borderColor: buttonBg }}
            >
              {buttonText}
            </Button>
          </Flex>
          <Radio className='radio' style={{
            color: textColor
          }}>{radioLabel}</Radio>
        </Flex>
      </Form>
    </section>
  )
}
