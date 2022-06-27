import "./AddStore.scss";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const AddStore = ( ) => {
const GetPos=(id)=>{
console.log(id,"idVehicule")
  axios.get(`https://qlogisticsapp.herokuapp.com/PositionAPI/positions?id=${id}`).then(res=>{
    if(res.data.success){
      console.log(res.data.existingPositions);
      setIdP(res.data.existingPositions._id);
    }
  }
  )
}
const addStore=()=>{

  let data={
    contact:contactS,
    name:nameS,
    owner:ownerS,
    type:typeS,
    positionStore:idP,
  }
  console.log(data)
  axios.post("https://qlogisticsapp.herokuapp.com/StoreAPI/stores",data).then(res=>{
    if(res.data.success){
      alert("Store added")
      navigate("/home")
    }
  }
  )
}




  const [nameS, setNameS] = useState("");
  const [contactS, setContactS] = useState("");
  const [ownerS, setOwnerS] = useState("");
  const[typeS,setTypeS]=useState("");
  const [idP, setIdP] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
     navigate("/login")   
    }
},[])
  return (
    <div className="storemain">
          <div className="side"><Sidebar/></div>
      <div className="store">
        <Navbar/>
      <div className="inputs">
        <div className="headstore">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Add</div> <div>Store</div>
        </div>
        <AddBusinessIcon sx={{ fontSize: 100 }} className="Iconhead"/>
        <div className="form">
            <label for="namea" className="label"/> <div className="label">StoreName</div>
            <div className="formicon">
            <StorefrontIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input onChange={
              (e) => {
                setNameS(e.target.value);
              }

            } type="text" placeholder="Enter Store"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/><div className="label">Position</div>
            <div className="formbtn">
            <AddLocationIcon className="icona" sx={{ fontSize: 40 }}/><button  className="btnstore" onClick={()=>GetPos(localStorage.getItem("vehicule"))}> Get Current Position</button>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/> <div className="label">Contact</div>
            <div className="formicon">
            <MailOutlineIcon  className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input onChange={
              (e) => {
                setContactS(e.target.value);
              }
            } type="text" placeholder="Enter Contact"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" /><div className="label">Type</div>
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input onChange={
              (e) => {
                setTypeS(e.target.value);
              }
            } type="text" placeholder="Enter Type"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/> <div className="label">StoreOwner</div>
            <div className="formicon">
            <PersonOutlineIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input type="text" onChange={
              (e) => {
                setOwnerS(e.target.value);
              }

            } placeholder="Enter Owner"/></div>
            </div>
            </div>


            
      </div>
      <div  className="btn">
          <Link to="/home" style={{textDecoration:"none"}}><button className="btncancel">Cancel</button></Link>
          <button className="btnadd" onClick={addStore}>Add</button>
        
      </div>
      </div>

    </div>
  );
};

export default AddStore;
