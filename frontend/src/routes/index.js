import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pituTools.tk/ -> HomePage
//pituTools.tk/:code -> RedirectPage
//pituTools.tk/:code/stats - > StatsPage

import HomePage from '../pages/HomePage'
import RedirectPage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoudPage from '../pages/NotFoudPage'

/*
  A partir da v6 do (react-router-dom) ficou assim:
  Routes no lugar de Switch.
  (exato) desaparece.
  (element) no lugar de (component).
  Uso de <tag /> no (element).
*/
function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:code" element={<RedirectPage />} />
        <Route path="/:code/stats" element={<StatsPage />} />
        <Route path="/*" element={<NotFoudPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
