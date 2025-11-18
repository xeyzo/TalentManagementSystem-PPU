import { useState } from 'react'
import Navbar from './components/common/navbar.jsx'
import { Routes, Route } from 'react-router-dom';

import TalentPage from './pages/TalentPage.jsx';
import TalentPageDetail from './pages/TalentPageDetail.jsx';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<TalentPage />} />
          <Route path="/TalentDetail" element={<TalentPageDetail />} />
        </Routes>
    </>
  )
}

export default App
