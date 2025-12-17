import './index.css'
import { useState } from 'react';
import { icons } from '../../icons';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Flex, Dropdown, Drawer } from 'antd';
import { PhoneFilled, DownOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const CustomHeader = () => {
  const [open, setOpen] = useState(false);

  const dropdownItemsAbout = [
    { key: 'center', label: <Link to="/about-center">About the Center</Link> },
    { key: 'documents', label: <Link to="/documents">Documents</Link> },
    { key: 'parents', label: <Link to="/for-parents">For Parents</Link> },
    { key: 'meals', label: <Link to="/meals">Meals</Link> },
    { key: 'news', label: <Link to="/news">News</Link> },
    { key: 'tour3d', label: <Link to="/3d-tour">3D Tour</Link> },
    { key: 'reviews', label: <Link to="/reviews">Reviews</Link> },
  ];

  const dropdownItemsContacts = [
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
  ];

  const dropdownItemsSchedule = [
    { key: 'morning', label: 'Morning' },
    { key: 'evening', label: 'Evening' },
  ];

  const items = [
    {
      key: "about",
      label: (
        <Dropdown menu={{ items: dropdownItemsAbout }} placement="bottom">
          <Button icon={<DownOutlined />} iconPlacement="end" type="text">
            <p>About us</p>
          </Button>
        </Dropdown>
      ),
    },
    {
      key: "contactsDropdown",
      label: (
        <Dropdown menu={{ items: dropdownItemsContacts }} placement="bottom">
          <Button icon={<DownOutlined />} iconPlacement="end" type="text">
            <Link to="/contact">Contacts</Link>
          </Button>
        </Dropdown>
      ),
    },
    {
      key: "schedule",
      label: (
        <Dropdown menu={{ items: dropdownItemsSchedule }} placement="bottom">
          <Button icon={<DownOutlined />} iconPlacement="end" type="text">
            <Link to="/schedule">Schedule</Link>
          </Button>
        </Dropdown>
      ),
    },
    { key: "syllabus", label: <Link to="/syllabus">Syllabus</Link> },
    { key: "photo/video", label: <Link to="/photo-video">Photo and Video</Link> },
    { key: "teams", label: <Link to="/teams">Teams</Link> },
    { key: "contacts", label: <Link to="/contacts">Contacts</Link> },
  ];

  return (
    <>
      <Header className="header">
        <Flex justify='space-between' className='header-mobile'>
          <Link to="/" className='logo-wrapper'><img className="logo" src={icons.logo} /></Link>
          <Button
            className="burger-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </Flex>
        <Menu
          className="custom-menu"
          mode="horizontal"
          items={items}
        />

        <Flex className="header-icons" gap="small">
          <Button type="text" icon={<PhoneFilled className='primary-orange-color' />}>
            +380967161448
          </Button>
          <Button type="text" icon={<img src={icons.vk} />} />
          <Button type="text" icon={<img src={icons.telegram} />} />
        </Flex>

        <Button type="primary" className="custom-button">
          Sign up for a tour
        </Button>
      </Header>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        size="default"
        styles={{
          body: { padding: 0 },
        }}
        getContainer={false}
        style={{ position: 'fixed' }}
      >
        <Menu mode="vertical" items={items} />
      </Drawer>
    </>
  );
};

export { CustomHeader }