<script setup>
    import {
        SectionWrapper,
        ContainerWrapper,
        RowWrapper,
        ColumnWrapper,
    } from '@/components/index.js'

    //VUE PRIME
    import Skeleton from 'primevue/skeleton';

    const props_data = defineProps({
        type: {
            type: String,
            default: () => ""
        }
    })
</script>

<template>
    <SectionWrapper v-if="props_data.type === 'table'">
        <ContainerWrapper>
            <RowWrapper v-for="table_wrapper in 9" :key="table_wrapper" additional_class="mb-5">
                <ColumnWrapper v-for="table in 3" :key="table" additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <div class="flex">
                        <Skeleton class="mx-1" height="2.5rem"></Skeleton>
                        <Skeleton class="mx-1" height="2.5rem"></Skeleton>
                        <Skeleton class="mx-1" height="2.5rem"></Skeleton>
                    </div>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper v-if="props_data.type === 'cards'">
        <ContainerWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="15.5rem"></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>