import './index.css'
import React from "react";
import { Flex } from "antd";
import { YuqueOutlined, ProductOutlined, MedicineBoxOutlined, PicLeftOutlined, HighlightOutlined, PieChartOutlined, MessageOutlined, RiseOutlined, AimOutlined, CoffeeOutlined, ExperimentOutlined } from "@ant-design/icons";

const AdditionalServices = () => {
  const services = [
    { icon: YuqueOutlined, text: "Yoga", color: "#8081BD" },
    { icon: ProductOutlined, text: "Montessori classroom with unique wooden equipment", color: "#8081BD" },
    { icon: MedicineBoxOutlined, text: "Golf for toddlers", color: "#8081BD" },
    { icon: PicLeftOutlined, text: "Balance bike training", color: "#8081BD" },
    { icon: HighlightOutlined, text: "Lego building and construction", color: "#8081BD" },
    { icon: PieChartOutlined, text: "Dough plastics and clay plastics", color: "#8081BD" },
    { icon: MessageOutlined, text: "Rhetoric and oratory", color: "#8081BD" },
    { icon: RiseOutlined, text: "Rock climbing classes", color: "#8081BD" },
    { icon: AimOutlined, text: "Dramatization in English", color: "#8081BD" },
    { icon: CoffeeOutlined, text: "Cooking and table service etiquette", color: "#8081BD" },
    { icon: ExperimentOutlined, text: "Sandplay therapy. Work on interactive tables and boards.", color: "#8081BD" },
  ];

  return (
    <section className="additionalServices">
      <h2>Additional services</h2>
      <Flex wrap gap="small">
        {services.map((service, index) => (
          <div
            className="box-item"
            key={index}>
            <div className='icon-wrapper'>
              {React.createElement(service.icon, { style: { fontSize: 42, color: service.color } })}
            </div>
            <p>{service.text}</p>
          </div>
        ))}
      </Flex>
    </section>
  );
};

export { AdditionalServices }
