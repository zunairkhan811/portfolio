import React, { useContext } from 'react';
import {
  Route, BrowserRouter as Router, Routes, useNavigate,
} from 'react-router-dom';
import { BlogPage, Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  React.useEffect(
    () => {
      navigate('/');
    },
    [navigate],
  );

  return null;
}

export default App;
