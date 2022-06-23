import "./Facture.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
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
import Popup from "../../components/Popup/Popup";
import AddIcon from '@mui/icons-material/Add';
import PopupAdd from "../../components/Popup/PopupAdd";
import StorefrontIcon from '@mui/icons-material/Storefront';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";

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
  const[searchTerm,setSearchTerm]=useState("");

  const [page, setPage] = React.useState(0);
  const [rows, setrows] = React.useState([]);
  const [Pdata,setPdata] = useState([])
  const [subTotal,setsubTotal] = useState(0)
  const [total,settotal] = useState(0)
  const navigate = useNavigate();
  const [rowstore,setRowstore] = useState([]);
  const getStore=()=>{
    axios.get("https://qlogisticsapp.herokuapp.com/StoreAPI/stores").then(res=>{
      if(res.data.success){
        setRowstore( res.data.existingPosts);
        
        console.log(rowstore)
      }
    })
  } 
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
  const getProduct=()=>{
    let idv=localStorage.getItem('vehicule')
    console.log(idv)
    axios.get(`https://qlogisticsapp.herokuapp.com/VanAPI/vans?id=${idv}`).then(res=>{
      if(res.data.success==true){
        console.log(res.data.existingPosts[0].stock)
        setrows(res.data.existingPosts[0].stock);
        
       
    }

    })
  } 
  useEffect(()=>{
    getStore()
    getProduct() 
    setsubTotal((items.reduce((a,v) =>  a = a + v.price , 0 ))/1000)
    settotal(subTotal+subTotal*0.09)
    console.log(items)

  }); 

  const [items, setItems] = useState([]);
  const [addPopupfacture, setAddPopupfacture] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [factstore, setfactstore] = useState("");
  
const addFacture=()=>{
  if (factstore==="" || items.length===0 ||total===0 || total===undefined) {
    alert("Veuillez remplir tous les champs")
              }
              else{
                

  let data={
    store:factstore,
    stock:items.map(({products, quantity}) => ({products, quantity})),
    total:total.toFixed(2),
    vehicule:localStorage.getItem('vehicule')
  }
  console.log(data)
  
  axios.post("https://qlogisticsapp.herokuapp.com/FactureAPI/factures",data).then(res=>{
    if(res.data.success){
      console.log(res.data.invoice)
    }}
     
    )  }

}
  return (

  <div className="facturemain">
    
    <div className="side"><Sidebar/></div>
    
    <div className="facture">
    <Navbar/>
   

<div className="headfacture">
      <div className="titlefacture">
      <div className="headfact">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Invoice</div>
        </div> 
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      <i><SearchIcon sx={{ fontSize: 40 }}/></i></div>
</div>
<div className="buttonfacture">




</div>

</div>

<div className="headincoive">
  <div className="chosestore">
<div className="labelstore">Store</div>

<div className="selectstore">
<StorefrontIcon className="iconselect" sx={{ fontSize: 40 }}/>
<select id="select" className="select" onChange={(event)=> {
      setfactstore(event.target.value);
    }} >
                <option selected>Choose Store</option>
                {(rowstore).map((srow) => (
                <option value={srow._id}>{srow.name}</option> 
                ))}
                </select>
                </div>
                </div>
                <button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon sx={{ fontSize: 40 }}/>Delete <div>selected</div></button>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="popdel"/>
                </div>
  <div className="tabfacture">
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
        {(items).filter((val)=>{
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
              <StyledTableCell className="cell" ><input type="number" disabled="disabled" placeholder={val.quantity} className="cellinput"/></StyledTableCell>
              <StyledTableCell className="cell" ><input type="number"disabled="disabled" className="cellinput"/></StyledTableCell>
              <StyledTableCell className="cell" ><input type="number" disabled="disabled"className="cellinput" placeholder={val.price}/></StyledTableCell>
              <StyledTableCell ><DeleteIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
      
        </TableBody>
      
      </Table>
    </TableContainer>
  </div>
  
  <button className="addfacture" onClick={() => (rows.length>0)? setAddPopupfacture(true) : alert('aucun produit')}><AddIcon/></button>
  <div className="popinvet">
<PopupAdd trigger={addPopupfacture} setTrigger={setAddPopupfacture} setData={setItems} ro={rows} type="facture"/>
</div>
  <div className="devis">
    <div className="deviscont">Sub Total:{subTotal} DT </div>
    <div className="deviscont">TVA:9% </div>
    <div className="deviscont">Total {total.toFixed(2)} DT</div>
  </div>
  <button className="confirmerfacture" onClick={addFacture}>Confirmer</button>
  </div> 
</div>
  
  );
}
export default FactureListe
