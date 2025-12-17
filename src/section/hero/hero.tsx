import './index.css'
import { icons } from '../../icons'
import { Button, Flex, Form, Input, Radio } from 'antd'

const Hero = () => {
  return (
    <Flex align='center' justify='center' gap="small" wrap style={{ position: 'relative', marginTop: '100px' }} className='hero'>
      <Flex vertical className='textblock' gap="small">
        <h1>Kidsstory</h1>
        <h2>English for children
          garden and club</h2>
      </Flex>
      <img src={icons.heroImg} width="100%" />
      <Form style={{ position: 'absolute', right: '0px' }} className='form'>
        <Flex vertical>
          <h2>Sign up
            on personal
            excursion</h2>
          <p>Fill out the form and see
            I use the kindergarten in a convenient way
            it's your time</p>
          <Flex vertical gap="small">
            <Input
              type="text"
              placeholder="Your name"
              size="large"
              className='input'
              suffix={<span className="required-star" onClick={() => console.log('star clicked')}>*</span>}
            />
            <Input
              type="tel"
              placeholder="+ 3 _  _  _  -  _  _  _  -  _  _  -  _  _"
              size="large"
              className='input'
              suffix={<span className="required-star" onClick={() => console.log('star clicked')}>*</span>}
            />
            <Input
              type="email"
              placeholder="Your email"
              size="large"
              className='input'
              suffix={<span className="required-star" onClick={() => console.log('star clicked')}>*</span>}
            />
            <Radio className='radio'>I accept the terms
              user agreement</Radio>

            <Button variant="text" type="primary" className="primary-orange-bg button"> sign up</Button>
          </Flex>
        </Flex>
      </Form>
    </Flex>
  )
}

export { Hero }