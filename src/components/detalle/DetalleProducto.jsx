import axios from "axios";
import { useState, useEffect } from "react";

const DetalleProducto = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("./Characters.js").then((json) => console.log(json.data));
  }, []);
  return <div>DetalleProducto</div>;
};

export default DetalleProducto;
