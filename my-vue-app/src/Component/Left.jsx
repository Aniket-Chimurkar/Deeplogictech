import "../App.css"
import { useEffect, useState } from "react";
import axios from "axios";

const Left=()=>{
    const [emploi, setemploi] = useState([]);
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        axios.get("http://localhost:8080/featuredvoice").then((res) => {
          setemploi(res.data);
        });
      };
      console.log(emploi)


    return(
        <div className="containerl">
            <h2 className="heading">Featured-Voices</h2>
            <div id="maindiv1">
            {emploi.map((g) => (
          <div  className="maindiv2">
           
            <h6 className="head1">{g.title}</h6>
            <p className="tail1">{g.link}</p>
           
          </div>
        ))}
      </div>
        </div>
    )
}

export default Left