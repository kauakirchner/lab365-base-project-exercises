import { verificaPalavraNoTexto } from "@/exercicios/exercicio-7";

describe("Teste da função verifica palavra no texto", () => {
    it("Deve retornar informe um texto caso não venha o param texto", () => {
        expect(verificaPalavraNoTexto(null,'teste')).toBe('informe um texto');
    })
    it("Deve retornar informe uma palavra caso não venha o param palavra", () => {
        expect(verificaPalavraNoTexto('teste', null)).toBe('informe uma palavra');
    })
    it("Deve retornar informe um texto e uma palavra caso não receba nenhum parâmetro", () => {
        expect(verificaPalavraNoTexto()).toBe("informe um texto e uma palavra");
    })
    it("Deve retornar false caso a palavra NÃO esteja contida no texto", () => {
        expect(verificaPalavraNoTexto('Vasco', 'Flasco')).toBe(false);
    })
    it("Deve retornar true quando a palavra ESTÁ contida no texto", () => {
        expect(verificaPalavraNoTexto('Flasco da Gama', 'Flasco')).toBe(true);
    })
})