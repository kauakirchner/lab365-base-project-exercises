import { subtraiNumeros } from "@/exercicios/exercicio-6";

describe("Teste da função subtrai números", () => {
    it("Não deve somar quando há valor inválido", () => {
        expect(subtraiNumeros("aasass", "aasssa")).toBe("entrada inválida");
        expect(subtraiNumeros(undefined, undefined)).toBe("entrada inválida");
    })
    it("Deve retornar a subtração dos valores quando são válidos", () => {
        expect(subtraiNumeros(5, 3)).toBe(2);
        expect(subtraiNumeros(40, 36)).toBe(4);
    })

    it("Deve retornar positivo caso o segundo número seja negativo", () => {
        expect(subtraiNumeros(10, -4)).toBe(14);
        expect(subtraiNumeros(7, -7)).toBe(14);
        expect(subtraiNumeros(25, -45)).toBe(70);
    })
})