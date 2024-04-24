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
    <header class="flex justify-end mx-gap-sm">
        <InputComponent/>
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
        </Menubar>
    </header>
</template>