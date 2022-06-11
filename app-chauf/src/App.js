//  import Sidebar from "./components/sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
//  import Navbar from "./components/navbar/Navbar";
import InventoryListe from "./pages/Inventory/Inventory";

function App() {

  return (
    
      <BrowserRouter>
         {/* <Sidebar/>
        <Navbar/>  */}
        <Routes>
          <Route path="/">
           <Route path="deliverylist" element={<DeliveryListe/>}/>
           <Route path="inventory" element={<InventoryListe/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
