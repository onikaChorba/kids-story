import './index.css';
import React from "react";
import Slider from "react-slick";
import { icons } from '../../icons';
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}
interface CustomSliderProps {
  children: React.ReactNode;
  dotColor?: string;
  className?: string;
  slidesToShow?: number;
  activeDotColor?: string;
}

const CustomSlider = ({ children, slidesToShow = 4, className }: CustomSliderProps) => {

  const NextArrow = ({ onClick }: ArrowProps) => (
    <div className="arrow next" onClick={onClick}>
      <img src={icons.nextArrow} />
    </div>
  );

  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div className="arrow prev" onClick={onClick}>
      <img src={icons.prevArrow} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: Math.min(slidesToShow, 3) } },
      { breakpoint: 900, settings: { slidesToShow: Math.min(slidesToShow, 2) } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return <Slider {...settings} className={className}>{children}</Slider>;
};

export { CustomSlider };