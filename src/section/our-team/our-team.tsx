import './index.css'
import { Card, Avatar } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { CustomSlider } from "../../components/custom-slider/custom-slider";

const { Meta } = Card;

export const OurTeam = () => {
  const team = [
    { id: 1, img: 3, name: "Sarah Johnson", role: "Teacher" },
    { id: 2, img: 4, name: "Emma Brown", role: "Teacher" },
    { id: 3, img: 5, name: "Olivia Smith", role: "Teacher" },
    { id: 4, img: 6, name: "James Wilson", role: "Teacher" },
    { id: 5, img: 7, name: "Michael Lee", role: "Teacher" },
    { id: 6, img: 8, name: "Daniel Young", role: "Teacher" },
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
            <Meta
              avatar={<Avatar src={`https://i.pravatar.cc/150?img=${member.img}`} />}
              title={<span className="team-name">{member.name}</span>}
              description={<span className="team-role">{member.role}</span>}
            />
          </Card>
        ))}
      </CustomSlider>

      <svg className="yellow" width="145" height="97" viewBox="0 0 145 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.65768 79.4572C-2.28722 66.4765 -1.45925 50.0115 5.61229 40.9343C11.5974 33.2524 29.2515 30.7541 58.196 28.4205C87.1405 26.087 88.7689 -12.5611 118.818 4.2018C148.867 20.9647 154.865 55.8457 126.994 72.3991C99.1224 88.9525 26.5786 113.558 5.65768 79.4572Z" fill="#FDDC4E" />
      </svg>
      <svg className="green" width="87" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0970707 80.2805L0.446454 11.3695L29.2071 62.5261L39.6307 0C45.463 17.6743 52.736 34.8475 61.3775 51.3492C69.3008 38.8878 74.7619 25.0429 77.4692 10.5538C81.8312 31.5745 85.013 52.8197 87 74.1911C57.826 72.7578 28.5874 75.0461 0 81" fill="#79BC6D" />
      </svg>
    </section>
  )
}