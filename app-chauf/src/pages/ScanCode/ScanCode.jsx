import React from 'react';
import Html5QrcodePlugin from './qrscanner';
import "./ScanCode.scss"
import ResultContainerPlugin from './ResultContainerPlugin.jsx'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: []
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div className="scan">
         <div className="side"><Sidebar/></div>
        <section className="scan-section">
        <Navbar/>
        <div className="headscan">
          <Link to="/home" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>AddOrder</div>
        </div> 
          <div className="scan-section-title"> Scanner Code</div>
          
          <Html5QrcodePlugin 
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}/>
            
          <ResultContainerPlugin results={this.state.decodedResults} />
         
        </section>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {

    console.log(decodedText)
    axios.get(`https://qlogisticsapp.herokuapp.com/DeliveryAPI/delivery/confirm?store=${decodedText}`).then(res=>{
      if(res.data.success){
        alert("Delivery confirmed")
        console.log(res.data.existingPosts)
      }
    }
    )

    console.log(
      "App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default App;