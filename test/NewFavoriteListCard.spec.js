import { mount } from '@vue/test-utils'
import NewFavoriteListCard from '@/components/NewFavoriteListCard.vue'

describe('<NewFavoriteListCard /> component', () => {
  const wrapper = mount(NewFavoriteListCard)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('is rendering correctly', () => {
    expect(wrapper.find('span').exists()).toBeTruthy()
  })
})
