<template>
  <div
    :class="
      'images-card-container images-card-container--item-' +
      [imagesData.length >= 3 ? 3 : imagesData.length]
    "
  >
    <div v-for="(item, index) in imagesData.slice(0, 3)" :key="item.id">
      <div :class="'image-' + (index + 1)">
        <div class="rounded-lg">
          <img
            :src="item.imageUrl"
            alt="item.altAttribute"
            class="w-full border border-white | object-cover | rounded-lg"
          />
        </div>
      </div>
    </div>
    <div
      v-show="imagesData.length - 2 > 0"
      class="
        absolute
        |
        right-4
        |
        z-50
        |
        h-full
        |
        flex
        items-center
        |
        font-semibold
        |
        text-white text-lg
      "
    >
      <span>{{ imagesData.length - 2 > 0 ? imagesData.length - 2 : 0 }} +</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageCards',
  props: {
    imagesData: Array,
  },
}
</script>

<style lang="postcss" scoped>
.images-card-container {
  width: 100%;
  max-width: 292px;
  height: 196px;

  @apply relative;

  img {
    height: 196px;
  }

  &--item-1 {
    .image-1 {
      @apply relative;
    }
  }

  &--item-2 {
    @apply grid grid-cols-2 gap-0;

    .image-1 {
      width: 150px;

      @apply z-40 relative;
    }

    .image-2 {
      width: 218px;

      @apply z-30 absolute right-0;
    }
  }

  &--item-3 {
    @apply grid grid-cols-3 gap-0;

    .image-1 {
      width: 150px;

      @apply z-40 relative;
    }

    .image-2 {
      left: 116px;
      width: 115px;

      @apply z-30 absolute;
    }

    .image-3 {
      @apply z-20 right-0 absolute;

      &::before {
        content: '';

        @apply bg-green-800 bg-opacity-50 rounded-lg w-full h-full absolute;
      }
    }
  }
}
</style>
