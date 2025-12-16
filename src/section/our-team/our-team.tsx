import './index.css'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import { Card, Avatar, Button } from "antd";
import "slick-carousel/slick/slick-theme.css";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { CustomModal } from '../../components/custom-modal/custom-modal';
import { CustomSlider } from "../../components/custom-slider/custom-slider";

const { Meta } = Card;

export const OurTeam = () => {
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

      <svg className="yellow" width="145" height="97" viewBox="0 0 145 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.65768 79.4572C-2.28722 66.4765 -1.45925 50.0115 5.61229 40.9343C11.5974 33.2524 29.2515 30.7541 58.196 28.4205C87.1405 26.087 88.7689 -12.5611 118.818 4.2018C148.867 20.9647 154.865 55.8457 126.994 72.3991C99.1224 88.9525 26.5786 113.558 5.65768 79.4572Z" fill="#FDDC4E" />
      </svg>
      <svg className="green" width="87" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0970707 80.2805L0.446454 11.3695L29.2071 62.5261L39.6307 0C45.463 17.6743 52.736 34.8475 61.3775 51.3492C69.3008 38.8878 74.7619 25.0429 77.4692 10.5538C81.8312 31.5745 85.013 52.8197 87 74.1911C57.826 72.7578 28.5874 75.0461 0 81" fill="#79BC6D" />
      </svg>
    </section>
  )
}