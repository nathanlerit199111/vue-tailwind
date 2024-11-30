<script setup>
  import { ref } from 'vue'
  import { useSideNavigation } from '@/stores/settings/side-nav'
  import { getCookie } from '@/helpers/get-cookie'
  import { checkUserPermision } from '@/helpers/permission-validation'
  import {
    SVGIcon
  } from '@/components/index.js'

  const userProfile = JSON.parse(getCookie('userProfile'))

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

  const nav = useSideNavigation()
  const sideNavigation = ref(nav.sideNav)
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
    toggleNavFn()
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
    <!-- 
      Toggle for Desktop and Tablet
      Doesn't matter if it used ButtonComponent or not since this does not follow the other styles
    -->
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
      v-for="(nav, key) in sideNavigation"
      :key="key"
      class="side-nav-list"
    >
      <router-link
        v-if="checkUserPermision(nav.rolePermissions, userProfile.role, nav.isPermissionRequired)"
        :to="nav.link"
        v-slot="{ href, route, navigate, isActiveRoute, isExactActive }"
        custom
      >
        <a
          :href="href"
          :class="[(isActiveRoute || isExactActive) && 'bg-green-200 ', isActive ? 'w-full' : '']"
          @click="navigate"
        >
          <SVGIcon
            :icon="nav.icon"
            width="18"
            height="18"
            stroke=""
          />
          <span class="ml-2">{{ nav.title }}</span>
        </a>
      </router-link>
    </nav>
  </aside>
</template>


<style lang="scss">
  .side-nav-hamburger {
      position: absolute;
      top: 0;
      left: 0;
      padding: var(--tbs-space-md);
      background: var(--tbs-bg-secondary-color-100);
      color: var(--tbs-font-primary-color-100);
  }
  #side-nav {
      background: var(--tbs-nav-bg-color);
      padding: 0 var(--tbs-space-md);
      width: 100px;
      height: 100%;
      transition: all ease 0.5s;
      position: relative;
      z-index: 2;

      .side-nav-close {
          position: absolute;
          top: 0;
          right: -25px;
          padding: 15px 8px;
          background: var(--tbs-nav-bg-color);
          i {
              font-size: 12px;
              color: var(--tbs-nav-list-font-color);
          }
      }

      .side-nav-logo-wrapper {
          padding: var(--tbs-space-md) var(--tbs-space-lg);
          min-height: 68px;
          display: flex;
          align-items: center;
      }

      .side-nav-list.active,
      .side-nav-list:hover {
          background: var(--tbs-nav-list-bg-color-hover);
          color: var(--tbs-nav-list-font-color-hover);
      }

      .side-nav-list {
          background: var(--tbs-nav-list-bg-color);
          color: var(--tbs-nav-list-font-color);
          font-size: var(--tbs-font-md);
          border-radius: var(--tbs-border-radius-sm);
          cursor: pointer;
          align-items: center;
          display: flex;
          margin: var(--tbs-space-sm) 0;
          overflow: hidden;
          content-visibility: auto;

          a {
              display: flex;
              padding: var(--tbs-space-md) var(--tbs-space-lg);
          }
          span {
              position: relative;
              right: 0;
              opacity: 0;
              line-height: 16px;
              transition: all ease 0.5s;
          }
          i {
              opacity: 0.7;
          }
      }

      &.active {
          width: 350px;
          .side-nav-list {
              span {
                  opacity: 1;
              }
          }
      }

      //Mini version of side navigation
      &.mini-nav.active {
          width: 185px;

          .side-nav-list {
              font-size: var(--tbs-font-sm);
          }
      }

      //Mobile View
      &.isMobile {
          position: fixed;
          left: -100px;
          padding: 0;
          overflow: hidden;
          
          .side-nav-list:first-of-type {
              margin-top: 50px;
          }
      }
      &.active.isMobile {
          left: 0;
      }
  }





  //Hamburger Icon
  #hamburger-icon-menu-wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      background: var(--tbs-nav-bg-color);
      padding: 15px 12px;
  }
  #hamburger-icon-menu {
    width: 18px;
    height: 18px;
    position: relative;
    left: 1px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  #hamburger-icon-menu span {
    display: block;
    position: absolute;
    height: 1.5px;
    width: 100%;
    background: var(--tbs-nav-list-font-color);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }


  #hamburger-icon-menu span:nth-child(1) {
    top: 4px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #hamburger-icon-menu span:nth-child(2) {
    top: 8px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #hamburger-icon-menu span:nth-child(3) {
    top: 12px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #hamburger-icon-menu.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 4px;
    left: 0;
  }

  #hamburger-icon-menu.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  #hamburger-icon-menu.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 17px;
    left: 0;
  }
</style>