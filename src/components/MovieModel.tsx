import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { movieModel } from "../redux/reducers/modelSlice";
import { RootState } from "../redux/store";

export function MovieModel() {
  const dispatch = useDispatch();
  const showModel = useSelector((state: RootState) => state.modelMovie.model);
  const selectMovieData = useSelector(
    (state: RootState) => state.modelMovie.movie
  );
  return (
    <div>
      <Modal
        show={showModel}
        onHide={() => {
          dispatch(movieModel());
        }}
      >
        <Modal.Header closeButton className="text-center bg-dark">
          <Modal.Title className="text-white">
            {selectMovieData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center bg-dark">
          <img
            alt="avtar"
            src={`${selectMovieData.poster}`}
            className="img-fluid"
            style={{ height: "350px", textAlign: "center" }}
          />
          <p
            style={{ textAlign: "left" }}
            className="card-text mx-3 mx-md-0 my-0 mt-md-2 text-center text-white font-weight-bold "
          >
            {selectMovieData.title}
          </p>
          <p
            className="card-title-text mx-3 mx-md-0 my-2 my-md-0 text-center"
            style={{ color: "red" }}
          >
            {selectMovieData.languages}
          </p>
          <p className="card-text text-white py-1 px-1 mx-3 mx-md-0 my-3 font-weight-bold text-center">
            {selectMovieData.genres}
          </p>
          <p className="card-text text-white py-1 px-1 mx-3 mx-md-0 my-3 font-weight-bold text-center">
            {selectMovieData.released}
          </p>
          <p className="card-text text-white py-1 px-1 mx-3 mx-md-0 my-3 font-weight-bold text-center">
            {selectMovieData.directors}
          </p>
        </Modal.Body>
        <Modal.Footer className="text-center bg-dark">
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(movieModel());
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
