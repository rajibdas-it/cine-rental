/* eslint-disable react/prop-types */
import Star from "../assets/star.svg";

const Rating = ({ ratingValue }) => {
  const stars = Array(ratingValue).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
