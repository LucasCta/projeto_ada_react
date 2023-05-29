import { useState } from 'react'

export default function MeuContador() {

  const [contador, setContador] = useState(0);

  function aumentar(){
    setContador(contador + 1);
  }
  
  function resetContador(){
    setContador(0);
  }

  if (contador > 15) {
    return (
      <div>
        <h2>Meu Contador: {contador}</h2>
        <h2>A ganância te levou a isso...</h2>
        <button onClick={resetContador}>resetar contador</button>
      </div>
    )
  }

  return ( 
    <div>
      <h2>Meu Contador: {contador}</h2>
      { contador > 9 ? <h3>Valor muito grande</h3> : null}
      <button onClick={aumentar}>aumentar</button>
    </div>
  )
}
