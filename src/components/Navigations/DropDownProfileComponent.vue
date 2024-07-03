<script setup>
  import { ref, onMounted } from 'vue'
  import { getCookie } from '@/helpers/get-cookie'
  import ImgComponent from '@/components/UIElements/ImgComponent.vue'

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
