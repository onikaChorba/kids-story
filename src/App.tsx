import './App.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { HeaderCustom } from './components/header/header';
import { Home } from './pages/home';
import { CustomFooter } from './components/footer/footer';
import { AboutCenterPage } from './pages/about-center';

const { Content } = Layout;

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {

  return (
    <Layout>
      <HeaderCustom />
      <Content style={{ background: "white", marginTop: '90px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-center" element={<AboutCenterPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default App
