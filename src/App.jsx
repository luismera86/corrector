import { DeliveryOnePage, ReportOnePage } from './pages'
import { Route, Routes } from 'react-router-dom'

import { NavBar } from './components'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/delivery1' element={<DeliveryOnePage />} />
        {/* <Route path='/delivery2' element={<DeliveryTwoPage />} />
        <Route path='/delivery3' element={<DeliveryThreePage />} /> */}
        <Route path='/reportone' element={<ReportOnePage />} />
      </Routes>
      </>
  )
}

export default App
