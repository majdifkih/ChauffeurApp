import "./Deliveryliste.scss";
import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import FullTable from "../components/table/FullTable";




function createData(name,position, status) {
  return { name,position, status };
}

const rows = [
  createData('Baraka','Mahdia','Incomplete'),
  createData('Hanout','Rcharcha','Done'),
  createData('Carrefour','Ksour Essef','Done'),
  createData('Mahida shop','Maloulech','Done'),
  createData('Aotriya','Souasi','Incomplete'),
  createData('Hanout lhoma','Monastir','Incomplete'),
  createData('Magasin','Sousse','Done'),
  createData('Store','Sfax','Done'),
  createData('Drugstore','Rajich','Done'),
  createData('Magasin','Mahdia','Incomplete'),
  createData('Mahida drugstore','Monastir','Incomplete'),
  createData('Store','Rajich','Done'),
  createData('Mahida shop','Sousse','Done'),
  createData('Hanout','Mahdia','Done'),
  createData('Aotriya','Mahdia','Incomplete'),
];
 function DeliveryListe() {
   
 
  return (

  <div className="deliverymain">
    <div className="side"><Sidebar/></div>
    <div className="delivery">
    <Navbar/>

<div className="headdelivery">
      <div className="titledelivery">
      deliverys
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>

</div>

 <FullTable rows={rows} type="oui" title="Stores" stat="Etat"/>
  </div>
  </div>
  
  );
}
export default DeliveryListe
