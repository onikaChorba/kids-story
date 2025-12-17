import './App.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { AboutCenterPage } from './pages/about-center';
import { CustomHeader, CustomFooter } from './components';
const { Content } = Layout;

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Layout>
      <CustomHeader />
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
