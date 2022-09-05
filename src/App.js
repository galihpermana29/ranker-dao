import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RankerToken, Home, LitePaper, MintBadge, Staking } from './pages';
import { Footer, Header } from './components';

import './components/scss/global.scss';
import 'animate.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint-badge" element={<MintBadge />} />
        <Route path="/ranker-token" element={<RankerToken />} />
        <Route path="/litepaper" element={<LitePaper />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
