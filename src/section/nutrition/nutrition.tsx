import "./nutrition.css"
import { icons } from "../../icons";
import { Row, Col, Typography, Image } from 'antd';

const { Title } = Typography;

const menuData = [
  {
    category: "1ST BREAKFAST",
    items: [
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
    ]
  },
  {
    category: "2ND BREAKFAST",
    items: [
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
    ]
  },
  {
    category: "LUNCH",
    items: [
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
    ]
  },
  {
    category: "AFTERNOON SNACK",
    items: [
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
    ]
  },
  {
    category: "DINNER",
    items: [
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
      { name: "Dish 1", weight: "250 g." },
    ]
  }
];

const Nutrition = () => {
  return (
    <Row gutter={[40, 40]} align="top">
      <Col xs={24} lg={10}>
        {menuData.map((section, idx) => (
          <div key={idx} className="menu-category-block">
            <Title level={4} className="category-title">{section.category}</Title>
            <div className="menu-items">
              {section.items.map((item, i) => (
                <div key={i} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-dots"></span>
                  <span className="item-weight">{item.weight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Col>

      <Col xs={24} lg={14}>
        <div className="nutrition-gallery">
          <Image
            src={icons.mainDish}
            className="main-food-image"
            alt="Main dish"
          />
          <div className="thumbnail-grid">
            {[icons.dish1, icons.dish2, icons.dish3, icons.dish1, icons.dish2, icons.dish3, icons.dish1, icons.dish2,].map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                className="food-thumbnail"
                preview={true}
                alt={`Dish thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export { Nutrition };