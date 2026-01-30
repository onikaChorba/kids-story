import './index.css'
import { useState } from 'react';
import { icons } from '../../icons';
import { Link } from 'react-router-dom';
import { ComingSoonLink } from '../../components';
import { Layout, Menu, Button, Flex, Dropdown, Drawer } from 'antd';
import { PhoneFilled, DownOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const CustomHeader = () => {
  const [open, setOpen] = useState(false);

  const dropdownItemsAbout = [
    { key: 'center', label: <Link to="/about-center">About the Center</Link> },
    {
      key: 'documents', label: <ComingSoonLink>
        {/* <Link to="/for-parents">Documents</Link> */}
        Documents
      </ComingSoonLink>
    },
    {
      key: 'parents', label: <ComingSoonLink>
        For Parents
        {/* <Link to="/for-parents">For Parents</Link> */}
      </ComingSoonLink>
    },
    {
      key: 'meals', label: <ComingSoonLink>
        Meals
        {/* <Link to="/meals">Meals</Link> */}
      </ComingSoonLink>
    },
    {
      key: 'news', label:
        <ComingSoonLink>
          News
          {/* <Link to="/news">News</Link> */}
        </ComingSoonLink>
    },
    {
      key: 'tour3d', label: <ComingSoonLink>
        3D Tour
        {/* <Link to="/3d-tour">3D Tour</Link> */}
      </ComingSoonLink>
    },
    {
      key: 'reviews', label:
        <ComingSoonLink>
          Reviews
          {/* <Link to="/reviews">Reviews</Link> */}
        </ComingSoonLink>
    },
  ];

  const dropdownItemsContacts = [
    {
      key: 'phone', label: <ComingSoonLink>Phone</ComingSoonLink>
    },
    { key: 'email', label: <ComingSoonLink>Email</ComingSoonLink> },
  ];

  const dropdownItemsSchedule = [
    { key: 'morning', label: <ComingSoonLink>Morning</ComingSoonLink> },
    { key: 'evening', label: <ComingSoonLink>Evening</ComingSoonLink> },
    { key: 'Additional Services', label: <Link to="schedule/extra-services">Additional Services</Link> }
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
            <ComingSoonLink>
              Contacts
              {/* <Link to="/contact">Contacts</Link> */}
            </ComingSoonLink>
          </Button>
        </Dropdown>
      ),
    },
    {
      key: "schedule",
      label: (
        <Dropdown menu={{ items: dropdownItemsSchedule }} placement="bottom">
          <Button icon={<DownOutlined />} iconPlacement="end" type="text">
            Schedule
          </Button>
        </Dropdown>
      ),
    },
    {
      key: "syllabus", label:
        <ComingSoonLink>
          Syllabus
          {/* <Link to="/syllabus">Syllabus</Link> */}
        </ComingSoonLink>
    },
    {
      key: "photo/video", label:
        <ComingSoonLink>
          Photo and Video
          {/* <Link to="/photo-video">Photo and Video</Link> */}
        </ComingSoonLink>
    },
    {
      key: "teams", label:
        <Link to="/our-team">Teams</Link>
    },
    {
      key: "contacts", label:
        <ComingSoonLink>
          Contacts
          {/* <Link to="/contacts">Contacts</Link> */}
        </ComingSoonLink>
    },
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

export default CustomHeader 