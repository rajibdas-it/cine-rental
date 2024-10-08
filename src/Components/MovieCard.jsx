/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetails from "./MovieDetails";
import { MovieCartContext } from "../context";
import { toast } from "react-toastify";
const MovieCard = ({ movie }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [selectedMovie, setSelectMovie] = useState(null);

  // const { cartData, setCartData } = useContext(MovieCartContext); //using useState
  const { state, dispatch } = useContext(MovieCartContext);

  const handleMovieDetails = (e, movie) => {
    e.preventDefault();
    setIsModalShow(true);
    setSelectMovie(movie);
  };
  const handleModalClose = () => {
    setIsModalShow(false);
    setSelectMovie(null);
  };

  const handleCartData = (e, movie) => {
    e.stopPropagation();
    const existingMovie = state.cartData.find((item) => item.id === movie.id);
    if (existingMovie) {
      toast.error("Movie Already Added", {
        position: "bottom-right",
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success("Movie added successfully", {
        position: "bottom-right",
      });
      // setCartData([...cartData, movie]); //using useState
    }
  };

  return (
    <>
      {isModalShow && (
        <MovieDetails movie={selectedMovie} onclose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={(e) => handleMovieDetails(e, movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating ratingValue={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleCartData(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
