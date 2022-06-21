import React from 'react';
import Html5QrcodePlugin from './qrscanner';
import "./ScanCode.scss"
import ResultContainerPlugin from './ResultContainerPlugin.jsx'


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
        <section className="scan-section">
          <div className="scan-section-title"> Scanner Code</div>
          <br />
          <br />
          <br />
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