<script setup>
    import ButtonComponent from '@/components/UIElements/ButtonComponent.vue';
</script>
<template>
    <div id="not-found-wrapper" class="my-gap-md">
        <h1>404</h1>
        <p>Sorry, Page not found</p>
        <ButtonComponent
            label="Go back"
            btn_type="primary"
            link_type="internal"
            link="/"
        />
 
    </div>
    <!-- BACKGROUND ANIMATION -->
    <ul class="floating-squares">
        <li v-for="n in 10" :key="n" />
    </ul>
</template>

<style scoped lang="scss">
    #not-found-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        font-size: 110px;
        line-height: 80px * 1.5;
        color: var(--tbs-font-primary-color-100);
        letter-spacing: 6px;
    }
    p {
        font-size: 20px;
        color: var(--tbs-font-primary-color-100);
    }
</style>