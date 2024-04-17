<script setup>
    import { ref } from 'vue'

    const props_data = defineProps ({
        mini: {
            type: Boolean,
            default: () => false
        },
    })

    const isActive = ref(true)

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
</script>

<template>
    <aside 
        id="side-nav" 
        :class="`${mini ? 'mini-nav' : ''} ${isActive ? 'active' : ''}`"
    >
        <button 
            class="close-side-nav"
            @click="toggleNavFn()"
        >
            <i :class="`pi ${isActive ? 'pi-chevron-left' : 'pi-chevron-right'}`"></i>
        </button>

        <div class="side-nav-logo-wrapper">
            <h3>Logo</h3>
        </div>
        <hr/>

        <!-- Side navigation list -->
        <div 
            v-for="(side_nav, side_nav_index) in dummy_data"
            :key="side_nav_index"
            class="side-nav-list"
        >
            <router-link to="/theme" class="mx-gap-md">
                <i :class="side_nav.icon"></i>
                <span>{{ side_nav.name }}</span>
            </router-link>
            
        </div>
    </aside>
</template>