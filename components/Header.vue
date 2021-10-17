<template>
  <header
    class="
      flex flex-row
      justify-between
      items-center
      md:px-20
      w-full
      h-20
      |
      border-b border-green-100
    "
  >
    <div class="flex flex-row items-end">
      <button type="button" class="relative md:hidden px-4">
        <svg
          stroke="#000"
          fill="#000"
          stroke-width="0"
          viewBox="0 0 16 16"
          class="text-green-400"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
        </svg>
        <div class="absolute top-0 right-2">
          <div class="bg-green-300 w-3 h-3 rounded-full"></div>
        </div>
      </button>
      <NuxtLink to="/" class="block">
        <img
          class="hidden md:block text-green-800"
          src="~/static/images/logo-web.svg"
          alt="La Haus"
          title="La Haus Logo"
        />
        <img
          class="md:hidden text-green-800"
          src="~/static/images/logo-mobile.svg"
          alt="La Haus"
          title="La Haus Logo"
        />
      </NuxtLink>
    </div>
    <div class="hidden md:block">
      <nav class="md:top-0 z-20 | w-full md:w-auto | bg-green-300 md:bg-white">
        <ul
          class="
            flex
            md:flex
            flex-col
            md:flex-row
            |
            md:space-x-6
            text-white
            md:text-primary
          "
        >
          <li
            v-for="menuItem in navMenuItems"
            :key="menuItem.id"
            class="px-4 py-2 md:p-0 | border-b md:border-0"
          >
            <NuxtLink :to="menuItem.url">
              {{ menuItem.name }}
            </NuxtLink>
          </li>
          <li class="px-4 py-2 md:p-0">
            <NuxtLink to="/" class="flex flex-row items-center relative">
              <span class="pr-2">Mi Perfil</span>
              <svg
                class="text-gray-400 ml-2 h-6 w-6 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="absolute hidden md:block top-0.5 right-0">
                <div class="bg-green-300 w-3 h-3 rounded-full"></div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navMenuItems: [
        {
          id: 1,
          name: 'Cundinamarca',
          url: '/',
        },
        {
          id: 2,
          name: 'Antioquia',
          url: '/',
        },
        {
          id: 3,
          name: 'Recursos',
          url: '/',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
a {
  color: #000;
}
</style>
