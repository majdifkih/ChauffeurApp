//  import Sidebar from "./components/sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
import Home from "./pages/Home/Home";
//  import Navbar from "./components/navbar/Navbar";
import FactureListe from "./pages/Facture/Facture";
import AddStore from "./pages/Store/AddStore";
import HistoryListe from "./pages/Facture/History";
import InventoryListe from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import OrderListe from "./pages/Order/Order";
import InfoFacture from "./pages/Facture/InfoFacture";


function App() {

  return (
    
      <BrowserRouter>
         {/* <Sidebar/>
        <Navbar/>  */}
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route path="" element={<Home/>}/>
          <Route path="addstore" element={<AddStore/>}/>
           <Route path="deliverylist" element={<DeliveryListe/>}/>
           <Route path="facture" element={<FactureListe/>}/>
           <Route path="history" element={<HistoryListe/>}/>
           <Route path="inventory" element={<InventoryListe/>}/>
           <Route path="order" element={<OrderListe/>}/>
           <Route path="infofacture" element={<InfoFacture/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
