import React from "react";
import "./Home.css";
import icone1 from "./img/ninjaIcon.png";
import imagen from "./img/ninjaLogo.png";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="div_header">
            <img className="img_header" src={icone1} />
            <p className="LabeNinjas">LabeNinjas</p>
          </div>
        </header>
        <main>
          <img className="img_main" src={imagen} />
          <div>
            <button>Quero ser um Ninja</button>
            <button>Contratar um Ninja</button>
          </div>
        </main>
        
      </div>
    );
  }
}
export default Home;
