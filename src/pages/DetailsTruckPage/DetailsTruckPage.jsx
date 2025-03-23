import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import { fetchTruck } from "../../redux/truck/operation";

import additionalImg from "../../assets/img/additional-img.jpg";
import additionalImg2x from "../../assets/img/additional-img@2x.jpg";

import css from "./DetailsTruckPage.module.css";

const DetailsTruckPage = () => {
  const { truckId } = useParams();
  const truckInfo = useSelector(selectTruckItems);
  const path = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruck(truckId));
    window.scrollTo(0, 0);
  }, [dispatch, truckId]);

  if (truckInfo.length === 0) {
    return;
  }

  const { name, price, rating, location, description, reviews, gallery } =
    truckInfo;

  const formattedLocation = location.split(", ").reverse().join(", ");

  return (
    <section className={css.truckInfoSection}>
      <div className={css.truckInfoContainer}>
        <h2 className={css.truckName}>{name}</h2>
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
        <h2 className={css.truckPrice}>{`€ ${Number(price).toFixed(2)}`}</h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map((image) => (
          <li className={css.galleryListItem} key={image.original}>
            <img
              className={css.truckImg}
              src={image.original}
              alt="photo truck"
            />
          </li>
        ))}
        <li className={css.galleryListItem}>
          <img
            className={css.truckImg}
            srcSet={`${additionalImg} 1x, ${additionalImg2x} 2x`}
            src={additionalImg}
            alt="photo truck"
          />
        </li>
      </ul>
      <p className={css.textDescriprion}>{description}</p>
      <ul className={css.listLinks}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ||
              path.pathname.endsWith("features") ||
              !path.pathname.includes("reviews")
                ? css.active
                : css.link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive && path.pathname.includes("reviews")
                ? css.active
                : css.link
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default DetailsTruckPage;
