import React from "react";
import Navigasi from "./component/navigasi.js";
import Header from "./component/header.js";
import Features from "./component/features.js";
import Testimonial from "./component/testimonial.js";
import Download from "./component/download.js";
import Footer from "./component/footer.js";
import './App.scss';

class App extends React.Component {
  render (){
    return(
      <div>
        <Navigasi/>
        <Header/>
        <Features/>
        <Testimonial/>
        <Download/>
        <Footer/>
      </div>
    );
  }
}

export default App;
