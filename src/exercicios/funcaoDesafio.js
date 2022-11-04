function funcaoDesafio(texto, palavra) {
    if(!texto && !palavra) {
        return "Você deve informar um texto e uma palavra";
    }
    if(!texto) {
        return 0;
    }
    if(!palavra) {
        return null;
    }
    const separandoTexto = texto.split(" ");
    const filtrandoPalavras = separandoTexto.filter(p => p.toLowerCase() === String(palavra).toLowerCase());

    return filtrandoPalavras.length
}

export { funcaoDesafio }