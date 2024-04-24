<script setup>
    import { ref } from 'vue'

    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'

    //VUE PRIME
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';

    const dummy_table_data = [
        {
            "id": "1000",
            "code": "f230fh0g3",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 65,
            "category": "Accessories",
            "quantity": 24,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1001",
            "code": "j3d0f23sd",
            "name": "Table Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 49,
            "category": "Accessories",
            "quantity": 18,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1002",
            "code": "sf32n4k2f",
            "name": "Desk",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 72,
            "category": "Accessories",
            "quantity": 30,
            "inventoryStatus": "INSTOCK",
            "rating": 3
        },
        {
            "id": "1003",
            "code": "dfm2q03fn",
            "name": "Chair",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 38,
            "category": "Accessories",
            "quantity": 12,
            "inventoryStatus": "INSTOCK",
            "rating": 2
        },
        {
            "id": "1004",
            "code": "23dkv0fd3",
            "name": "Door Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 81,
            "category": "Accessories",
            "quantity": 28,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1005",
            "code": "nfd9m2lk3",
            "name": "Roof Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 57,
            "category": "Accessories",
            "quantity": 22,
            "inventoryStatus": "INSTOCK",
            "rating": 3
        },
        {
            "id": "1006",
            "code": "kfn2o3nmd",
            "name": "Bamboo Deck",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 43,
            "category": "Accessories",
            "quantity": 17,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1007",
            "code": "29mfdlk3n",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 69,
            "category": "Accessories",
            "quantity": 25,
            "inventoryStatus": "INSTOCK",
            "rating": 2
        },
        {
            "id": "1008",
            "code": "nm2k3lf02",
            "name": "Cup Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 53,
            "category": "Accessories",
            "quantity": 21,
            "inventoryStatus": "INSTOCK",
            "rating": 1
        }
    ]
</script>

<template>
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
                    <DataTable :value="dummy_table_data">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity">
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
</template>