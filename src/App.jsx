import { useState } from "react";
import Home from "./pages/Home";
import Resultado from "./pages/Resultado";

function App() {
  const [dados, setDados] = useState(null);

  return (
    <>
      {!dados && <Home onSubmit={(form) => setDados(form)} />}
      {dados && <Resultado dados={dados} onBack={() => setDados(null)} />}
    </>
  );
}

export default App;
