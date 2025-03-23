import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { BsSuitHeart } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";

import { selectIsFavoriteId } from "../../redux/favorites/selectors";
import { toggleFavoriteTruck } from "../../redux/favorites/slice";

import Category from "../Category/Category";

import css from "./CatalogTruckCard.module.css";

const CatalogTruckCard = ({ truck }) => {
  const favorite = useSelector(selectIsFavoriteId);
  const dispatch = useDispatch();
  const handleIsFavorite = () => {
    dispatch(toggleFavoriteTruck({ id: truck.id }));
  };

  const { name, price, rating, location, description, reviews, gallery, id } =
    truck;

  const formattedLocation = location.split(", ").reverse().join(", ");

  return (
    <>
      <div className={css.imgContainer}>
        <img className={css.img} src={gallery[0].thumb} alt="Truck" />
      </div>
      <div className={css.truckInfo}>
        <div className={css.costContainer}>
          <h2 className={css.truckName}>{name}</h2>
          <div className={css.priceContainer}>
            <h2 className={css.truckPrice}>{`€ ${Number(price).toFixed(
              2
            )}`}</h2>
            <button
              onClick={handleIsFavorite}
              type="button"
              className={css.buttonHeart}
            >
              <BsSuitHeart
                className={clsx(
                  favorite.some((item) => item.id === id)
                    ? css.active
                    : css.disabled
                )}
              />
            </button>
          </div>
        </div>
        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{formattedLocation}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.categoryContainer}>
          <Category truckInfo={truck} />
        </div>
        <Link className={css.link} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </>
  );
};

export default CatalogTruckCard;
