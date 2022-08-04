import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RankerToken, Home, LitePaper, MintBadge } from './pages';
import { Header, Footer } from './components';
import './components/scss/global.scss';
import 'animate.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint-badge" element={<MintBadge />} />
        <Route path='/ranker-token' element={<RankerToken />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/litepaper" element={<LitePaper />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
