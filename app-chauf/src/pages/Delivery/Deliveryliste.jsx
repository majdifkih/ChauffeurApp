import "./Deliveryliste.scss";
import * as React from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link ,useNavigate} from "react-router-dom";
import { useEffect } from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    borderBottom: "none",

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
   
  },
}));

// function createData(name,position, status) {
//   return { name,position, status };
// }

// const rows = [
//   createData('Baraka','Mahdia','Incomplete'),
//   createData('Hanout','Rcharcha','Done'),
//   createData('Carrefour','Ksour Essef','Done'),
//   createData('Mahida shop','Maloulech','Done'),
//   createData('Aotriya','Souasi','Incomplete'),
//   createData('Hanout lhoma','Monastir','Incomplete'),
//   createData('Magasin','Sousse','Done'),
//   createData('Store','Sfax','Done'),
//   createData('Drugstore','Rajich','Done'),
//   createData('Magasin','Mahdia','Incomplete'),
//   createData('Mahida drugstore','Monastir','Incomplete'),
//   createData('Store','Rajich','Done'),
//   createData('Mahida shop','Sousse','Done'),
//   createData('Hanout','Mahdia','Done'),
//   createData('Aotriya','Mahdia','Incomplete'),
// ];
 function DeliveryListe() {
   const[rows,setrows]=React.useState([]);
   const GetDelivery = (id) => {
    axios.get(`https://qlogisticsapp.herokuapp.com/DeliveryAPI/vehicule?id=${id}`).then(res=>{
      console.log(res.data)
      setrows(res.data.delivery)
    }
    )
  }
  const getMaps = (lat,lon) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`)
  }
  

  const [theAddress,setTheAddress] = React.useState("");
  const address= (lat,lon) => {
    axios.get(`http://api.positionstack.com/v1/reverse?access_key=e7b7c50f25c942f3c3bf52e1cf825d3b&query=${lat},${lon}`).then(res => {
      setTheAddress(res.data.data[0].county);
      
      console.log(res.data.data[0].county);
  })}
  useEffect(()=>{
    GetDelivery(localStorage.getItem("vehicule"))
  },[]
  )


  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  return (

  <div className="deliverymain">
    <div className="side"><Sidebar/></div>
    <div className="delivery">
    <Navbar/>

<div className="headdelivery">
      <div className="titledelivery">
      <div className="headdeliv">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Deliverys</div>
        </div>
      
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>

</div>

<div className="tabdelivery">
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow className="row" >
                
              <StyledTableCell  align="left" className ="cellname" >Stores</StyledTableCell>
              <StyledTableCell  className="circle" >Positions</StyledTableCell>
              <StyledTableCell align="center" className="stat">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <StyledTableRow className="row" key={row.id}>
                <StyledTableCell width={"20%"} height={"5%"} component="th" scope="row" className ="cellname"><label for="name">{row.store?.name}</label>
                  
                </StyledTableCell>
                <StyledTableCell className ="circle" value={address(row.store.positionStore.latitude,row.store.positionStore.longitude)}>{theAddress} </StyledTableCell>
                <StyledTableCell className="line"  >
                 <div className={`reguliere ${row.status}`}>{row.status}</div><i class="material-icons" onClick={()=>getMaps(row.store.positionStore.latitude,row.store.positionStore.longitude)}>pin_drop</i></StyledTableCell>
                 </StyledTableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
  </div>
  
  );
}
export default DeliveryListe
