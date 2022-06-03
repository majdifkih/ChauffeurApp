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
  createData('IVECO','11.33','NonReg'),
  createData('TOYOTA','12.43','regular'),
  createData('VOLVO','11.32','regular'),
  createData('OM','11.54','regular'),
  createData('SCANIA','14.33','NonReg'),
  createData('RENAULT','11.55','NonReg'),
  createData('NISSAN','10.76','regular'),
  createData('MISUBISHI','12.452','regular'),
  createData('MERCEDES','12.333','regular'),
  createData('RENAULT','12.445','NonReg'),
  createData('VOLVO','11.995','NonReg'),
  createData('MERCEDES','13.564','regular'),
  createData('NISSAN','11.2466','regular'),
  createData('IVECO','11.743','regular'),
  createData('IVECO','15.455','NonReg'),
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
