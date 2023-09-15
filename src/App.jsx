import Contador from "./componentes/Contador";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";

// Componente: função que funciona como um programa separado
export default function App() {

  return (
    <div>
      <Menu />

      <Contador inicial={10} />

      <Rodape/>

    </div>
  )
}