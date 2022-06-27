import { useState } from "react";

const Texto = () => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleIsVisible = () => setIsVisible(!isVisible);

  return (
    <div>
      <input type={isVisible ? "text" : "password"} />
      <button onClick={toggleIsVisible}>Mostrar / ocultar contraseña</button>
    </div>
  );
};

export default Texto;