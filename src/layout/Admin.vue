<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import 'primevue/resources/themes/aura-light-green/theme.css'

  import {
    AppHeader,
    SideNavComponent
  } from '@/components/index.js'

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
