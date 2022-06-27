import { useState } from "react";

const Bulb = ({isOn , toggleIsOn}) => {
  /* const [isOn, setIsOn] = useState(true);
 */
  

  return (
    <div>
      <div
        className={`bulb ${isOn ? "bg-yellow" : "bg-gray"}`}
        // style={{background: isOn ? "yellow" : "gray" }}
      >       
      
      </div>
      
    </div>
  );
};

export default Bulb;