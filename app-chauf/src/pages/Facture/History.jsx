import "./History.scss";
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

function createData(name, date, total, status) {
  return { name, date, total, status};
}

const rows = [
  createData('Chocotom','22/01/2022','1.500','done'),
  createData('SAFIA eau','22/01/2022',' 3.650','undone'),
  createData('Saida biscuit','22/01/2022',' 7.500 ','done'),
  createData('Maestro','22/01/2022',' 4000','undone'),
  createData('Saida','22/01/2022',' 4.100','done'),
  createData('Crostina','22/01/2022',' 2.700','undone'),
  createData('Ice cream','22/01/2022',' 1.800','done'),
  createData('Fidji','22/01/2022',' 800','undone'),
  createData('Cupcake','22/01/2022',' 900','done'),
  createData('Chocolat','22/01/2022','700',' undone'),
  createData('Coca cola','22/01/2022','2000',' done'),
  createData('Fanta','22/01/2022','1.100',' undone'),
  createData('Apla','22/01/2022','5.500',' done'),
  createData('kaki','22/01/2022','4.500 ','undone'),
  createData('Gaucho ','22/01/2022','2.500',' done'),
];
 function HistoryListe() {
   const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
  
  
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
              
            <StyledTableCell className="cellprod"   ><input type="radio" className="radio"/>Store</StyledTableCell>
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
            else if(val.productName.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val,key) => (
            <StyledTableRow className="row" key={key}>
              <StyledTableCell  width={"20%"} height={"5%"} component="th" scope="row" className="cellprod"><input type="radio" name="fleet" className="radio"/>{val.name}</StyledTableCell>
              <StyledTableCell className="cell" >{val.date}</StyledTableCell>
              <StyledTableCell className="cell" >{val.total}</StyledTableCell>
              <StyledTableCell className={`status ${val.status}`} >{val.status}</StyledTableCell>
              <StyledTableCell className="cell"><Link to="/infofacture"><i class="material-icons">info_outline</i></Link></StyledTableCell>
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
