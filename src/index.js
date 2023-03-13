import React from "react";
import ReactDOM from "react-dom";
import  Card  from "./Cards";
import "./index.css";
import  Sdata  from "./Sdata";

const ncard = (val) => {
  return(
    <Card 
    img_src={val.img_src}
            title={val.title}
            sname={val.sname}
            link={val.link}
            />
  )
}

ReactDOM.render(
    <>  <h1 className="heading">Top netflix series</h1>,
    {Sdata.map(ncard)}
        
    </>,
    document.getElementById('root'));