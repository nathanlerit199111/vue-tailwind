<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import Img from '@/components/UIElements/Img.vue'


    //VUE PRIME
    import Chip from 'primevue/chip';
    import Message from 'primevue/message';
</script>
<template>
    <SectionWrapper id="read-me">
        <ContainerWrapper additional_class="max-w-5xl my-5">
            <RowWrapper>
                <ColumnWrapper>
                    <h2 class="font-bold">Usage of Tailwind and SASS</h2>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
        <ContainerWrapper additional_class="max-w-5xl">
            <RowWrapper>
                <ColumnWrapper additional_class="w-6/12">
                    <Img class="my-5" image_src="tailwind-logo.png"/>
                    <h3>Tailwind will be used for creating Skeleton / Wireframe layout</h3>
                    <p>Avoid utilizing Tailwind styling for background colors, font colors, font sizes, border radius, and box shadows as these elements are defined within the theme settings.</p>
                    <p>Example but not limited to</p>
                    <Chip class="m-2" label="Flexbox" />
                    <Chip class="m-2" label="Grid" />
                    <Chip class="m-2" label="Text Align" />
                    <Chip class="m-2"label="Font Weight" />
                    <Chip class="m-2" label="Transforms / Transitions" />
                    <Chip class="m-2" label="Width" />
                    <Chip class="m-2" label="Height" />
                    <Chip class="m-2" label="Position ( Relative / Absolute / Fixed )" />
                    <p>For Margin / Padding - It depends, if it just a small tweak and not part of the theme. Just make sure we still utilize theme settings</p>
                </ColumnWrapper>

                <ColumnWrapper class="theme_example" additional_class="w-6/12">
                    <Img class="my-5" image_src="sass-logo.png"/>
                    <h3>SASS will be used for theme</h3>
                    <p>On the theme page, we provide settings accessible to anyone, even those without development experience. These settings generate CSS variables utilized within our SASS file. Essentially, rather than manually coding variables, we've developed a user interface for this purpose. The theme includes colors (background, button and font), spaces (margin / padding), fonts (size, family, line height), border radius and box shadow.
                    </p>

                    <div class="my-2">
                        <p><b>Question:</b> If we're utilizing SASS, what's the reason behind using CSS variables instead of SASS variables?</p>

                        <p><b>Answer:</b> For theming, JavaScript is used to adjust values within the user interface. The most straightforward method to link JavaScript-driven styling is through CSS.</p>

                        <hr class="my-4"/>

                        <p><b>Question:</b> What would be the disadvantage of using CSS variables within SASS?</p>

                        <p><b>Answer:</b> Currently, only the SASS color function is supported, such as in the example: darken(var(--tbs-bg-primary-color), 10%). However, this syntax is invalid, and we won't be utilizing the SASS color function. Our UI/UX designer has provided precise hexadecimal codes for colors, eliminating the need for this function.</p>

                        <hr class="my-4"/>

                        <p><b>Question:</b> What is the reason behind separating the implementation in Tailwind?</p>

                        <p><b>Answer:</b> The reason for separating the implementation in Tailwind is to address concerns distinctly: Tailwind manages layouting responsibilities, while CSS variables and SASS handle branding and theming aspects.</p>
                    </div>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <ContainerWrapper additional_class="max-w-5xl my-5">
            <RowWrapper>
                <ColumnWrapper>
                    <h2 class="font-bold">Here's the idea below</h2>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
        <ContainerWrapper additional_class="max-w-5xl">
            <RowWrapper>
                <ColumnWrapper additional_class="w-6/12">
                    <h3>Skeleton / Wireframe layout (Tailwind)</h3>
                    <div class="flex my-2">
                        <div class="w-6/12 mx-1 border border-solid border-2 border-gray-300 p-2">
                            Column 1
                        </div>
                        <div class="w-6/12 mx-1 border border-solid border-2 border-gray-300 p-2">
                            Column 2
                        </div>
                    </div>
                    <div class="flex mx-1 my-2">
                        <div class="w-full border border-solid border-2 border-gray-300 p-2">
                            Column Full
                        </div>
                    </div>
                    <div class="flex mx-1">
                        <button class="border border-solid border-2 border-gray-200 py-2 px-4">Button</button>
                    </div>
                </ColumnWrapper>

                <ColumnWrapper class="theme_example" additional_class="w-6/12">
                    <h3>Applied theme style (SASS + theme settings)</h3>
                    <div class="flex my-2">
                        <div class="column1 w-6/12 mx-1 border border-solid border-2 border-gray-300 p-2">
                            Column 1
                        </div>
                        <div class="column2 w-6/12 mx-1 border border-solid border-2 border-gray-300 p-2">
                            Column 2
                        </div>
                    </div>
                    <div class="flex mx-1 my-2">
                        <div class="columnfull w-full border border-solid border-2 border-gray-300 p-2">
                            Column Full
                        </div>
                    </div>
                    <div class="flex mx-1">
                        <button class="tbs-btn-secondary border border-solid border-2 border-gray-200 py-2 px-4">Button</button>
                    </div>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
#read-me {
    img {
        aspect-ratio: auto;
        width: 100%;
        height: auto;
        max-width: 200px;
        max-height: 120px;
        object-fit: contain;
        margin: 20px auto;
        display: block;
    }
}

.theme_example {
        .column1,
        .column2 {
            background: var(--tbs-bg-secondary-color);
            color: var(--tbs-font-primary-color);
            border-radius: var(--tbs-border-radius-md);
            padding: var(--tbs-space-lg);
        }
        .columnfull {
            background: var(--tbs-bg-tertiary-color);
            color: var(--tbs-font-secondary-color);
            border-radius: var(--tbs-border-radius-md);
            padding: var(--tbs-space-lg);
        }
    }
</style>