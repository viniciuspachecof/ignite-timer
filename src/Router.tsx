import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { History } from './pages/history/index.tsx';
import { DefaultLayout } from './layouts/defaultlayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
