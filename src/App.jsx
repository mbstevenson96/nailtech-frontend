import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeShopper from './views/shopper/home/Home.jsx';
import ReadyMadeSets from './views/shopper/ReadyMadeSets.jsx';
import Customizer from './views/shopper/lab/Customizer.jsx';
import NailTechs from './views/shopper/techs/NailsTechs.jsx';
import HomeNailTech from './views/tech/home/Home.jsx';
import Orders from './views/tech/orders/Orders.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Shopper Routes */}
        <Route path="/shopper/home" element={<HomeShopper />} />
        <Route path="/shopper/products" element={<ReadyMadeSets />} />
        <Route path="/shopper/customizer" element={<Customizer />} />
        <Route path="/shopper/nailtechs" element={<NailTechs />} />

        {/* Nail Tech Routes */}
        <Route path="/nailtech/home" element={<HomeNailTech />} />
        <Route path="/nailtech/orders" element={<Orders />} />
        {/* <Route path="/nailtech/addservice" element={<AddService />} /> */}

        {/* Default Route */}
        <Route path="/" element={<HomeShopper />} />
      </Routes>
    </Router>
  );
}
