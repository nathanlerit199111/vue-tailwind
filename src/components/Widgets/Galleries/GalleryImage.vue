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
    <div class="gallery-wrapper grid grid-cols-4 gap-5">
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
            <aside class="gallery-description-wrapper flex gap-2">
                <div class="grow">
                    <h4 class="title txt-elipsis">{{ list.title }}</h4>
                    <p class="price">$ {{ list.price }}</p>
                </div>
                <button class="tbs-btn-primary" @click="$emit('addToCart', list)">Add</button>
            </aside>
        </div>
    </div>
</template>

<style lang="scss">
    .gallery-wrapper {
        .gallery-list {
            background: var(--tbs-bg-secondary-color-100);
            border-radius: var(--tbs-border-radius-sm);
            box-shadow: 2px 2px 3px color-mix(in srgb,var(--tbs-bg-primary-color-100),#000 12%);
            padding: var(--tbs-space-sm);
        }
        .gallery-image-wrapper {
            border-radius: var(--tbs-border-radius-sm);
            img {
                aspect-ratio: 2/1;
                min-height: 140px;
            }
        }
        .gallery-description-wrapper {
            position: relative;
            padding: var(--tbs-space-md) 0;

            // .price {
            //     position: absolute;
            //     left: 0;
            //     bottom: 0;
            // }
        }
        button {
            height: max-content;
        }
    }
</style>