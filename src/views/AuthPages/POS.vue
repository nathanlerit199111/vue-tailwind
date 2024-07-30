<script setup>
    import { ref, onMounted, computed  } from 'vue'
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import SkeletonLoader from '@/components/Widgets/Loaders/SkeletonLoader.vue'
    // import ImgComponent from '@/components/UIElements/ImgComponent.vue'
    import GalleryImage from '@/components/Widgets/Galleries/GalleryImage.vue'

    //VUE PRIME
    // import Button from 'primevue/button';

    //API
    import AuthApi from '@/api/product-api.js'
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

    let addedItems = ref([])
    const addToCart = (item) => {
        addedItems.value.push({
            title: item.title,
            description: item.description,
            price: item.price
        })
    }
    const deleteToCart = (item) => {
        addedItems.value.splice(item, 1)
    }
    const totalValue = computed(() => {
        return addedItems.value.reduce((total, item) => total + item.price, 0)
    })
    
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
                <RowWrapper>
                    <ColumnWrapper additional_class="w-7/12">
                        <GalleryImage @addToCart="addToCart" :gallery_data = "products?.products" />
                    </ColumnWrapper>
                    <ColumnWrapper additional_class="w-5/12">
                        <h3>Summary</h3>
                        <div
                            class="grid grid-cols-5 my-5 gap-10"
                            v-for="(added, added_index) in addedItems" 
                            :key="added_index"
                        >
                            <p>{{ added_index + 1 }}</p>
                            <p>{{ added.title }}</p>
                            <p>{{ added.description }}</p>
                            <p>$ {{ added.price }}</p>
                            <button class="tbs-btn-secondary h-max" @click="deleteToCart(added_index)">Delete</button>
                        </div>
                        <h3 v-if="addedItems.length > 0">Total: $ {{ totalValue }}</h3>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    </div>
</template>