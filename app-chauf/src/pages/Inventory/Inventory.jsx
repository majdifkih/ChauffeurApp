import "./Inventory.scss";
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
import Addinvetory from './add.png';
import Popup from "../../components/Popup/Popup";

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
function createData(name, Barcode, Quantity, Price, Id, Category, status) {
  return { name, Barcode, Quantity, Price, Id, Category, status };
}

const rows = [
  createData('Chocotom','12313313','111','4.000DT','123454','Biscuit','LOW'),
  createData('SAFIA eau','123321833','386','4.000DT','123234','Eau','GOOD'),
  createData('Saida biscuit','893298','696','4.000DT','1124255','Biscuit','LOW'),
  createData('Maestro','213435711','672','4.000DT','1154644','Chocolat','GOOD'),
  createData('Saida','2564225','226','4.000DT','1154373','Chocolat','LOW'),
  createData('Crostina','25672','172','4.000DT','116742','Biscuit','GOOD'),
  createData('Ice cream','1445763454','147','4.000DT','11742','Chocolat','LOW'),
  createData('Fidji','1568934','391','4.000DT','115362','Chocolat','GOOD'),
  createData('Cupcake','6323563','973','4.000DT','114662','Biscuit','LOW'),
  createData('Chocolat','131563','537','4.000DT','11632','Chocolat','GOOD'),
  createData('Coca cola','535633','876','4.000DT','1124536','Eau','LOW'),
  createData('Fanta','65322','314','4.000DT','112462','Eau','GOOD'),
  createData('Apla','563432','555','4.000DT','1153673','Eau','LOW'),
  createData('kaki','143434','222','4.000DT','113572','Biscuit','GOOD'),
  createData('Gaucho ','12342545','231','4.000DT','112265','Biscuit','LOW'),
];
 function InventoryListe() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const [buttonPopup, setButtonPopup] = useState(false);
  return (

  <div className="inventorymain">
    <div className="side"><Sidebar/></div>
    <div className="inventory">
    <Navbar/>

<div className="headinventory">
      <div className="titleinventory">
      Inventory
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="buttoninvetory">
<button className="addinvetory" ><img src={Addinvetory} width="20" height="20"/>Add</button>

<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete <div>selected</div></button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

  <div className="tabinventory">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="row" >
              
            <StyledTableCell   ><input type="radio" name="fleet"/><label for="store">Name</label></StyledTableCell>
            <StyledTableCell  >Barcode</StyledTableCell>
            <StyledTableCell  >Quantity</StyledTableCell>
            <StyledTableCell  >Price</StyledTableCell>
            <StyledTableCell >Id</StyledTableCell>
            <StyledTableCell  >Category</StyledTableCell>
            <StyledTableCell  align="right">Status?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow className="row" key={row.name}>
              <StyledTableCell width={"15%"} height={"5%"} component="th" scope="row"><input type="radio" name="fleet" className="radio"/><label for="name">{row.name}</label>
                
              </StyledTableCell>
              <StyledTableCell className="barcode" >{row.Barcode}</StyledTableCell>
              <StyledTableCell className="quantity" >{row.Quantity}</StyledTableCell>
              <StyledTableCell className="price" >{row.Price}</StyledTableCell>
              <StyledTableCell className="id" >{row.Id}</StyledTableCell>
              <StyledTableCell className="category" >{row.Category}</StyledTableCell>
              <StyledTableCell  className="tabEnd" >
                <div className="icons">
                <i className="material-icons" >border_color</i>
               
                <i class="material-icons">info_outline</i>
                </div>
              
              <div className={`statuss ${row.status}`}>{row.status}</div></StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
  </div>
  </div>
  
  );
}
export default InventoryListe
