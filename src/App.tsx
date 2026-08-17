import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home/Home';
import Projects from '@/pages/Projects/Projects';
import ProjectDetail from '@/pages/ProjectDetail/ProjectDetail';
import Clients from '@/pages/Clients/Clients';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';

const App = (): ReactElement => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="clients" element={<Clients />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
