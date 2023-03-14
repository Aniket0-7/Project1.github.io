import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

const ncard = (val) => {
  return (
    
      <Card
        img_src={val.img_src}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    
  )
}

ReactDOM.render(
  <>  <h1 className="heading">Top netflix series</h1>
  <div className="cards">
    {Sdata.map(ncard)}
    <div className="name">&copy; Made by Gogeta(Aniket)</div>
    </div>

  </>,
  document.getElementById('root'));