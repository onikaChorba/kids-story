import './index.css';
import React from "react";
import Slider from "react-slick";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

interface CustomSliderProps {
  children: React.ReactNode;
  className?: string;
  slidesToShow?: number;
  dotColor?: string;
  activeDotColor?: string;
}

export const CustomSlider = ({ children, slidesToShow = 4, className, dotColor = "#FDDC4E",
  activeDotColor = "#EA5D4A", }: CustomSliderProps) => {

  const NextArrow = ({ onClick }: ArrowProps) => (
    <div className="arrow next" onClick={onClick}>
      <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.207402 1.21138C-0.0691313 0.934368 -0.0691313 0.484795 0.207402 0.207785C0.483935 -0.0692253 0.932735 -0.0692252 1.20927 0.207785L12.6061 11.6242C12.8826 11.9012 12.8826 12.3508 12.6061 12.6278L1.20927 24.0443C0.932733 24.3213 0.483933 24.3213 0.2074 24.0443C-0.0691333 23.7672 -0.0691333 23.3177 0.2074 23.0407L11.1033 12.126L0.207402 1.21138Z" fill="white" />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div className="arrow prev" onClick={onClick}>
      <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6061 23.0406C12.8826 23.3176 12.8826 23.7672 12.6061 24.0442C12.3295 24.3212 11.8807 24.3212 11.6042 24.0442L0.2074 12.6278C-0.0691331 12.3508 -0.069133 11.9012 0.2074 11.6242L11.6042 0.207757C11.8807 -0.0692526 12.3295 -0.0692526 12.6061 0.207757C12.8826 0.484767 12.8826 0.934341 12.6061 1.21135L1.7102 12.126L12.6061 23.0406Z" fill="white" />
      </svg>
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

  return <Slider {...settings} className={className}>{children}
    <div style={{ display: 'none' }}>
      <style>{`
        .slick-dots li button {
          background: ${dotColor};
        }
        .slick-dots li.slick-active button {
          background: ${activeDotColor};
        }
      `}</style>
    </div>
  </Slider>;
};
