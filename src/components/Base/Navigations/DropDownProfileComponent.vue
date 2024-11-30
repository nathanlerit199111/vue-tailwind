<script setup>
  import { ref, onMounted } from 'vue'
  import { getCookie } from '@/helpers/get-cookie'
  import {
    ImgComponent
  } from '@/components/index.js'

  const props_data = defineProps({
    menu_data: {
      type: Array,
      default: () => [
        {
          name: 'Item 1',
          link: '#'
        },
        {
          name: 'Item 2',
          link: '#'
        }
      ]
    }
  })

  const isOpen = ref(false)
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }

  const selectItem = () => {
    isOpen.value = false
  }

  onMounted(() => {
    document.body.addEventListener('click', closeDropdownOnClickOutside)
  })

  const closeDropdownOnClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      isOpen.value = false
    }
  }

  const userProfile = JSON.parse(getCookie('userProfile'))
</script>
<template>
  <div
    class="dropdown relative"
    @click="toggleDropdown"
  >
    <div class="flex items-center dropdown-toggle">
      <!-- avatar.png -->
      <ImgComponent
        :image_src="userProfile.image"
        image_alt="avatar"
        image_loading="eager"
      />
      <h4>{{ userProfile.fullname }}</h4>
    </div>
    <ul
      v-if="isOpen"
      class="dropdown-menu"
    >
      <template
        v-for="(item, item_index) in props_data.menu_data"
        :key="item_index"
      >
        <li
          v-if="item.name !== 'Logout'"
          @click="selectItem(item)"
        >
          <router-link
            class="block"
            :to="item.link"
          >
            {{ item.name }}
          </router-link>
        </li>
      </template>
      <li>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>


<style lang="scss">
  .dropdown {
      img {
          width: 60px;
          height: 60px;
      }
  }
  .dropdown-toggle {
    cursor: pointer;
  }

  .dropdown-menu {
      background: var(--tbs-bg-primary-color-100);
      border: solid 1px var(--tbs-bg-secondary-color-100);
      border-radius: var(--tbs-border-radius-sm);
      position: absolute;
      top: 60px;
      right: 0;
      z-index: 1;
      list-style-type: none;
      width: 100%;
      min-width: 200px;
      overflow: hidden;

      //THIS WILL ADD TRIANGLE ARROW
      // &:before {
      //     position: absolute;
      //     top: -10px;
      //     right: 20px;
      //     display: block;
      //     content: "";
      //     width: 0; 
      //     height: 0; 
      //     border-left: 10px solid transparent;
      //     border-right: 10px solid transparent;
          
      //     border-bottom: 10px solid var(--tbs-bg-primary-color-100);
      //     filter: drop-shadow(0 0 0 #989898);
      // }
  }

  .dropdown-menu a,
  .dropdown-menu span {
      padding: var(--tbs-space-md);
      font-size: var(--tbs-font-sm);
      display: block;
      cursor: pointer;
  }

  .dropdown-menu li:hover {
    background: color-mix(in srgb,var(--tbs-bg-primary-color-100),#000 7%);
  }

  .dropdown-menu.show {
    display: block;
  }
</style>