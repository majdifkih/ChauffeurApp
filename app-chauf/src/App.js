//  import Sidebar from "./components/sidebar/Sidebar"
import { HashRouter, Routes, Route } from "react-router-dom";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
//  import Navbar from "./components/navbar/Navbar";
import InventoryListe from "./pages/Inventory/Inventory";

function App() {

  return (
    
      <HashRouter>
         {/* <Sidebar/>
        <Navbar/>  */}
        <Routes>
          <Route path="/">
           <Route path="deliverylist" element={<DeliveryListe/>}/>
           <Route path="inventory" element={<InventoryListe/>}/>
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
