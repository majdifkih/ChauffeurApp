import "./Facture.scss";
import * as React from 'react';
import { useState } from 'react';
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
import axios from 'axios';
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

 function FactureListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [rows, setrows] = React.useState([]);
  const [Pdata,setPdata] = useState([])
  const [subTotal,setsubTotal] = useState(0)
  const [total,settotal] = useState(0)
  
  const getProduct=()=>{
    axios.get("http://localhost:3001/ProductAPI/products").then(res=>{
      if(res.data.success){
        setrows( res.data.existingPosts);
        
        console.log(rows)
      }
    })
  } 
  useEffect(()=>{
    getProduct() 
    setsubTotal((items.reduce((a,v) =>  a = a + v.price , 0 ))/1000)
    settotal(subTotal+subTotal*0.09)
  }); 

  const [items, setItems] = useState([]);
  const [addPopupfacture, setAddPopupfacture] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [factproduct, setfactproduct] = useState("");
  
console.log(items)

  return (

  <div className="facturemain">
    <div className="side"><Sidebar/></div>
    <div className="facture">
    <Navbar/>

<div className="headfacture">
      <div className="titlefacture">
      Invoice
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="buttonfacture">




</div>

</div>

<div className="headincoive">
  <div className="chosestore">
<div className="labelstore">Store</div>
<div className="selectstore">
<StorefrontIcon className="iconselect" fontSize="small"/>
<select id="select" className="select" onChange={(event)=> {
      setfactproduct(event.target.value);
    }} >
                <option selected>Choose Store</option>
                <option>Reguler</option>
                <option>NonReg</option>
                </select>
                </div>
                </div>
                <button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete <div>selected</div></button>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="popdel"/>
                </div>
  <div className="tabfacture">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell   ><input type="radio" name="fleet"/><label for="store">Product</label></StyledTableCell>
            <StyledTableCell className="cell" >Quantity</StyledTableCell>
            <StyledTableCell className="cell"  >Price</StyledTableCell>
            <StyledTableCell  className="cell">Total</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {(items
          ).map((row) => (
            <StyledTableRow className="row" key={row.name}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row" className="cellproduct"><input type="radio" name="fleet" className="radio"/>{row.name}</StyledTableCell>
              <StyledTableCell className="cell" ><input type="number" disabled="disabled" placeholder={row.quantity} className="cellinput"/></StyledTableCell>
              <StyledTableCell className="cell" ><input type="number"disabled="disabled" className="cellinput"/></StyledTableCell>
              <StyledTableCell className="cell" ><input type="number" disabled="disabled"className="cellinput" placeholder={row.price}/></StyledTableCell>
              <StyledTableCell  ><DeleteIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
      
        </TableBody>
        <TableFooter >
          <TableRow>
           
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  </div>
  
  <button className="addfacture" onClick={() => setAddPopupfacture(true)}><AddIcon/></button>
  <div className="popinvet">
<PopupAdd trigger={addPopupfacture} setTrigger={setAddPopupfacture} setData={setItems} ro={rows}/>
</div>
  <div className="devis">
    <div className="deviscont">Sub Total:{subTotal} DT </div>
    <div className="deviscont">TVA:9% </div>
    <div className="deviscont">Total {total} DT</div>
  </div>
  <button className="confirmerfacture" >Confirmer</button>
  </div>
  </div>
  
  );
}
export default FactureListe
