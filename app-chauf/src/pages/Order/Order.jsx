import "./Order.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
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
import { Link, Navigate, useHref } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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


function createData(name, Quantity, Price, Total) {
  return { name, Quantity, Price, Total};
}

const rows = [
  createData('Chocotom','111','4.000DT','1.500'),
  createData('SAFIA eau','386','4.000DT','3.650'),
  createData('Saida biscuit','696','4.000DT','7.500'),

];
 function OrderListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const navigate = useNavigate();

  // Avoid a layout jump when reaching the last page with empty rows.
  
  const [addPopuporder, setAddPopuporder] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
  return (

  <div className="ordermain">
    <div className="side"><Sidebar/></div>
    <div className="order">
    <Navbar/>

<div className="headorder">
      <div className="titleorder">
      <div className="headord">
          <Link to="/" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>AddOrder</div>
        </div> 
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>
<div className="buttonorder">




</div>

</div>

<div className="delorder">
 
                <button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon sx={{ fontSize: 40 }} />Delete <div>selected</div></button>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="popdel"/>
                </div>
  <div className="taborder">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell className="cellprod"  ><input type="radio" className="radio"/><label for="store">Product</label></StyledTableCell>
            <StyledTableCell className="cell" >Quantity</StyledTableCell>
            <StyledTableCell className="cell"  >Price</StyledTableCell>
            <StyledTableCell  className="cell">Total</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row.name}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row"  className="cellprod"><input type="radio" className="radio"/>{row.name}</StyledTableCell>
              <StyledTableCell className="cell" >{row.Quantity}</StyledTableCell>
              <StyledTableCell className="cell" >{row.Price}</StyledTableCell>
              <StyledTableCell className="cell" >{row.Total}</StyledTableCell> 
              <StyledTableCell align="right" ><DeleteIcon className="icondel"/></StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
       
      </Table>
    </TableContainer>
  </div>
  
  <button className="addorder" onClick={() => setAddPopuporder(true)}><AddIcon sx={{ fontSize:50 }}/></button>
  <div className="popinvet">
<PopupAdd trigger={addPopuporder} setTrigger={setAddPopuporder}/>
</div>
  <div className="devis">
    <div className="deviscont">Sub Total:7.000 DT </div>
    <div className="deviscont">TVA:9% </div>
    <div className="deviscont">Total 7.630 DT</div>
  </div>
  <button className="confirmerorder" >Send to Administration</button>
  </div>
  </div>
  
  );
}
export default OrderListe
