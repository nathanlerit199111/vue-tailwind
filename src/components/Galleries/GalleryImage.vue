<script setup>
    import ImgComponent from '@/components/UIElements/ImgComponent.vue'

    const props_data = defineProps({
        gallery_data: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <div class="gallery-wrapper grid grid-cols-4 gap-2">
        <div 
            class="gallery-list"
            v-for="(list, list_index) in props_data.gallery_data" :key="list_index"
        >
            <div class="gallery-image-wrapper overflow-hidden">
                <ImgComponent
                    :image_src="list.images[0]"
                    :image_alt="list.title"
                    image_loading="lazy"
                />
            </div>
            <aside class="gallery-description-wrapper flex">
                <div class="grow">
                    <h4 class="title txt-elipsis">{{ list.title }}</h4>
                    <p class="price">$ {{ list.price }}</p>
                </div>
                <button class="tbs-btn-primary">Add</button>
            </aside>
        </div>
    </div>
</template>