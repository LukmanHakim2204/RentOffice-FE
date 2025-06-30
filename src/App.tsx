import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import BookOffice from "./pages/BookOffice";
import CityDetail from "./pages/CityDetail";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />}></Route>
        <Route path="/office/:slug" element={<Details />}></Route>
        <Route path="/office/:slug/book" element={<BookOffice />}></Route>
        <Route path="/city/:slug" element={<CityDetail />}></Route>
        <Route path="/success-booking" element={<SuccessBooking />}></Route>
        <Route path="/check-booking" element={<CheckBooking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
