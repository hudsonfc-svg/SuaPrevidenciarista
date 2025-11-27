import useBeneficio from "../hooks/useBeneficio";

export default function Resultado({ dados, onBack }) {
  const beneficio = useBeneficio(dados);

  return (
    <div style={{ padding: 20 }}>
      <h1>Resultado</h1>
      <p>Nome: <strong>{dados.nome}</strong></p>
      <p>Idade: <strong>{dados.idade}</strong></p>
      <p>Tempo de contribuição: <strong>{dados.tempo} anos</strong></p>

      <h2>Sugestão de benefício:</h2>
      <p><strong>{beneficio}</strong></p>

      <button onClick={onBack} style={{ marginTop: 20 }}>
        Voltar
      </button>
    </div>
  );
}
