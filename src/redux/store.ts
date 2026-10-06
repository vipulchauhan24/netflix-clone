import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { MovieApi } from '../redux/reducers/mflixReducer';
import modelMovieReducer from "../redux/reducers/modelSlice"
export const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
    modelMovie:modelMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieApi.middleware),
})
setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch