import Sidebar from "./components/sidebar/Sidebar"
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {

  return (
    
      <HashRouter>
        <Sidebar/>
        <Navbar/>
        <Routes>
          <Route path="/">
           
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
