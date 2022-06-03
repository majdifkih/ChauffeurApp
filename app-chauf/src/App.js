//  import Sidebar from "./components/sidebar/Sidebar"
import { HashRouter, Routes, Route } from "react-router-dom";
//  import Navbar from "./components/navbar/Navbar";
import DeliveryListe from "./pages/Deliveryliste";

function App() {

  return (
    
      <HashRouter>
         {/* <Sidebar/>
        <Navbar/>  */}
        <Routes>
          <Route path="/">
           <Route path="" element={<DeliveryListe/>}/>
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
