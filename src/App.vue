<script setup>
import { RouterView, useRoute } from 'vue-router'
import 'primevue/resources/themes/aura-light-green/theme.css'

import HeaderComponent from '@/components/Headers/HeaderComponent.vue'
import SideNavComponent from '@/components/Navigations/SideNavComponent.vue'

const route = useRoute()
</script>

<template>
  <div  v-if="route.path !== '/login' && route.path !== '/readme'" id="dashboard-wrapper">
    <!-- 
      mini - to set the default width of side navigation either mini or wide
     -->
    <SideNavComponent :mini="true"/>
    <main>
      <HeaderComponent />
      <hr/>
      <RouterView />
    </main>
  </div>
  <RouterView v-else />
</template>
