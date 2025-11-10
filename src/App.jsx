import { useState } from 'react'
import Navbar from './components/common/navbar.jsx'
import { Routes, Route } from 'react-router-dom';

import TalentPage from './pages/TalentPage.jsx';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<TalentPage />} />
        </Routes>
    </>
  )
}

export default App
