import './App.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { CustomHeader, CustomFooter } from './components';
import { Home, NewsPage, AboutCenterPage, ExtraServices, OurTeamPage, Reviews, DocumentsAndCertificates, ParentsFAQ, Meals, SyllabusPage } from "./pages";

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
          <Route path='schedule/extra-services' element={<ExtraServices />} />
          <Route path='/our-team' element={<OurTeamPage />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/documents' element={<DocumentsAndCertificates />} />
          <Route path='/parents' element={<ParentsFAQ />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/syllabus' element={<SyllabusPage />} />
        </Routes>
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default App
