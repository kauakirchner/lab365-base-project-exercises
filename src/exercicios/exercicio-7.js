// valida as entradas
// retorna true se o texto contém a palavra
// retorna false se a palavra não foi localizada no texto

export const verificaPalavraNoTexto = (texto, palavra) => {
  if (!texto && !palavra) {
    return "informe um texto e uma palavra";
  }
  if (!texto) {
    return "informe um texto";
  }

  if (!palavra) {
    return "informe uma palavra";
  }

  return texto
    .split(" ")
    .includes((palavraDoTexto) => palavraDoTexto === palavra);
};
