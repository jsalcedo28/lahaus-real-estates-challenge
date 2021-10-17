<template>
  <div class="favorites-list-container--card-container">
    <div class="images-card-container images-card-container--item-three">
      <div class="first-image-container">
        <div class="rounded-lg">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="Some specs"
            class="w-full border border-white | object-cover | rounded-lg"
          />
        </div>
      </div>
      <div class="second-image-container">
        <div class="rounded-lg">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="Some specs"
            class="w-full border border-white | object-cover | rounded-lg"
          />
        </div>
      </div>
      <div class="third-image-container">
        <div class="rounded-lg">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="Some specs"
            class="w-full border border-white | object-cover | rounded-lg"
          />
        </div>
      </div>
      <div
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
        <span>+ 18</span>
      </div>
    </div>
    <div class="mt-4 flex flex-col">
      <span class="text-lg text-primary font-semibold">Aptos. Lindos</span
      ><span class="text-green-400 mt-2">18 propiedades guardadas</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.images-card-container {
  width: 100%;
  max-width: 292px;
  height: 196px;

  @apply relative;

  img {
    height: 196px;
  }

  &--item-one {
    .first-image-container {
      @apply relative;
    }
  }

  &--item-two {
    @apply grid grid-cols-2 gap-0;

    .first-image-container {
      width: 150px;

      @apply z-40 relative;
    }

    .second-image-container {
      width: 218px;

      @apply z-30 absolute right-0;
    }
  }

  &--item-three {
    @apply grid grid-cols-3 gap-0;

    .first-image-container {
      width: 150px;

      @apply z-40 relative;
    }

    .second-image-container {
      left: 116px;
      width: 115px;

      @apply z-30 absolute;
    }

    .third-image-container {
      @apply z-20 right-0 absolute;

      &::before {
        content: '';

        @apply bg-green-800 bg-opacity-50 rounded-lg w-full h-full absolute;
      }
    }
  }
}
</style>
