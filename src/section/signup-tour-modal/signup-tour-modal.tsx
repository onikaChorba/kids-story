import { Modal, Button, Form, Input, Radio, Typography, message, Flex } from 'antd';

const { Title, Paragraph } = Typography;

interface SignupTourModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SignupTourModal = ({ isOpen, closeModal }: SignupTourModalProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    alert(`Success! Data sent:\nName: ${values.name}\nPhone: ${values.phone}`);
    message.success('We will contact you soon!');
    closeModal();
    form.resetFields();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        footer={null}
        centered
        width={500}
        bodyStyle={{ padding: '20px 10px' }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ agreement: false }}
          className="modal-form"
        >
          <Flex vertical gap={10} style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Title level={3} style={{ color: '#8E83BC', margin: 0 }}>
              Sign up for a tour
            </Title>
            <Paragraph type="secondary">
              Fill out the form and we will choose a convenient time for your visit
            </Paragraph>
          </Flex>

          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name *" size="large" style={{ borderRadius: '50px' }} />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number' },
              { pattern: /^\+?3?8?(0\d{9})$/, message: 'Invalid format (e.g. +380...)' }
            ]}
          >
            <Input placeholder="Phone number *" size="large" style={{ borderRadius: '50px' }} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email address' }
            ]}
          >
            <Input placeholder="Email *" size="large" style={{ borderRadius: '50px' }} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Required')),
              },
            ]}
          >
            <Radio style={{ fontSize: '12px' }}>
              I accept the terms of the user agreement
            </Radio>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className="primary-orange-bg"
            style={{
              borderRadius: '50px',
              height: '50px',
              fontWeight: 'bold',
              marginTop: '10px',
              backgroundColor: '#F6B31F',
              border: 'none'
            }}
          >
            SIGN UP
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export { SignupTourModal };