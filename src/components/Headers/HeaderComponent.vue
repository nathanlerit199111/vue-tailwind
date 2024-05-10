<script setup>
    import { ref, onMounted } from 'vue'
    import { getCookie } from '@/helpers/getCookie'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import ImgComponent from '@/components/UIElements/ImgComponent.vue'


    const logout = () => {
        const authToken = getCookie('authToken')
        if (authToken) {
            // Expire the authToken cookie
            document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.reload()
        }
    }

    const isOpen = ref(false)
    const items = [
        {
            name: 'Profile',
            link: '/profile'
        },
        {
            name: 'Theme',
            link: '/theme'
        },
        {
            name: 'Logout',
            link: '/'
        }
    ];

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
    }

    const selectItem = (item) => {
        console.log('Selected:', item)
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
</script>

<template>
    <header class="flex justify-end mx-gap-sm">
        <ContainerWrapper>
            <RowWrapper additional_class="justify-end">
                <ColumnWrapper>
                    <div class="dropdown relative" @click="toggleDropdown">
                        <!-- <button class="dropdown-toggle">{{ isOpen ? 'Close' : 'Open' }} Dropdown</button> -->
                        <div class="flex items-center dropdown-toggle">
                            <ImgComponent
                                image_src="avatar.png"
                                image_alt="avatar"
                                image_loading="eager"
                            />
                            <p>First Name, Surname</p>
                        </div>
                        <ul v-if="isOpen" class="dropdown-menu">
                            <li v-for="(item, index) in items" :key="index" @click="selectItem(item)">
                                <a 
                                    class="block" 
                                    v-if="item.name !== 'Logout'" :href="item.link"
                                >
                                    {{ item.name }}
                                </a>
                                <span
                                    v-else
                                    class="block" 
                                    @click="logout()"
                                >
                                    {{ item.name }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </header>
</template>
