<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'


    const HTML = `
    <div class="parent">
        <div class="child-column1">
            This is HTML snippets
        </div>
        <div class="child-column1">
            This is HTML snippets
        </div>
    </div>
    `

    const CSS = `
    .parent {
        display: flex;
    }
    `

    const SCRIPT = `
    <div>
        This is SCRIPT snippets
    </div>
    `
</script>

<template>
    <SectionWrapper>
        <ContainerWrapper>
            <RowWrapper>
                <ColumnWrapper additional_class="flex">
                    <code>
                        {{ HTML }}
                    </code>

                    <div class="preview" v-html="HTML"/>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>


<style lang="scss">
    code {
        background: #222222;
        color: #ffeed5;
        padding: 20px;
        border-radius: 4px;
        white-space: pre;
    }
    .parent {
        display: flex;
    }
</style>