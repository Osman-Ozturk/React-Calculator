import "../styles/Display.css";
import { DisplayContext } from "../contexts/DisplayContext";
import { useContext } from "react";
const Display = () => {
  const { result, calc } = useContext(DisplayContext);
  return (
      <div className="display">
          <h1>{calc ?  calc:0}</h1>
          <h3>{result ? result:0}</h3>
       </div>
  );
};
export default Display;
