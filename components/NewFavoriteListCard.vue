<template>
  <div class="favorites-list-container--new-favorite-list">
    <div
      class="
        rounded-lg
        bg-blue-100
        h-full
        text-blue-400
        flex
        justify-center
        items-center
      "
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        class="text-blue-400"
        height="44"
        width="44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"></path>
      </svg>
    </div>
    <div class="flex flex-col justify-center items-center mt-4">
      <span class="text-lg text-blue-400 font-medium"
        >Crear una nueva lista</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewFavoriteListCard',
}
</script>
<style lang="postcss"></style>
