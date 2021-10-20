import { shallowMount } from '@vue/test-utils'
import ImageCards from '@/components/ImageCards.vue'

describe('<ImageCards /> component', () => {
  let wrapper = null
  const imagesData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/200/300?random=1',
      altAttribute: 'sample image',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/200/300?random=2',
      altAttribute: 'sample image',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/200/300?random=3',
      altAttribute: 'sample image',
    },
  ]

  beforeEach(() => {
    wrapper = shallowMount(ImageCards, {
      propsData: {
        imagesData: [
          {
            id: 1,
            imageUrl: 'https://picsum.photos/200/300?random=1',
            altAttribute: 'sample image',
          },
          {
            id: 2,
            imageUrl: 'https://picsum.photos/200/300?random=2',
            altAttribute: 'sample image',
          },
          {
            id: 3,
            imageUrl: 'https://picsum.photos/200/300?random=3',
            altAttribute: 'sample image',
          },
        ],
      },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('is rendering img tags correctly', () => {
    expect(wrapper.find('img').exists()).toBeTruthy()
  })

  it('renders img for each item in props.imagesData', () => {
    expect(wrapper.findAll('img')).toHaveLength(imagesData.length)
  })

  it('should render the span text correctly', () => {
    expect(wrapper.find('span').text()).toBe('+ 1')
  })
})
