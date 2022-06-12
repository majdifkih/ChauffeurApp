//  import Sidebar from "./components/sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
import Home from "./pages/Home/Home";
//  import Navbar from "./components/navbar/Navbar";
import FactureListe from "./pages/Facture/Facture";
import AddStore from "./pages/Store/AddStore";

function App() {

  return (
    
      <BrowserRouter>
         {/* <Sidebar/>
        <Navbar/>  */}
        <Routes>
          <Route path="/">
          <Route path="" element={<Home/>}/>
          <Route path="addstore" element={<AddStore/>}/>
           <Route path="deliverylist" element={<DeliveryListe/>}/>
           <Route path="facture" element={<FactureListe/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
