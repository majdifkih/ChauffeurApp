import "./Order.scss";
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
import { Link } from "react-router-dom";

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
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function createData(name, Quantity, Price, Total) {
  return { name, Quantity, Price, Total};
}

const rows = [
  createData('Chocotom','111','4.000DT','1.500'),
  createData('SAFIA eau','386','4.000DT','3.650'),
  createData('Saida biscuit','696','4.000DT','7.500'),
  createData('Maestro','672','4.000DT','4000'),
  createData('Saida','226','4.000DT','4.100'),
  createData('Crostina','172','4.000DT','2.700'),
  createData('Ice cream','147','4.000DT','1.800'),
  createData('Fidji','391','4.000DT','800'),
  createData('Cupcake','973','4.000DT','900'),
  createData('Chocolat','537','4.000DT','700'),
  createData('Coca cola','876','4.000DT','2000'),
  createData('Fanta','314','4.000DT','1.100'),
  createData('Apla','555','4.000DT','5.500'),
  createData('kaki','222','4.000DT','4.500'),
  createData('Gaucho ','231','4.000DT','2.500'),
];
 function OrderListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const [addPopuporder, setAddPopuporder] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  
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
        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
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
