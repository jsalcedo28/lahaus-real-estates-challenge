<template>
  <div class="main-layout-container bg-white">
    <Header />
    <main>
      <div class="m-auto container pt-8 md:pt-14">
        <h1
          class="
            font-semibold
            text-center text-primary text-2xl
            md:text-3xl
            mb-4
            md:mb-0
          "
        >
          Listas de favoritos
        </h1>
        <!-- Favorites List Component -->
        <MyFavoritesContainer />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './Header'
import MyFavoritesContainer from './MyFavoritesContainer'

export default {
  name: 'Home',
  components: {
    Header,
    MyFavoritesContainer,
  },
}
</script>

<style lang="postcss" scoped>
.main-layout-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  @apply grid grid-cols-1 h-screen;
}

.main-layout-container > header {
  grid-area: header;
}

.main-layout-container > main {
  grid-area: main;
}

.main-layout-container > footer {
  grid-area: footer;
}
</style>
