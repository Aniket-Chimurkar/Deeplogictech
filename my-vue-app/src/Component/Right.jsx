import "../App.css"
import { useEffect, useState } from "react";
import axios from "axios";

const Right=()=>{
    const [emploi, setemploi] = useState([]);
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        axios.get("http://localhost:8080/lateststories").then((res) => {
          setemploi(res.data);
        });
      };
      console.log(emploi)


    return(
        <div className="containerr">
            <h5>Latest-Stories</h5>
            <div id="maindiv">
            {emploi.map((g) => (
          <div>
           
            <h6 className="head">{g.title}</h6>
            <p className="tail">{g.link}</p>
           
          </div>
        ))}
      </div>
        </div>
    )
}

export default Right