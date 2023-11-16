import { useState } from 'react'
import './app.css'
import CandidatoJSX from './CandidatoJSX'


function App() {
  
  const Candidato = () => {
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
  };
  
  return (
    <>
     <div>
      <h1>Boca de Urnas</h1>
      <article>
         <h2>Candidato 1</h2>
         <Candidato/>
      </article>
       <article>
         <h2>Candidato 2</h2>
         <CandidatoJSX/>
       </article>
      </div>
    </>
  )
}

export default App
