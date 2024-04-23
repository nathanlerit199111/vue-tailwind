<script setup>
    import { ref, onMounted, onUnmounted   } from 'vue'
    import InputComponent from '@/components/UIElements/InputComponent.vue'

    //VUE PRIME
    import Menubar from 'primevue/menubar';
    const items = ref(
        [
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
                        icon: 'pi pi-bolt'
                    },
                ]
            }
        ]
    )
</script>
<template>
    <header class="flex justify-end">
        <InputComponent/>
        <Menubar :model="items"></Menubar>
    </header>
</template>