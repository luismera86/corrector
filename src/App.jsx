import { DeliveryOnePage, DeliveryTowPage, ReportOnePage, ReportTowPage } from './pages'
import { Route, Routes } from 'react-router-dom'

import { NavBar } from './components'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/delivery1' element={<DeliveryOnePage />} />
        <Route path='/delivery2' element={<DeliveryTowPage />} />
        {/* <Route path='/delivery3' element={<DeliveryThreePage />} />  */}
        <Route path='/reportone' element={<ReportOnePage />} />
        <Route path='/reporttow' element={<ReportTowPage />} />
      </Routes>
      </>
  )
}

export default App
