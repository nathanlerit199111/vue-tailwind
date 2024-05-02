<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const props_data = defineProps ({
        mini: {
            type: Boolean,
            default: () => false
        }
    })

    const isActive = ref(false)
    const dummy_data = [
        {
            icon: 'pi pi-home',
            name: 'Dashboard'
        },
        {
            icon: 'pi pi-user',
            name: 'Account'
        },
        {
            icon: 'pi pi-home',
            name: 'Dashboard'
        },
        {
            icon: 'pi pi-user',
            name: 'Account'
        },
        {
            icon: 'pi pi-home',
            name: 'Dashboard'
        },
        {
            icon: 'pi pi-user',
            name: 'Account'
        },
        {
            icon: 'pi pi-home',
            name: 'Dashboard'
        },
        {
            icon: 'pi pi-user',
            name: 'Account'
        }
    ]

    const toggleNavFn = () => {
        isActive.value = !isActive.value
    }


    //Check if viewport is 640px (Mobile)
    const isMobile = ref(false);
    const handleResize = () => {
        isMobile.value = window.innerWidth <= 640;
    };
    onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });



    // Function to toggle the 'open' class
    const toggleOpenClass = () => {
        const navIcon = document.querySelector('#hamburger-icon-menu');
        navIcon.classList.toggle('open');
        isActive.value = !isActive.value
    };
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
            ${mini ? 'mini-nav' : ''} 
            ${isActive ? 'active' : ''}
            ${isMobile ? 'isMobile' : ''}
            `"
    >
        <button
            v-if="!isMobile"
            class="side-nav-close"
            @click="toggleNavFn()"
        >
            <i :class="`pi ${isActive ? 'pi-chevron-left' : 'pi-chevron-right'}`"></i>
        </button>

        <div 
            v-if="isMobile"
            id="hamburger-icon-menu-wrapper"
        >
            <div
                :class="`${isActive ? 'open' : ''}`" 
                id="hamburger-icon-menu" 
                @click="toggleOpenClass">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="side-nav-logo-wrapper">
            <h4>Logo</h4>
        </div>
        <hr/>

        <!-- Side navigation list -->
        <nav 
            v-for="(side_nav, side_nav_index) in dummy_data"
            :key="side_nav_index"
            class="side-nav-list"
        >
            <router-link to="/theme" class="mx-gap-md">
                <i :class="side_nav.icon"></i>
                <span>{{ side_nav.name }}</span>
            </router-link>
    
        </nav>
    </aside>
</template>