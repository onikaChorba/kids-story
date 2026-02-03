import './index.css';
import { icons } from '../../icons';
import { Button, Flex, Form, Input, Radio, Typography, message } from 'antd';

const { Title, Paragraph } = Typography;

interface FormValues {
  name: string;
  phone: string;
  email: string;
  agreement: boolean;
}

const Hero = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    alert(`Success! Data sent:\n
      Name: ${values.name}
      Phone: ${values.phone}
      Email: ${values.email}
    `);

    form.resetFields();
    message.success('Registration successful!');
  };

  return (
    <Flex align='center' justify='center' gap="small" wrap className='hero'>
      <Flex vertical className='textblock' gap="small">
        <h1>Kidsstory</h1>
        <h2>English for children garden and club</h2>
      </Flex>

      <img src={icons.heroImg} className='hero-img' alt="Hero" />

      <Form
        form={form}
        className='form'
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ agreement: false }}
      >
        <Flex vertical>
          <Title level={2}>Sign up on personal excursion</Title>
          <Paragraph>
            Fill out the form and see the kindergarten in a convenient time
          </Paragraph>

          <Flex vertical gap="small">
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="Your name *"
                size="large"
                className='input'
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Please enter your phone number' },
                { pattern: /^\+?3?8?(0\d{9})$/, message: 'Invalid phone format' }
              ]}
            >
              <Input
                type="tel"
                placeholder="+380 _ _  _ _ _  _ _  _ _ *"
                size="large"
                className='input'
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'The input is not valid E-mail!' }
              ]}
            >
              <Input
                placeholder="Your email *"
                size="large"
                className='input'
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Radio className='radio'>
                I accept the terms user agreement
              </Radio>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="primary-orange-bg button"
              block
            >
              sign up
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Flex>
  );
};

export { Hero };