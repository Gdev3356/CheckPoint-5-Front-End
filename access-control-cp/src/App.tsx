import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecaho/Cabecalho";

export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Outlet/>
    </div>
  );
}