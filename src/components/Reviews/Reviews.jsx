import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";

import BookingForm from "../BookingForm/BookingForm";
import StarRating from "../StarRating/StarRating";

import css from "./Reviews.module.css";

const Reviews = () => {
  const truckInfo = useSelector(selectTruckItems);

  const { reviews } = truckInfo;

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.map((review, i) => (
          <li key={i}>
            <div className={css.nameContainer}>
              <div className={css.logoName}>
                <p className={css.logoNameLetter}>
                  {review.reviewer_name[0].toUpperCase()}
                </p>
              </div>
              <div>
                <p className={css.textName}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.textComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};

export default Reviews;
