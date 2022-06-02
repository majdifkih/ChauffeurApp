import Sidebar from "./components/sidebar/Sidebar"
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    
      <HashRouter>
        <Sidebar/>
        <Routes>
          <Route path="/">
           
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
