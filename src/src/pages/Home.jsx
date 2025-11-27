import { useState } from "react";
import InputGroup from "../components/InputGroup";

export default function Home({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [tempo, setTempo] = useState("");

  function enviar() {
    onSubmit({ nome, idade, tempo });
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Sua Previdenciarista</h1>
      <p>Preencha os dados abaixo para gerar sua análise previdenciária:</p>

      <InputGroup label="Nome" value={nome} onChange={setNome} />
      <InputGroup
        label="Idade"
        type="number"
        value={idade}
        onChange={setIdade}
      />
      <InputGroup
        label="Tempo de contribuição (anos)"
        type="number"
        value={tempo}
        onChange={setTempo}
      />

      <button onClick={enviar} style={{ marginTop: 20 }}>
        Gerar Solução
      </button>
    </div>
  );
}
