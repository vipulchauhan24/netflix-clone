import React from "react";
import { useDispatch } from "react-redux";
import { movieModel, selectMovie } from "../redux/reducers/modelSlice";

interface Props {
  item: any;
  keyValue:any;
}
export const MovieCard: React.FC<Props> = ({ item,keyValue }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div key={keyValue} className="row mx-0 px-1 px-md-1">
        <div
          className="col-12 px-0 mx-0 mb-5 healthy-col"
          onClick={() => {
            dispatch(selectMovie(item));
            dispatch(movieModel());
          }}
        >
          <img
            alt="avtar"
            src={`${item.poster}`}
            className="img-fluid"
            style={{ height: "350px" }}
          />
          <p
            style={{ textAlign: "left" }}
            className="card-text mx-3 mx-md-0 my-0 mt-md-2 text-white font-weight-bold "
          >
            {item.title}
          </p>
          <p
            className="card-title-text mx-3 mx-md-0 my-2 my-md-0 text-left"
            style={{ textAlign: "left", color: "red" }}
          >
            {item.languages}
          </p>
          <p
            style={{
              backgroundColor: "#0000ff",
              borderRadius: "5px",
              display: "inline-block",
            }}
            className="card-text py-1 px-1 mx-3 mx-md-0 my-3 text-white font-weight-bold text-left"
          >
            {item.imdb.rating}/10
          </p>
        </div>
      </div>
    </div>
  );
};
