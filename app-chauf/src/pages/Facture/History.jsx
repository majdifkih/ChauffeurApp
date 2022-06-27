import "./History.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import moment from 'moment';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

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

// function createData(name, date, total, status) {
//   return { name, date, total, status};
// }

// const rows = [
//   createData('Chocotom','22/01/2022','1.500','paid'),
//   createData('SAFIA eau','22/01/2022',' 3.650','unpaid'),
//   createData('Saida biscuit','22/01/2022',' 7.500 ','paid'),
//   createData('Maestro','22/01/2022',' 4000','unpaid'),
//   createData('Saida','22/01/2022',' 4.100','paid'),
//   createData('Crostina','22/01/2022',' 2.700','unpaid'),
//   createData('Ice cream','22/01/2022',' 1.800','paid'),
//   createData('Fidji','22/01/2022',' 800','unpaid'),
//   createData('Cupcake','22/01/2022',' 900','paid'),
//   createData('Chocolat','22/01/2022','700',' unpaid'),
//   createData('Coca cola','22/01/2022','2000',' paid'),
//   createData('Fanta','22/01/2022','1.100',' unpaid'),
//   createData('Apla','22/01/2022','5.500',' paid'),
//   createData('kaki','22/01/2022','4.500 ','unpaid'),
//   createData('Gaucho ','22/01/2022','2.500',' paid'),
// ];
 function HistoryListe() {
  const [rows, setRows] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();
  const AddStat = (id,type)=>{
    if (type==='unpaid') {
     axios.get(`https://qlogisticsapp.herokuapp.com/FactureAPI/fstatus?id=${id}`).then(res=>{
         if(res.data.success){
             alert("Status updated")
         }
     }
     )
     

    }
    
 }
 const GetFac = (id)=>{
   axios.get(`http://localhost:3001/FactureAPI/factures?id=${id}&type=vehicule`).then(res=>{
        if(res.data.success){
            console.log(res.data);
            setRows(res.data.existingPosts);

        }})}

  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
    
},[])
useEffect(() => {
  GetFac(localStorage.getItem('vehicule'));
}
)
const changeRoute = (id) => {
  navigate(`/infofacture/${id}`)
}

  return (

  <div className="historymain">
    <div className="side"><Sidebar/></div>
    <div className="history">
    <Navbar/>

<div className="headhistory">
      <div className="titlehistory">
      <div className="headhist">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Invoice</div> <div>History</div>
        </div> 
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>
<div className="buttonhistory">




</div>

</div>

  <div className="tabhistory">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell className="cellprod">Store</StyledTableCell>
            <StyledTableCell className="cell" >Date</StyledTableCell>
            <StyledTableCell className="cell"  >Total</StyledTableCell>
            <StyledTableCell  className="cell">Status</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).filter((val)=>{
            if (searchTerm =="")
            {
              return val
            }
            else if(val.store.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val,key) => (
            <StyledTableRow className="row" key={key}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row" className="cellprod">{val.store.name}</StyledTableCell>
              <StyledTableCell className="cell" >{moment(val.date).format('YYYY/MM/DD')}</StyledTableCell>
              <StyledTableCell className="cell" >{val.total}</StyledTableCell>
              <StyledTableCell className={`status ${val.status}`} onClick={()=>AddStat(val._id,val.status)} >{val.status}</StyledTableCell>
              <StyledTableCell className="cell"><i class="material-icons" onClick={()=>changeRoute(val._id)}>info_outline</i></StyledTableCell>
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
export default HistoryListe
