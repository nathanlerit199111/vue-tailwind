<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
</script>

<template>
    <SectionWrapper>
        <ContainerWrapper>
            <RowWrapper additional_class="items-center">
                <ColumnWrapper additional_class="grow">
                    <h3>POS</h3>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>