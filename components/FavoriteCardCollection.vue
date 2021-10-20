<template>
  <div class="favorites-list-container--favorite-collection">
    <ImageCards :imagesData="imagesData" />
    <div class="mt-4 flex flex-col">
      <span class="text-lg text-primary font-semibold">{{
        favorites.name
      }}</span
      ><span class="text-gray-500 mt-2"
        >{{ favorites.real_estates.length }}
        {{
          favorites.real_estates.length === 1
            ? 'propiedad guardada'
            : 'propiedades guardadas'
        }}
      </span>
    </div>
  </div>
</template>

<script>
import ImageCards from './ImageCards'

export default {
  name: 'FavoriteCardCollection',
  components: {
    ImageCards,
  },
  props: {
    favorites: Array,
    estates: Array,
  },
  data() {
    return {
      imagesData: [],
    }
  },
  created() {
    this.imagesData = this.favorites.real_estates.map((estateId) => {
      return {
        id: estateId,
        imageUrl: this.estates[estateId].gallery_urls[0],
        altAttribute: this.estates[estateId].name,
      }
    })
  },
}
</script>
