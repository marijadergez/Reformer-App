import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouteNames } from './constants'
import Home from './pages/Home';
import Individualni from './pages/Individualni/Individualni';
import Izbornik from './components/Izbornik'
import { IME_APLIKACIJE } from './constants'
import Grupni from './pages/Grupni/Grupni';





function App() {
  return (
    <>
      <Izbornik />
      <Container className="mt-4">
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.INDIVIDUALNI} element={<Individualni />} />
          <Route path={RouteNames.GRUPNI} element={<Grupni />} />
        </Routes>
      </Container>
      <hr />
      <div className="text-center">
        &copy; {new Date().getFullYear()} | MDergez, obrt za usluge | {IME_APLIKACIJE}
      </div>
    </>
  )
}

export default App