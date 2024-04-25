<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'

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
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper additional_class="mb-5">
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
                </ColumnWrapper>
                <ColumnWrapper additional_class="w-3/12">
                    <Skeleton height="2.5rem"></Skeleton>
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