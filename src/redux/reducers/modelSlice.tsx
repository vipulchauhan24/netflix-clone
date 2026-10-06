import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modelState {
  movie: any,
  movie2:any,
  genre:any,
  model:boolean,
}

const initialState: modelState = {
  movie: { title: null, rating: null },
  movie2:{},
  genre:null,
  model:false,
};

export const modelSlice = createSlice({
  name: "modelMovie",
  initialState,
  reducers: {
    selectMovie: (state, action: PayloadAction<any>) => {
      state.movie = action.payload;
    },
    fetchAllMovie: (state, action: PayloadAction<any>) => {
      state.movie2 = action.payload;
      
    },
    setGenre: (state, action: PayloadAction<any>) => {
      state.genre = action.payload;
      
    },
    movieModel: (state) => {
      state.model = !state.model
      
    },
  },
});

export const { selectMovie,fetchAllMovie,setGenre,movieModel } = modelSlice.actions;

export default modelSlice.reducer;
