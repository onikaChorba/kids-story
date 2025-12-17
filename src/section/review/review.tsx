import "./index.css";
import { Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CustomSlider } from "../../components";
import { icons } from "../../icons";

const { Paragraph } = Typography;
interface Review {
  text: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <section className="reviews">
      <h2>Reviews of the garden</h2>
      <CustomSlider className="slider" slidesToShow={2}>
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <Flex gap="small" align="center" justify="flex-start">
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
            <p className="review-text">
              <Paragraph
                ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}
              >
                {review.text}
              </Paragraph>
            </p>
          </div>
        ))}
      </CustomSlider>
      <div className='triangle-pink'>
        <img src={icons.trianglePink} />
      </div>
    </section>
  );
};

export { Reviews }