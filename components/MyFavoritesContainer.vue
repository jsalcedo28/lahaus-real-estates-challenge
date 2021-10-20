<template>
  <div class="favorites-list-container">
    <span v-for="favorite in favoritesList" :key="favorite.id">
      <FavoriteCardCollection :favorites="favorite" :estates="estatesList" />
    </span>
    <NewFavoriteListCard />
  </div>
</template>

<script>
import FavoriteCardCollection from './FavoriteCardCollection'
import NewFavoriteListCard from './NewFavoriteListCard'

export default {
  name: 'MyFavoritesContainer',
  components: {
    FavoriteCardCollection,
    NewFavoriteListCard,
  },
  data() {
    return {
      favoritesList: [],
      estatesList: [],
    }
  },
  async created() {
    const apiUrl =
      'https://lh-real-estates-challenge-api.herokuapp.com/real-estates'
    const results = await fetch(apiUrl).then((res) => res.json())

    this.favoritesList = await results.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      real_estates: item.attributes.real_estate_ids,
    }))

    await results.included.forEach((item) => {
      const { id, attributes } = item
      this.estatesList[id] = attributes
    })
  },
}
</script>

<style lang="postcss">
.favorites-list-container {
  @apply flex flex-row flex-wrap justify-center mb-12;

  &--favorite-collection {
    @apply mx-6 md:mx-4 my-6 md:my-12;
  }

  &--new-favorite-list {
    max-width: 294px;
    height: 196px;

    @apply w-full mx-6 md:mx-4 my-6 md:my-12;
  }
}
</style>
