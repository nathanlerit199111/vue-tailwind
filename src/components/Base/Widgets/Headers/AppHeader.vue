<script setup>
  import { getCookie } from '@/helpers/get-cookie'
  import {
    DropDownProfileComponent,
    SVGIcon
  } from '@/components/index.js'

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
            icon="bell"
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
        </ColumnWrapper>
      </RowWrapper>
    </ContainerWrapper>
  </header>
</template>
