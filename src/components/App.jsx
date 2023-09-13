import Header from "./Header/Header";
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('./Home/Home'));
// const Movies = lazy(() => import('./Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Header />
      {/* <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense> */}
    </div>
  );
};
