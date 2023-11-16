import { useState } from "react";
export default function CandidatoJSX () {
    const [votos, setVotos] = useState(0);
  
    const Incrementa = () => {
      setVotos(votos + 1);
    };
  
    const Decrementa = () => {
      setVotos(votos => (votos > 0 ? votos - 1 : 0));
    };
  
    return (
      <div>
        <h3>{votos}</h3>
        <button className="boton" onClick={Incrementa}><b>+</b></button>
        <button className="boton" onClick={Decrementa}><b>-</b></button>
        
      </div>
    );
  }
