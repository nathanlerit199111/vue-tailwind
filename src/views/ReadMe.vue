<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import RowWrapper from '@/components/RowWrapper.vue'
    import ColumnWrapper from '@/components/ColumnWrapper.vue'
    import ImgComponent from '@/components/UIElements/ImgComponent.vue'


    //VUE PRIME
    import Chip from 'primevue/chip';
    import Message from 'primevue/message';


    const tailwindCode = `<input 
    type="text"
    class="bg-red-300 text-red-100 rounded-md w-2/12 text-lg font-normal border border-solid border-black"
/>`

    const semanticCode = `<input 
    type="text"
    class="input-style"
/>
.input-style {
    background: red;
    border-radius: 10px;
    width: 50%;
    font-size: 30px;
    font-weight: 400;
    border: solid 1px #000;
}`
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
                    <ImgComponent class="my-5" image_src="tailwind-logo.png"/>
                    <h3>Tailwind will be used for creating Skeleton / Wireframe layout</h3>
                    <p>Example but not limited to</p>
                    <Chip class="m-2" label="Flexbox" />
                    <Chip class="m-2" label="Grid" />
                    <Chip class="m-2" label="Text Align" />
                    <Chip class="m-2"label="Font Weight" />
                    <Chip class="m-2" label="Transforms / Transitions" />
                    <Chip class="m-2" label="Width" />
                    <Chip class="m-2" label="Height" />
                    <Chip class="m-2" label="Position ( Relative / Absolute / Fixed )" />
                    <p>Avoid utilizing Tailwind styling for background colors, font colors, font sizes, border radius, and box shadows as these elements are defined within the theme settings.</p>
                    <p>For Margin / Padding - It depends, if it just a small tweak and not part of the theme. Just make sure we still utilize theme settings</p>
                </ColumnWrapper>

                <ColumnWrapper class="theme_example" additional_class="w-6/12">
                    <ImgComponent class="my-5" image_src="sass-logo.png"/>
                    <h3>SASS will be used for theme</h3>
                    <p>On the theme page, we provide settings accessible to anyone, even those without development experience. These settings generate CSS variables utilized within our SASS file. Essentially, rather than manually coding variables, we've developed a user interface for this purpose. The theme includes colors (background, button and font), spaces (margin / padding), fonts (size, family, line height), border radius and box shadow.
                    </p>

                    <div class="my-2">
                        <p><b>Question:</b> If we're utilizing SASS, what's the reason behind using CSS variables instead of SASS variables?</p>

                        <p><b>Answer:</b> For theming, JavaScript is used to adjust values within the user interface. The most straightforward method to link JavaScript-driven styling is through CSS.</p>

                        <hr class="my-4"/>

                        <p><b>Question:</b> What would be the disadvantage of using CSS variables within SASS?</p>

                        <p><b>Answer:</b> Currently, only the SASS color functionality, such as in the example: <code>darken(var(--tbs-bg-primary-color), 10%)</code>This syntax is invalid. Our UI/UX designer has provided precise hexadecimal codes for colors, eliminating the need for this function.</p>

                        <hr class="my-4"/>

                        <p><b>Question:</b> What is the reason behind separating the implementation in Tailwind?</p>

                        <p><b>Answer:</b> 
                            <ul class="list-disc">
                                <li>To address concerns distinctly: Tailwind manages layouting responsibilities, while CSS variables and SASS handle branding and theming aspects.</li>
                                <li>It gives the developer more flexibility since most of the time brand / theme styling is outside Tailwind and which can be quite challenging when trying to use utility classes to adjust themes.</li>
                                <li>Avoiding excessive DOM size that can potentially affects performance. Why? large DOM size increase memory usage that can cause longer style calculation and produce slower layout rendering.
                                </li>
                            </ul>
                        </p>
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


    <SectionWrapper>
        <ContainerWrapper additional_class="max-w-5xl my-5">
            <RowWrapper>
                <ColumnWrapper>
                    <h2 class="font-bold">Downside and Workaround in Tailwind</h2>
                    <h3>None Semantic</h3>
                    <p>Tailwind doesn't follow a semantic approach, unlike HTML which provides meaning and structure to content, while CSS handles styling.</p>
                    <p>It uses utility classes (small and single-purpose) to style website in HTML itself. It cannot separate from its structure. For better understanding <a target="_blank" href="https://nuejs.org/blog/tailwind-vs-semantic-css/">https://nuejs.org/blog/tailwind-vs-semantic-css/</a></p>

                    <div>
                        <h4>Example:</h4>
                        <p><b>Tailwind</b> - To adjust the style, you need to add or modify the utility class names, as they aren't separated from the structure.</p>
                        
                        <code>
                            <pre>{{ tailwindCode }}</pre>
                        </code>



                        <p><b>Semantic</b> - To adjust the style, you must include a class name; with external CSS, you can adjust styles collectively (as blocks of styles rather than single-purpose). This styling is distinct from the structure it modifies.</p>
                        
                        <code>
                            <div>
                                <pre>{{ semanticCode }} </pre>
                            </div>
                        </code> 
                    </div>
                </ColumnWrapper>
            </RowWrapper>

            <RowWrapper>
                <ColumnWrapper>
                    <h4><b>How's that even a problem?</b></h4>
                    <p>Try to imagine this, you have an input field. Your web app uses a lot of forms. On some forms: </p>
                    <ul class="list-disc pl-4">
                        <li>Other developer miss some class names to some input fields</li>
                        <li>Other developer mistakenly added unnecessary class names to some input fields</li>
                        <li>Other developer use wrong class name. Instead of using p-2 you use p-4 etc.</li>
                        <li>You have many input element existing in your web app</li>
                    </ul>
                    <p>In short, many input fields are not consistent due to different developers approach (input field are not just the only elements, what if there are other elements that has the same case.)</p>
                    <p>Then your task is to fix the style to make it consistent.</p>

                    <h4><b>How most developer will fix this?</b></h4>
                    <p>Either, overriding styles with external CSS may involve the potential use of !important declarations.</p>
                    <p>Manually correct all the utility classes for the impacted input elements.</p>

                    <p>This will start as a small problem and eventually will create a big chunk of hot fix codes. It will affects maintainability and performance</p>
                </ColumnWrapper>
            </RowWrapper>

            <RowWrapper>
                <ColumnWrapper>
                    <h4><b>Proper Workaround</b></h4>
                    <p>Atomic Design - Create component even for smallest / single element</p>

                    <code>
                        <p>InputComponent.vue</p>
                        <pre>{{ tailwindCode }}</pre>
                    </code>

                    <p>Utilizing this InputComponent.vue component will ensure it uses the correct tailwind utility class names.</p>
                    <p>If happens you need to change the style, Just go to that component and update the utility class names and all input field will update accordingly.</p>
                </ColumnWrapper>
            </RowWrapper>


            <RowWrapper>
                <ColumnWrapper>
                    <h3>Excessive DOM Size</h3>
                    <p>Since it uses too much class names, and possible extra divs or wrapper. We just have to balance the usage of Tailwind.</p>
                </ColumnWrapper>
            </RowWrapper>

            <RowWrapper>
                <ColumnWrapper>
                    <h3>Front end functional components</h3>
                    <p>Tailwind only provided style for FREE and not functional components like, table, modal, datepicker, etc.</p>
                    <p>You need to pay for some useful functional component. With that we will use VuePrime - It uses tailwind with components                     <a target="_blank" href="https://primevue.org/">https://primevue.org/</a></p>
                </ColumnWrapper>
            </RowWrapper>

            <RowWrapper>
                <ColumnWrapper>
                    <h3>Conclusion</h3>
                    <p>Each approach has its advantages and disadvantages. Tailwind simplifies UI layout for developers by offering easy-to-use utility classes. Unlike Bootstrap, which often combines multiple styles in a single class, Tailwind's approach of one style per class minimizes the need for overriding styles.</p>

                    <p>However, it breaks from the semantic practice of separating HTML for the structure and meaning of a website, and CSS for styling purposes.</p>

                    <p>Balancing developers experience and web performance is the key.</p>
                </ColumnWrapper>
            </RowWrapper>
        </ContainerWrapper>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
h1,h2,h3,h4,p {
    margin: 10px 0;
}
a {
    color: rgb(37, 141, 159);
}
li {
    font-size: 13px;
}
code {
    padding: 10px;
    background: #595959;
    color: #fff;
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
}
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