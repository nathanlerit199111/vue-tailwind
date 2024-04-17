<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import Container from '@/components/Container.vue'
    import Row from '@/components/Row.vue'
    import Column from '@/components/Column.vue'

    import SideNav from '@/components/SideNav.vue'

    //VUE PRIME
    import InputText from 'primevue/inputtext';
</script>

<template>
    <div id="dashboard-wrapper">
        <SideNav :mini="true"/>
        <main>
            <header>
                <InputText id="username" type="text" class="w-12rem" />
            </header>
            <SectionWrapper>
                <Container>
                    <Row>
                        <Column>
                        asdasd
                        </Column>
                    </Row>
                </Container>
            </SectionWrapper>
        </main>
    </div>
</template>