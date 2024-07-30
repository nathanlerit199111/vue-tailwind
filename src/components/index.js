import { defineAsyncComponent } from 'vue'

//WRAPPERS
const SectionWrapper = defineAsyncComponent(() =>
    import('@/components/SectionWrapper.vue')
)
const ContainerWrapper = defineAsyncComponent(() =>
    import('@/components/ContainerWrapper.vue')
)
const RowWrapper = defineAsyncComponent(() =>
    import('@/components/RowWrapper.vue')
)
const ColumnWrapper = defineAsyncComponent(() =>
    import('@/components/ColumnWrapper.vue')
)
const FormWrapper = defineAsyncComponent(() =>
    import('@/components/FormWrapper.vue')
)


//NAVIGATIONS
const SideNavComponent = defineAsyncComponent(() =>
    import('@/components/Navigations/SideNavComponent.vue')
)
const DropDownProfileComponent = defineAsyncComponent(() =>
    import('@/components/Navigations/DropDownProfileComponent.vue')
)


//WIDGETS
const SkeletonLoader = defineAsyncComponent(() =>
    import('@/components/Widgets/Loaders/SkeletonLoader.vue')
)
const ButtonLoader = defineAsyncComponent(() =>
    import('@/components/Widgets/Loaders/ButtonLoader.vue')
)
const AppHeader = defineAsyncComponent(() =>
    import('@/components/Widgets/Headers/AppHeader.vue')
)
const TableComponent = defineAsyncComponent(() =>
    import('@/components/Widgets/Tables/TableComponent.vue')
)
const AccordionComponent = defineAsyncComponent(() =>
    import('@/components/Widgets/Accordion/AccordionComponent.vue')
)
const GalleryImage = defineAsyncComponent(() =>
    import('@/components/Widgets/Galleries/GalleryImage.vue')
)
const CalendarMonth = defineAsyncComponent(() =>
    import('@/components/Widgets/Calendar/CalendarMonth.vue')
)


//UIELEMENTS
const ImgComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/ImgComponent.vue')
)
const ButtonComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/ButtonComponent.vue')
)
const InputComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/InputComponent.vue')
)
const LottieComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/LottieComponent.vue')
)
const OdometerComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/OdometerComponent.vue')
)
const SelectCountry = defineAsyncComponent(() =>
    import('@/components/UIElements/SelectCountry.vue')
)
const TextAreaComponent = defineAsyncComponent(() =>
    import('@/components/UIElements/TextAreaComponent.vue')
)
const UploadCsv = defineAsyncComponent(() =>
    import('@/components/UIElements/UploadCsv.vue')
)
const SVGIcon = defineAsyncComponent(() =>
    import('@/components/UIElements/SVGIcon.vue')
)

export {
    //Wrapper
    SectionWrapper,
    ContainerWrapper,
    RowWrapper,
    ColumnWrapper,
    FormWrapper,

    //Navigations
    SideNavComponent,
    DropDownProfileComponent,

    //Widgets
    SkeletonLoader,
    ButtonLoader,
    AppHeader,
    TableComponent,
    AccordionComponent,
    GalleryImage,
    CalendarMonth,

    //UIElements
    ImgComponent,
    ButtonComponent,
    InputComponent,
    LottieComponent,
    OdometerComponent,
    SelectCountry,
    TextAreaComponent,
    UploadCsv,
    SVGIcon
}