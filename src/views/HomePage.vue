<script setup>
    import { ref, onMounted } from 'vue'

    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import SkeletonLoader from '@/components/Loaders/SkeletonLoader.vue'
    import UploadCsv from '@/components/UIElements/UploadCsv.vue'
    import TableComponent from '@/components/UIElements/Table/TableComponent.vue'

    //VUE PRIME
    // import DataTable from 'primevue/datatable';
    // import Column from 'primevue/column';
    import Button from 'primevue/button';

    //API
    import AuthApi from '@/api/ProductApi.js'
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
    <SkeletonLoader 
        v-if="isLoading"
        type="table"
    />
    <div v-if="!isLoading">
        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper additional_class="items-center">
                    <ColumnWrapper additional_class="grow">
                        <h2>Payment Types List</h2>
                        <p>Display all payment types</p>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <UploadCsv />
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>

        <SectionWrapper>
            <ContainerWrapper>
                <RowWrapper>
                    <ColumnWrapper additional_class="w-full">
                        <!-- <pre>{{ products?.products }}</pre> -->
                        <TableComponent 
                                :table_data="products?.products"
                                :headers="['ID', 'Brand', 'Title', 'Description', 'Price']"
                                :fields="['id', 'brand', 'title', 'description', 'price']"
                            >
                                <template #head.action="{ head }">
                                    <th>
                                        Actions
                                    </th>
                                </template>
                                <template #item.action="{ item }">
                                    <td>
                                        <div class="flex mx-gap-sm">
                                            <button class="tbs-btn-primary">Add</button>
                                            <button class="tbs-btn-secondary">Delete</button>
                                        </div>
                                    </td>
                                </template>
                        </TableComponent>
                    </ColumnWrapper>
                </RowWrapper>
            </ContainerWrapper>
        </SectionWrapper>
    </div>
</template>