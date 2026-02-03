import './syllabus.css';
import { useState } from 'react';
import { icons } from '../../icons';
import { Row, Col, Typography, Button, Pagination, Modal, Image } from 'antd';

const { Paragraph } = Typography;

interface GroupItem {
  id: number;
  ageRange: string;
  title: string;
  description: string;
  fullDetails: string;
  image: string;
}

const syllabusData: GroupItem[] = [
  {
    id: 1,
    ageRange: "2-3 years",
    title: "Toddler Group",
    description: "Specialists working in this group (educators, English teacher), page with photos and text in checkerboard order.",
    fullDetails: "What awaits the child (stay mode). How many people are in the group. What kind of nutrition. What classes are held (schedule). Physical exercises. How the day goes. Photo of the specialist who provides the service.",
    image: icons.news
  },
  {
    id: 2,
    ageRange: "3-5 years",
    title: "Junior Group",
    description: "Focus on social adaptation, basic English, and creative development through play and interactive sessions.",
    fullDetails: "Extended program details including cognitive development, emotional intelligence workshops, and daily outdoor activities.",
    image: icons.news1
  },
  {
    id: 3,
    ageRange: "5-7 years",
    title: "Senior Group",
    description: "Preparation for school, advanced robotics, and language immersion to ensure a smooth transition to primary education.",
    fullDetails: "Comprehensive preschool curriculum, logic games, mathematics, and advanced social skill building.",
    image: icons.news3
  }
];

export const Syllabus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState<GroupItem | null>(null);
  const pageSize = 3;

  const currentData = syllabusData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section className="syllabus-section">
      {currentData.map((group, index) => (
        <Row
          key={group.id}
          gutter={[40, 40]}
          align="middle"
          className={`syllabus-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}
        >
          <Col xs={24} lg={10}>
            <Image
              src={group.image}
              alt={group.title}
              className="group-image"
              preview={false}
            />
          </Col>
          <Col xs={24} lg={14}>
            <div className="group-content">
              <h3 className="group-age-title">
                Group ({group.ageRange})
              </h3>
              <Paragraph className="group-description">
                {group.description}
              </Paragraph>
              <Button
                type="link"
                className="btn-more"
                onClick={() => setSelectedGroup(group)}
              >
                Learn more details →
              </Button>
            </div>
          </Col>
        </Row>
      ))}

      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={syllabusData.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          hideOnSinglePage
        />
      </div>

      <Modal
        title={`Details for ${selectedGroup?.ageRange} Group`}
        open={!!selectedGroup}
        onCancel={() => setSelectedGroup(null)}
        footer={null}
        centered
        width={600}
      >
        {selectedGroup && (
          <div className="syllabus-modal">
            <h3 style={{ color: '#8E83BC' }}>{selectedGroup.title}</h3>
            <Paragraph>{selectedGroup.fullDetails}</Paragraph>
          </div>
        )}
      </Modal>
    </section>
  );
};