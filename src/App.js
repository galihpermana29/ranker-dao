import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  Home,
  LitePaper,
  MintBadge,
  RankerToken,
  Staking,
  SuccessPage,
} from './pages';
import { Footer, Header } from './components';

import './scss/global.scss';
import 'animate.css';
import MainContext from 'contexts/MainContext';
import DetailShop from 'pages/shop/detail';
import OurShop from 'pages/shop';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mint-badge" element={<MintBadge />} />
            <Route
              path="/mint-badge/success/:badge"
              element={<SuccessPage />}
            />
            <Route path="/ranker-token" element={<RankerToken />} />
            <Route path="/litepaper" element={<LitePaper />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/shop" element={<OurShop />} />
            <Route path="/shop/:id" element={<DetailShop />} />
          </Routes>
          <Footer />
        </MainContext>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
