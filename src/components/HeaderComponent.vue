<script setup>
    import { ref } from 'vue'
    import { getCookie } from '@/helpers/getCookie'
    import InputComponent from '@/components/UIElements/InputComponent.vue'

    //VUE PRIME
    import Menubar from 'primevue/menubar';
    // Define handleItemClick function
    const handleItemClick = (item) => {
        if (item.action && item.action.click) {
            item.action.click();
        }
    };


    const logout = () => {
        const authToken = getCookie('authToken')
        if (authToken) {
            // Expire the authToken cookie
            document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.reload()
        }
    };

    
    // Define menu items
    const items = ref([
        {
            label: 'Profile',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-bolt',
                    action: { click: logout } // Assigning click action to logout function
                },
            ]
        }
    ]);
</script>

<template>
    <header class="flex justify-end mx-gap-sm">
        <InputComponent/>
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu, root }">
                <!-- Adding click event handler -->
                <a class="flex align-items-center" v-bind="props.action" @click="handleItemClick(item)">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
        </Menubar>
    </header>
</template>
