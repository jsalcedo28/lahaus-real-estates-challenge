<template>
  <div class="favorites-list-container">
    <FavoriteCardCollection />
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
}
</script>

<style lang="postcss">
.favorites-list-container {
  @apply flex flex-row flex-wrap justify-center mb-12;

  &--card-container {
    @apply mx-6 md:mx-4 my-6 md:my-12;
  }

  &--new-favorite-list {
    max-width: 294px;
    height: 196px;

    @apply w-full mx-6 md:mx-4 my-6 md:my-12;
  }
}
</style>
