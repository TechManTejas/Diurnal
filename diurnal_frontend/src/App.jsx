import { Route, Routes } from "react-router-dom"
import MyNavbar from './Components/Navbar'
import Home from './Pages/Home'
import Vendors from './Pages/Vendors'
import VendorDetails from './Pages/VendorDetails'
import VendorDashboard from "./Pages/VendorDashboard"
import LoginRegistor from './Pages/LoginRegistor'
import MyFooter from './Components/Footer'

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vendors" element={<Vendors />} />
        <Route exact path="/vendordetails" element={<VendorDetails />} />
        <Route exact path="/dashboard" element={<VendorDashboard />} />
        <Route exact path="/auth" element={<LoginRegistor />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
