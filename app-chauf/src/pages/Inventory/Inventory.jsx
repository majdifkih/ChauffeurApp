import "./Inventory.scss";
import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import { useTheme } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Popup from "../../components/Popup/Popup";
import AddIcon from '@mui/icons-material/Add';
import PopupAdd from "../../components/Popup/PopupAdd";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link,useNavigate } from "react-router-dom";

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

function createData(name, code, price, quantity, status) {
  return { name, code, price, quantity,status};
}

const rows = [
  createData('Chocotom','111111','1.500','300','done'),
  createData('SAFIA eau','111111',' 3.650','300','undone'),
  createData('Saida biscuit','111111',' 7.500 ','300','done'),
  createData('Maestro','111111',' 4000','300','undone'),
  createData('Saida','111111',' 4.100','300','done'),
  createData('Crostina','111111',' 2.700','300','undone'),
  createData('Ice cream','111111',' 1.800','300','done'),
  createData('Fidji','111111',' 800','300','undone'),
  createData('Cupcake','111111',' 900','300','done'),
  createData('Chocolat','111111','700','300',' undone'),
  createData('Coca cola','111111','2000','300',' done'),
  createData('Fanta','111111','1.100','300',' undone'),
  createData('Apla','111111','5.500','300',' done'),
  createData('kaki','111111','4.500 ','300','undone'),
  createData('Gaucho ','111111','2.500','300',' done'),
];
 function InventoryListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const[searchTerm,setSearchTerm]=useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])

  return (

  <div className="inventorymain">
    <div className="side"><Sidebar/></div>
    <div className="inventory">
    <Navbar/>

<div className="headinventory">
      <div className="titleinventory">
      <div className="headhist">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Inventory</div>
        </div> 
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>
<div className="buttoninventory">




</div>

</div>

  <div className="tabinventory">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell  className="cellproduct" ><input type="radio" className="radio"  />Product</StyledTableCell>
            <StyledTableCell className="cell" >Code</StyledTableCell>
            <StyledTableCell className="cell"  >Price</StyledTableCell>
            <StyledTableCell  className="cell">Quantity</StyledTableCell>
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
            else if(val.productName.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val,key) => (
            <StyledTableRow className="row" key={key}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row" className="cellproduct" ><input type="radio" name="fleet" className="radio"/>{val.name}</StyledTableCell>
              <StyledTableCell className="cell" >{val.code}</StyledTableCell>
              <StyledTableCell className="cell" >{val.price}</StyledTableCell>
              <StyledTableCell className="cell" >{val.quantity}</StyledTableCell>
              <StyledTableCell className={`status ${val.status}`} >{val.status}</StyledTableCell>
             
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
export default InventoryListe
