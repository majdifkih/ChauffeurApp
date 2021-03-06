import "./InfoFacture.scss";
import * as React from 'react';
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate,useParams } from "react-router-dom";
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

// function createData(name, Quantity, Price, Total) {
//   return { name, Quantity, Price, Total};
// }

// const rows = [
//   createData('Chocotom','111','4.000DT','1.500'),
//   createData('SAFIA eau','386','4.000DT','3.650'),
//   createData('Saida biscuit','696','4.000DT','7.500'),
//   createData('Maestro','672','4.000DT','4000'),
//   createData('Saida','226','4.000DT','4.100'),
//   createData('Crostina','172','4.000DT','2.700'),
//   createData('Ice cream','147','4.000DT','1.800'),
//   createData('Fidji','391','4.000DT','800'),
//   createData('Cupcake','973','4.000DT','900'),
//   createData('Chocolat','537','4.000DT','700'),
//   createData('Coca cola','876','4.000DT','2000'),
//   createData('Fanta','314','4.000DT','1.100'),
//   createData('Apla','555','4.000DT','5.500'),
//   createData('kaki','222','4.000DT','4.500'),
//   createData('Gaucho ','231','4.000DT','2.500'),
// ];
 function InfoFacture() {
const {id} = useParams()
const [rows,setRows]= React.useState([])
const [total,setTotal]= React.useState(0)
const getFacture = ()=> {
  console.log(id)
  axios.get(`https://qlogisticsapp.herokuapp.com/FactureAPI/factures?id=${id}&type=One`).then(res=>{
    if (res.data.success){
      console.log("ok")
      console.log(res.data)
      setRows(res.data.facture.stock)
      setTotal(res.data.facture.total)
    }
  })
}
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
useEffect(()=>{
  getFacture()
})
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const navigate=useNavigate()
  // Avoid a layout jump when reaching the last page with empty rows.
 
  


  return (

  <div className="infofacturemain">
    <div className="side"><Sidebar/></div>
    <div className="infofacture">
    <Navbar/>

<div className="headinfofacture">
      <div className="titleinfofacture">
      <div className="headfactureinfo">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Invoice</div> <div>Details</div>
        </div>
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>

</div>






  <div className="tabinfofacture">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell className="cellprod">Product</StyledTableCell>
            <StyledTableCell className="cell" >Quantity</StyledTableCell>
            <StyledTableCell  className="cell">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row._id}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row" className="cellprod"><input type="radio" className="radio"/><label for="name">{row.products.productName}</label>
                
              </StyledTableCell>
              <StyledTableCell className="cell" >{row.quantity}</StyledTableCell>

              <StyledTableCell className="cell" >{row.quantity*row.products.productPrice}</StyledTableCell>
              
            </StyledTableRow>
          ))}
          
        </TableBody>
        
      </Table>
    </TableContainer>
  </div>
  
  
  <div className="devis">
    {/* <div className="deviscont">Sub Total:7.000 DT </div>
    <div className="deviscont">TVA:9% </div> */}
    <div className="deviscont">TOTAL:{total}</div>
  </div>

  </div>
  </div>
  
  );
}
export default InfoFacture
