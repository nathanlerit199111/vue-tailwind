<script setup>
  import { ref } from 'vue'
  import { useSideNavigation } from '@/stores/settings/sidenav'
  import SVGIcon from '@/components/UIElements/SVGIcon.vue'

  const props_data = defineProps({
    mini: {
      type: Boolean,
      default: () => false
    },
    is_mobile: {
      type: Boolean,
      default: () => false
    }
  })

  // const isActive = ref(false)

  const nav = useSideNavigation()
  const side_navigation = ref(nav.side_nav)
  let isActive = ref(nav.isNavOpen)

  const toggleNavFn = () => {
    nav.toggleSideNav()
    isActive.value = nav.isNavOpen
  }

  // //Check if viewport is 640px (Mobile)
  // const isMobile = ref(false);
  // const handleResize = () => {
  //     isMobile.value = window.innerWidth <= 640;
  // };
  // onMounted(() => {
  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  // });
  // onUnmounted(() => {
  //     window.removeEventListener('resize', handleResize);
  // });

  // Function to toggle the 'open' class
  const toggleOpenClass = () => {
    const navIcon = document.querySelector('#hamburger-icon-menu')
    navIcon.classList.toggle('open')
    // isActive.value = !isActive.value
  }
</script>

<template>
  <!-- <div v-if="isMobile" class="side-nav-hamburger">
        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
    </div> -->

  <aside
    id="side-nav"
    :class="`
        ${props_data.mini ? 'mini-nav' : ''} 
        ${isActive ? 'active' : ''}
        ${props_data.is_mobile ? 'isMobile' : ''}
    `"
  >
    <!-- Toggle for Desktop and Tablet -->
    <button
      v-if="!props_data.is_mobile"
      class="side-nav-close"
      @click="toggleNavFn()"
    >
      <i :class="`pi ${isActive ? 'pi-chevron-left' : 'pi-chevron-right'}`"></i>
    </button>
    <!-- End Here -->

    <!-- Mobile Burger Menu -->
    <div
      v-if="props_data.is_mobile"
      id="hamburger-icon-menu-wrapper"
      class="flex"
    >
      <div
        :class="`${isActive ? 'open' : ''}`"
        id="hamburger-icon-menu"
        @click="toggleOpenClass"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="flex items-center justify-center grow">
        <h4>Logo</h4>
      </div>
      <slot></slot>
    </div>
    <!-- End Here -->

    <!-- Logo -->
    <div
      v-if="!props_data.is_mobile"
      class="side-nav-logo-wrapper"
    >
      <h4>Logo</h4>
    </div>
    <!-- End here -->

    <!-- Side navigation list -->
    <nav
      v-for="(nav, key) in side_navigation"
      :key="key"
      class="side-nav-list"
    >
      <router-link
        :to="nav.link"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
        custom
      >
        <a
          :href="href"
          :class="[(isActive || isExactActive) && 'bg-green-200 w-full']"
          @click="navigate"
        >
          <SVGIcon
            :icon="nav.icon"
            width="16"
            height="16"
            fill="none"
            stroke="black"
          />
          <span class="ml-2">{{ nav.title }}</span>
        </a>
      </router-link>
    </nav>
  </aside>
</template>

<style lang="scss" module="attr"></style>
