import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá Mundo!");
  // states (estado)
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage('Olá foi Clicado!')}}
          >
            Mudar Mensagem!
      </button>
    </div>
  );
}

export default App;