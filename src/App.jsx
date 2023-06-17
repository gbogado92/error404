// import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import DetalleProducto from "./components/detalle/DetalleProducto";

const App = () => {
  return (
    <div>
      <Navbar />
      <DetalleProducto />
    </div>
  );
};

export default App;
