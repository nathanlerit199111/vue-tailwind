<script setup>
    import { ref, onMounted, watch  } from 'vue'

    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import SkeletonLoader from '@/components/Loaders/SkeletonLoader.vue'
    import UploadCsv from '@/components/UIElements/UploadCsv.vue'
    import TableComponent from '@/components/UIElements/Table/TableComponent.vue'

    //VUE PRIME
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

    const deleteItem = (item) => {
        console.log("ITEM", item)
    };

    //Functions from child component
    const tableRef = ref()
    watch(() => tableRef.value?.first, (newValue, oldValue) => {
        //Add logic here to request API base on pagination
        console.log('Value Changed', newValue);
    })
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
                        <h3>Payment Types List</h3>
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
                        <!--
                            - table_data props will pass the entire data from database
                            - headers props will just literally display the text. if no value, it will load the whole data
                            - fields props will only display data base on the provided property name in the Array. if no value, it will load the whole data

                            slots - there are 2 types of slot; head and item
                            show_select - whill show checkbox
                         -->
                        <TableComponent 
                                :table_data="products?.products"
                                :headers="['ID', 'Brand', 'Title', 'Description', 'Price']"
                                :fields="['id', 'brand', 'title', 'description', 'price']"
                                :show_checkbox="true"
                                ref="tableRef"
                            >
                                <template #head.image>
                                    <th>Image</th>
                                </template>
                                <template #item.image="{ item }">
                                    <td class="p-5">
                                        <img :src="item.images[0]" />
                                    </td>
                                </template>


                                <template #head.action>
                                    <th>Actions</th>
                                </template>
                                <template #item.action="{ item }">
                                    <td class="p-5">
                                        <div class="flex mx-gap-sm">
                                            <button class="tbs-btn-primary">{{ item.brand }}</button>
                                            <button class="tbs-btn-secondary" @click="deleteItem(item.title)">Delete</button>
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