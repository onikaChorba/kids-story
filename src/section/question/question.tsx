import './index.css'
import Form from 'antd/es/form/Form'
import { Flex, Input, Button, Radio } from 'antd'
export const Question = () => {
  return (
    <section className="question">
      <Form className='form'>
        <Flex vertical>
          <h2>Have questions? Get a free consultation.</h2>
          <p>Leave your phone number and we'll call you back
            with all the details about the branch</p>
          <Flex gap="small">
            <Input
              type="tel"
              placeholder="+ 3 _  _  _  -  _  _  _  -  _  _  -  _  _"
              size="large"
              className='input'
            />
            <Button variant="text" type="primary" className="button">Sent</Button>
          </Flex>
          <Radio className='radio'>I accept the terms
            user agreement</Radio>
        </Flex>
      </Form>
    </section>
  )
}