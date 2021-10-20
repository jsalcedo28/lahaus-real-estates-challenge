import { mount } from '@vue/test-utils'
import MyFavoritesContainer from '@/components/MyFavoritesContainer.vue'

describe('<MyFavoritesContainer /> component', () => {
  let wrapper = mount(MyFavoritesContainer)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('is rendering div container correctly', () => {
    expect(wrapper.find('.favorites-list-container').exists()).toBeTruthy()
  })
})
