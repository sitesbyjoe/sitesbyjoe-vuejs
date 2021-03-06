import mount from 'vue-test-utils'
import Component from '@/components/portfolio/Portfolio.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})