import { shallowMount } from '@vue/test-utils'
import ExercicioDez from '../../src/exercicios/exercicio-10.vue'

describe("Testando Exercicio Dez", () => {
    it("Deve retornar que fui aprovado", async () => {
        const wrapper = shallowMount(ExercicioDez);
        await wrapper.find('input').setValue("10");
        expect(wrapper.text()).toMatch("Parabéns! Você foi aprovado")
        await wrapper.find('input').setValue("7");
        expect(wrapper.text()).toMatch("Parabéns! Você foi aprovado")
    })
    it("Deve retornar que estou em exame", async () => {
        const wrapper = shallowMount(ExercicioDez);
        await wrapper.find('input').setValue("5");
        expect(wrapper.text()).toMatch("Quase! Você está em exame mas ainda tem chances");
        await wrapper.find('input').setValue("6");
        expect(wrapper.text()).toMatch("Quase! Você está em exame mas ainda tem chances");
        await wrapper.find('input').setValue("6.9");
        expect(wrapper.text()).toMatch("Quase! Você está em exame mas ainda tem chances");
    });
    it("Deve retornar que fui reprovado", async () => {
        const wrapper = shallowMount(ExercicioDez);
        await wrapper.find("input").setValue("4.5");
        expect(wrapper.text()).toMatch("Poxa, infelizmente você reprovou");
        await wrapper.find("input").setValue("2");
        expect(wrapper.text()).toMatch("Poxa, infelizmente você reprovou");
    })
})