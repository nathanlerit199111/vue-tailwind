<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'

    //VUE PRIME
    import Skeleton from 'primevue/skeleton';

    const props_data = defineProps({
        isLoading: {
            type: Boolean,
            default: () => ""
        },
        type: {
            type: String,
            default: () => ""
        }
    })
</script>

<template>
     <SectionWrapper v-if="props_data.isLoading">
        <ContainerWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>