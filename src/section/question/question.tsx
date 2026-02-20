import './question.css';
import { Flex, Input, Button, Radio, Form, Typography, message } from 'antd';

const { Title, Paragraph } = Typography;

interface QuestionProps {
  title: string;
  description: string;
  inputBg?: string;
  buttonBg?: string;
  textColor?: string;
  radioLabel?: string;
  buttonText?: string;
  background?: string;
  placeholder?: string;
  backgroundColor?: string;
}

interface FormValues {
  phone: string;
  agreement: boolean;
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

  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    alert(` Question From Sent!\n Phone: ${values.phone}`)
    message.success('Thank you! We will call you back.')
    form.resetFields();
  }

  return (
    <section
      className="question-section"
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{ agreement: false }}
        className="question-form">
        <Flex vertical gap={20}>
          <Title level={2} style={{ color: textColor, margin: 0 }} className="form-title">
            {title}
          </Title>

          <Paragraph style={{ color: textColor, margin: 0 }} className="form-description">
            {description}
          </Paragraph>

          <Flex gap="small" wrap="wrap" className="input-group">
            <Form.Item
              name="phone"
              style={{ flex: 1, marginBottom: 0 }}
              rules={[
                { required: true, message: 'Please enter your phone!' },
                { pattern: /^\+?3?8?(0\d{9})$/, message: 'Invalid format' }
              ]}
            >
              <Input
                type="tel"
                placeholder={placeholder}
                size="large"
                className="form-input"
                style={{ background: inputBg }}
              />
            </Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="form-button"
              style={{ backgroundColor: buttonBg, borderColor: buttonBg }}
            >
              {buttonText}
            </Button>
          </Flex>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Accept the agreement')),
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Radio className="form-radio" style={{ color: textColor }}>
              {radioLabel}
            </Radio>
          </Form.Item>
        </Flex>
      </Form>

      <div className='question-img'>
        <img src={background} />
      </div>
    </section>
  );
};

export { Question };