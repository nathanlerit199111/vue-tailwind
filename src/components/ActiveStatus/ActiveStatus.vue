<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const userStatus = ref('active')
  let idleTimeout
  // const socket = new WebSocket('ws://localhost:5173') // WebSocket server URL
  
  const setUserStatus = (status) => {
    userStatus.value = status
  };
  
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      setUserStatus('inactive')
    } else {
      setUserStatus('active')
      resetIdleTimer()
    }
  };
  
  const handleUserActivity = () => {
    setUserStatus('active')
    resetIdleTimer()
  };
  
  const resetIdleTimer = () => {
    clearTimeout(idleTimeout)
    idleTimeout = setTimeout(() => {
      setUserStatus('inactive')
    }, 2000)
  };
  
  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    document.addEventListener('mousemove', handleUserActivity)
    document.addEventListener('keydown', handleUserActivity)
    document.addEventListener('scroll', handleUserActivity)
  
    // Initial timer setup
    resetIdleTimer()
  });
  
  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    document.removeEventListener('mousemove', handleUserActivity)
    document.removeEventListener('keydown', handleUserActivity)
    document.removeEventListener('scroll', handleUserActivity)
    clearTimeout(idleTimeout)
  });
</script>

<template>
    <span :class="`active-status ${userStatus}`" />
</template>
