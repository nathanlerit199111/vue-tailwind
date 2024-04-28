<script setup>
    import { ref, onMounted } from 'vue'

    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import SkeletonLoader from '@/components/Loader/SkeletonLoader.vue'
    import UploadCsv from '@/components/UploadCsv.vue'

    //VUE PRIME
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';

    //API
    import AuthApi from '@/api/products-api.js'
    let products = ref()
    const isLoading = ref(true)
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
    <UploadCsv />
    <SkeletonLoader 
        v-if="isLoading"
        type="table"
    />

    
    <div v-if="!isLoading">
        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper>
                    <ColumnWrapper>
                        <h2>Payment Types List</h2>
                        <p>Display all payment types</p>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>

        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper>
                    <ColumnWrapper additional_class="w-full">
                        <DataTable :value="products?.products">
                            <Column class="py-5" field="title" header="Title"></Column>
                            <Column class="py-5" field="description" header="Description"></Column>
                            <Column class="py-5" field="price" header="Price"></Column>
                            <Column class="py-5" field="stock" header="Stock"></Column>
                            <Column 
                                field="quantity" header="Quantity"
                                class="w-2/12"
                            >
                                <template #body="slotProps">
                                    <div class="mx-gap-sm">
                                        <Button 
                                            class="tbs-btn-secondary" 
                                            label="Add"
                                        />
                                        <Button 
                                            class="tbs-btn-primary" 
                                            label="Delete"
                                        />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    </div>
</template>