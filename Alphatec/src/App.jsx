import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>  
          <img src={reactLogo} className="logo" alt="Alphatec" />
      </main>  
      <body>
            <div>
              <h1>Página en Construcción</h1>
            </div>
      </body>
   
    </>
  )
}

export default App
