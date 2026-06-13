import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { CategoryPage } from '../pages/CategoryPage';

export const AppRoutes = () => {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/popular" element={<CategoryPage />} />
            <Route path="/top-rated" element={<CategoryPage />} />
            <Route path="/upcoming" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};
