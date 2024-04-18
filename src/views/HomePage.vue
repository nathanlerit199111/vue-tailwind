<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'

    import SideNav from '@/components/SideNav.vue'
    import InputComponent from '@/components/UIElements/InputComponent.vue'

    //VUE PRIME
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';

    const dummy_table_data = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        }
    ]
</script>

<template>
    <div id="dashboard-wrapper">
        <SideNav :mini="true"/>
        <main>
            <header>
                <InputComponent/>
            </header>
            <hr/>
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
                        <DataTable class="w-full shadow-sm" :value="dummy_table_data" tableStyle="min-width: 50rem">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity">
                                <template #body="slotProps">
                                    <Button 
                                        class="tbs-btn-secondary" 
                                        label="Add"
                                    />
                                </template>
                            </Column>
                        </DataTable>
                    </RowWrapper>
                </ContainerWrapper>
            </SectionWrapper>
        </main>
    </div>
</template>