import ExercicioOito from '../../src/exercicios/exercicio-8.vue'
import { shallowMount } from '@vue/test-utils'

describe("Testando componente exercício 8", () => {
    it("Deve estar como página atual: 1 quando o componente for renderizado", () => {
        const wrapper = shallowMount(ExercicioOito);
        expect(wrapper.text()).toMatch(
            "Página atual: 1"
        );
    })
    it("Deve avançar página quando o botão Próxima for clicado", async () => {
        const wrapper = shallowMount(ExercicioOito);
        await wrapper.find("#proximo").trigger("click");
        expect(wrapper.text()).toMatch(
            "Página atual: 2"
        );
        await wrapper.find("#proximo").trigger("click");
        expect(wrapper.text()).toMatch(
            "Página atual: 3"
        );
    })
    it("Deve regredir a página quando o botão Anterior for Clicado", async () => {
        const wrapper = shallowMount(ExercicioOito);
        await wrapper.find("#proximo").trigger("click");
        await wrapper.find("#anterior").trigger("click");
        expect(wrapper.text()).toMatch("Página atual: 1");
        await wrapper.find("#proximo").trigger("click");
        await wrapper.find("#proximo").trigger("click");
        await wrapper.find("#anterior").trigger("click");
        expect(wrapper.text()).toMatch("Página atual: 2");
    })
})