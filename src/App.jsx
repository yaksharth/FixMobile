import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RepairDiary from './pages/RepairDiary';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScreenReplacement from './pages/ScreenReplacement';
import BatteryReplacement from './pages/BatteryReplacement';
import WaterDamageRepair from './pages/WaterDamageRepair';
import ChargingPortRepair from './pages/ChargingPortRepair';
import CameraRepair from './pages/CameraRepair';
import MoreServices from './pages/MoreServices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="diary" element={<RepairDiary />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="service/screen-replacement" element={<ScreenReplacement />} />
          <Route path="service/battery-replacement" element={<BatteryReplacement />} />
          <Route path="service/water-damage-repair" element={<WaterDamageRepair />} />
          <Route path="service/charging-port-repair" element={<ChargingPortRepair />} />
          <Route path="service/camera-repair" element={<CameraRepair />} />
          <Route path="service/more-services" element={<MoreServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

