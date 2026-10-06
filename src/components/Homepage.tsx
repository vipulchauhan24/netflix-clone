import { useGetAllPostQuery } from "../redux/reducers/mflixReducer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../utils";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MovieCard } from "./MovieCard";

export function MovieList() {

  const checkGenre = useSelector((state: RootState) => state.modelMovie.genre);
  const movieList = useGetAllPostQuery(0);
  if (movieList.isLoading) return <div>Loading....</div>;
  if (movieList.isError) {
    return <h1>An error occured {movieList.error}</h1>;
  }
  return (
    <div>
      <div className="row mx-0 my-3 mb-4 mb-md-5">
        <div className="col-12 px-0" style={{ position: "relative" }}>
          <Carousel
            draggable={true}
            infinite={true}
            dotListClass="custom-dot-list-style"
            responsive={responsive}
            autoPlay={true}
            showDots={false}
          >
            {checkGenre
              ? movieList.data.data
                  .filter((person: any) => person.genres.includes(checkGenre))
                  .map((item: any, i: any) => (
                    <MovieCard item={item} keyValue={i} />
                  ))
              : movieList.data.data.map((item: any, i: any) => (
                <MovieCard item={item} keyValue={i} />
                ))}
          </Carousel>
        </div>
      </div>

    </div>
  );
}
