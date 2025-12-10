import './App.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { HeaderCustom } from './components/header/header';
import { Home } from './pages/home/home';
import { CustomFooter } from './components/footer/footer';

const { Content } = Layout;

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {

  return (
    <Layout>
      <HeaderCustom />
      <Content style={{ background: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default App
