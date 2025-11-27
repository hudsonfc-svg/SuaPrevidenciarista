export default function useBeneficio({ idade, tempo }) {
  idade = Number(idade);
  tempo = Number(tempo);

  if (tempo >= 35) return "Aposentadoria por tempo de contribuição.";
  if (idade >= 65) return "Aposentadoria por idade.";
  if (tempo < 15) return "Ainda não possui tempo mínimo de contribuição.";

  return "Pode haver direito a benefício dependendo de regras de transição.";
}
