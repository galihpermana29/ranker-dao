import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, About } from './pages';
import { Header, Footer } from './components';

import './components/scss/global.scss';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
