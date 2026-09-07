import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouteNames } from './constants'
import Home from './pages/Home';

import Izbornik from './components/Izbornik'
import { IME_APLIKACIJE } from './constants'





function App() {
  return (
    <>
      <Izbornik />
      <Container className="mt-4">
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
        </Routes>
      </Container>
      <hr />
      <div className="text-center">
        &copy; {new Date().getFullYear()} {IME_APLIKACIJE}
      </div>
    </>
  )
}

export default App