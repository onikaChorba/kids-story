import './index.css'
import { useState } from 'react';
import { icons } from '../../icons';
import "slick-carousel/slick/slick.css";
import { Card, Avatar, Button } from "antd";
import "slick-carousel/slick/slick-theme.css";
import { CustomModal, CustomSlider } from '../../components';
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Meta } = Card;

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMember, setActiveMember] = useState<any>(null);

  const openModal = (member: any) => {
    setActiveMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveMember(null);
  };

  const team = [
    {
      id: 1,
      img: 3,
      name: "Sarah Johnson",
      role: "Senior English Teacher",
      experience: 8,
      education: "MA in English Philology, University of London",
      specialization: ["Spoken English", "Exam Preparation", "Kids (7–12)"],
      languages: ["English", "Spanish"],
      description:
        "Sarah has over 8 years of experience teaching children and teenagers. She focuses on building confidence and speaking skills through interactive lessons.",
      achievements: [
        "Cambridge CELTA certified",
        "Prepared 200+ students for international exams",
      ],
      email: "sarah.johnson@school.com",
    },
    {
      id: 2,
      img: 4,
      name: "Emma Brown",
      role: "Primary School Teacher",
      experience: 5,
      education: "BA in Education, University of Manchester",
      specialization: ["Early Learning", "Reading & Writing", "Creative Classes"],
      languages: ["English"],
      description:
        "Emma specializes in working with younger learners. Her lessons are playful, creative, and adapted to each child's needs.",
      achievements: [
        "Montessori teaching methods",
        "Author of interactive lesson plans",
      ],
      email: "emma.brown@school.com",
    },
    {
      id: 3,
      img: 5,
      name: "Olivia Smith",
      role: "Math Teacher",
      experience: 6,
      education: "MSc in Mathematics, University of Edinburgh",
      specialization: ["Math Logic", "Problem Solving", "Exam Prep"],
      languages: ["English"],
      description:
        "Olivia helps students understand complex math topics in a simple and logical way. She believes math can be fun.",
      achievements: [
        "Olympiad mentor",
        "Improved students' results by 40%",
      ],
      email: "olivia.smith@school.com",
    },
    {
      id: 4,
      img: 6,
      name: "James Wilson",
      role: "IT & Programming Teacher",
      experience: 7,
      education: "BSc in Computer Science, University of Bristol",
      specialization: ["JavaScript", "Python", "Game Development"],
      languages: ["English"],
      description:
        "James teaches programming to kids and teenagers using real-world examples and interactive projects.",
      achievements: [
        "Roblox & Scratch mentor",
        "Created 50+ student projects",
      ],
      email: "james.wilson@school.com",
    },
    {
      id: 5,
      img: 7,
      name: "Michael Lee",
      role: "Science Teacher",
      experience: 9,
      education: "PhD in Physics, University of Toronto",
      specialization: ["Physics", "Experiments", "STEM"],
      languages: ["English", "Chinese"],
      description:
        "Michael brings science to life with experiments and hands-on activities that spark curiosity.",
      achievements: [
        "STEM program coordinator",
        "Speaker at international conferences",
      ],
      email: "michael.lee@school.com",
    },
    {
      id: 6,
      img: 8,
      name: "Daniel Young",
      role: "Creative Arts Teacher",
      experience: 4,
      education: "BA in Fine Arts, University of Berlin",
      specialization: ["Drawing", "Design Thinking", "Creativity"],
      languages: ["English", "German"],
      description:
        "Daniel encourages students to express themselves through art and creative projects.",
      achievements: [
        "Exhibited in 10+ galleries",
        "Art therapy workshops leader",
      ],
      email: "daniel.young@school.com",
    },
  ];

  return (
    <section className="our-team">
      <h2>
        Out team
      </h2>
      <CustomSlider slidesToShow={4} className="slider">
        {team.map(member => (
          <Card
            key={member.id}
            hoverable
            className="card"
            cover={
              <img
                alt={member.name}
                src={`https://i.pravatar.cc/300?img=${member.img}`}
                className="card-img"
              />
            }
            actions={[
              <GithubOutlined key="github" style={{ fontSize: 20 }} />,
              <LinkedinOutlined key="linkedin" style={{ fontSize: 20 }} />,
            ]}
          >
            <div className='card-content'>
              <Meta
                avatar={<Avatar src={`https://i.pravatar.cc/150?img=${member.img}`} />}
                title={<span className="team-name">{member.name}</span>}
                description={<span className="team-role">{member.role}</span>}
              />
              <Button onClick={() => openModal(member)}>See More</Button>
            </div>
          </Card>
        ))}
      </CustomSlider>

      <CustomModal open={isModalOpen} onClose={closeModal}>
        {activeMember && (
          <div className="team-modal">
            <Avatar
              size={100}
              src={`https://i.pravatar.cc/300?img=${activeMember.img}`}
            />

            <h3>{activeMember.name}</h3>
            <p className="role">{activeMember.role}</p>

            <p><b>Experience:</b> {activeMember.experience} years</p>
            <p><b>Education:</b> {activeMember.education}</p>

            <p><b>Specialization:</b></p>
            <ul>
              {activeMember.specialization.map((item: any) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p><b>Languages:</b> {activeMember.languages.join(", ")}</p>

            <p className="description">{activeMember.description}</p>

            <p><b>Achievements:</b></p>
            <ul>
              {activeMember.achievements.map((item: any) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="email">{activeMember.email}</p>
          </div>
        )}
      </CustomModal>

      <img src={icons.yellowElement} className='yellow' />
      <img src={icons.greenElement} className='green' />
    </section>
  )
}

export { OurTeam }