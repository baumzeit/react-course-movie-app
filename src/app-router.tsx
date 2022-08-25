import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/search-page';
import { Layout } from './components/layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="search/:search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
