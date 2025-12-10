import "./index.css";
import { Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CustomSlider } from "../../components/custom-slider/custom-slider";

interface Review {
  text: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <section className="reviews">
      <h2>Reviews of the garden</h2>
      <CustomSlider className="slider" slidesToShow={2}>
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <Flex gap="small" align="cenetr" justify="flex-start">
              <div>
                {review.avatar ? (
                  <img src={review.avatar} alt={review.author} className="review-avatar" />
                ) : (
                  <div className="review-avatar-icon">
                    <UserOutlined style={{ fontSize: 30, color: "white" }} />
                  </div>
                )}
              </div>
              <Flex vertical align="" justify="center" gap="small">
                <h4 className="review-author">{review.author}</h4>
                {review.role && <p className="review-role">{review.role}</p>}
              </Flex>
            </Flex>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </CustomSlider>
      <div className='triangle-pink'>
        <svg width="241" height="180" viewBox="0 0 241 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.96914e-05 -3.67064e-05C34.8938 57.2022 69.7861 114.412 104.677 171.629C106.511 174.625 108.666 177.886 112.07 178.786C116.632 179.998 120.974 176.449 124.376 173.17L232.63 68.913C237.726 64.0488 243.135 56.5861 239.309 50.7077C236.962 47.1561 232.272 46.1635 228.085 45.4899C150.876 33.271 84.8516 12.5915 7.60651 0.406162L-3.96914e-05 -3.67064e-05Z" fill="#F3ACC8" />
        </svg>
      </div>
    </section>
  );
};