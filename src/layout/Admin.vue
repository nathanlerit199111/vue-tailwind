<script setup>
  import { defineAsyncComponent } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import 'primevue/resources/themes/aura-light-green/theme.css'

  import AppHeader from '@/components/Widgets/Headers/AppHeader.vue'
  //import SideNavComponent from '@/components/Navigations/SideNavComponent.vue'
  const SideNavComponent = defineAsyncComponent(
    () => import('@/components/Navigations/SideNavComponent.vue')
  )
  import { useViewport } from '@/helpers/viewport-size.js'

  const route = useRoute()
  const { isMobile } = useViewport()
</script>

<template>
  <div id="dashboard-wrapper">
    <SideNavComponent
      :mini="true"
      :is_mobile="isMobile"
    />
    <main>
      <AppHeader />
      <hr />
      <RouterView />
    </main>
  </div>
</template>
