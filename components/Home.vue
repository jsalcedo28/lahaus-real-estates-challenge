<template>
  <div class="layout-container bg-white">
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
        <!-- <FavoritesList /> -->
      </div>
      <!-- <Footer /> -->
    </main>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Home',
  components: {
    Header,
  },
}
</script>

<style lang="postcss" scoped>
.layout-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  @apply grid grid-cols-1 h-screen;
}

.layout-container > header {
  grid-area: header;
}

.layout-container > main {
  grid-area: main;
}

.layout-container > footer {
  grid-area: footer;
}
</style>
