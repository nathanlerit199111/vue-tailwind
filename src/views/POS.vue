<script setup>
    import { ref, onMounted  } from 'vue'
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import SkeletonLoader from '@/components/Loaders/SkeletonLoader.vue'
    import ImgComponent from '@/components/UIElements/ImgComponent.vue'
    import GalleryImage from '@/components/Galleries/GalleryImage.vue'

    //VUE PRIME
    import Button from 'primevue/button';

    //API
    import AuthApi from '@/api/ProductApi.js'
    let products = ref()
    let isLoading = ref(true)
    const getProductApi = async () => {
        try {
            let response = await AuthApi.getProduct()
            products.value = response.data
        }
        catch (e) {
            console.log("ERROR", e)
        }
        finally {
            isLoading.value = false
        }
    }
    
    onMounted(() => {
        getProductApi()
    });
</script>

<template>
    <SkeletonLoader 
        v-if="isLoading"
        type="cards"
    />
    <div v-if="!isLoading">
        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper additional_class="items-center">
                    <ColumnWrapper additional_class="grow">
                        <h3>POS</h3>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>

        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper additional_class="items-center">
                    <ColumnWrapper additional_class="w-8/12">
                        <GalleryImage :gallery_data = "products?.products" />
                    </ColumnWrapper>
                    <ColumnWrapper additional_class="w-4/12">
                        <h3>POS</h3>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    </div>
</template>