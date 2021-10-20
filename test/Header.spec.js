import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('<Header /> component', () => {
  const wrapper = mount(Header)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('is rendering correctly', () => {
    expect(wrapper.find('span').exists()).toBeTruthy()
  })

  it('renders 4 navbar items', () => {
    const items = wrapper.findAll('.menu-item')

    expect(items.length).toBe(4)
  })
})
