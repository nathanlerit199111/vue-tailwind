<script setup>
    import { getCookie } from '@/helpers/getCookie'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import DropDownProfileComponent from '@/components/Navigations/DropDownProfileComponent.vue'
    import SVGIcon from '@/components/UIElements/SVGIcon.vue'
    import ActiveStatus from '@/components/ActiveStatus/ActiveStatus.vue'

    const logout = () => {
        const authToken = getCookie('authToken')
        if (authToken) {
            // Expire the authToken cookie
            document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.reload()
        }
    }

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
    ]
</script>

<template>
    <header class="flex justify-end mx-gap-sm">
        <ContainerWrapper>
            <RowWrapper additional_class="justify-end">
                <ColumnWrapper additional_class="flex items-center mx-gap-md">
                    <SVGIcon 
                        icon="Bell"
                        fill="none"
                        stroke="black"
                    />
                    <DropDownProfileComponent :menu_data="items">
                        <!-- 
                            Add links with functionalities
                            For list with functionaities, use <span> tag instead of <a>, because <a> requires href attributes
                        -->
                        <span @click="logout()">Logout</span>
                    </DropDownProfileComponent>
                    <ActiveStatus />
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </header>
</template>
