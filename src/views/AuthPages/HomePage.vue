<script setup>
  import { ref, onMounted, watchEffect, onBeforeUnmount } from 'vue'

  import SectionWrapper from '@/components/SectionWrapper.vue'
  import ContainerWrapper from '@/components/ContainerWrapper.vue'
  import RowWrapper from '@/components/RowWrapper.vue'
  import ColumnWrapper from '@/components/ColumnWrapper.vue'
  import SkeletonLoader from '@/components/Loaders/SkeletonLoader.vue'
  import UploadCsv from '@/components/UIElements/UploadCsv.vue'
  import ImgComponent from '@/components/UIElements/ImgComponent.vue'
  import TableComponent from '@/components/Tables/TableComponent.vue'
  import WizardWrapper from '@/components/WizardWrapper.vue'
  import ButtonComponent from '@/components/UIElements/ButtonComponent.vue'
  import AccordionComponent from '@/components/Accordion/AccordionComponent.vue'

  //API
  import AuthApi from '@/api/product-api.js'
  let products = ref()
  let isLoading = ref(true)
  const getProductApi = async () => {
    try {
      let response = await AuthApi.getProduct()
      products.value = response.data
    } catch (e) {
      console.log('ERROR', e)
    } finally {
      isLoading.value = false
    }
  }

  const accordion_array = [
    {
      name: 'acc1',
      content: 'accCon1'
    },
    {
      name: 'acc2',
      content: 'accCon2'
    }
  ]

  onMounted(() => {
    getProductApi()
  })

  const deleteItem = (item) => {
    console.log('ITEM', item)
  }

  const tabs = ref([
    {
      name: 'Tab 1',
      index: 1,
      isFillUp: false,
      child: []
    },
    {
      name: 'Tab 2',
      index: 2,
      isFillUp: false,
      child: []
    },
    {
      name: 'Tab 3',
      index: 3,
      isFillUp: false,
      child: [
        {
          name: 'Tab 3 Index 1',
          index: 3.1,
          isFillUp: false
        },
        {
          name: 'Tab 3 Index 2',
          index: 3.2,
          isFillUp: false
        },
        {
          name: 'Tab 3 Index 3',
          index: 3.3,
          isFillUp: false
        }
      ]
    },
    {
      name: 'Tab 4',
      index: 4,
      isFillUp: false,
      child: []
    },
    {
      name: 'Tab 5',
      index: 5,
      isFillUp: false,
      child: []
    }
  ])

  //Functions from child component
  const tableRef = ref()
  watchEffect(() => {
    const newValue = tableRef.value?.first
    //Add logic here to request API base on pagination
    console.log('Value Changed', newValue)
  })
</script>

<template>
  <SkeletonLoader
    v-if="isLoading"
    type="table"
  />
  <div v-if="!isLoading">
    <SectionWrapper>
      <ContainerWrapper>
        <RowWrapper additional_class="items-center">
          <ColumnWrapper additional_class="grow">
            <h3>Payment Types List</h3>
            <p>Display all payment types</p>
          </ColumnWrapper>
          <ColumnWrapper>
            <UploadCsv />
          </ColumnWrapper>
        </RowWrapper>
      </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper>
      <ContainerWrapper>
        <RowWrapper>
          <ColumnWrapper additional_class="w-full">
            <AccordionComponent
              :items="accordion_array"
              right_icon="bell"
              title_key="name"
              content_key="content"
            />

            <!--
              - table_data props will pass the entire data from database
              - headers props will just literally display the text. if no value, it will load the whole data
              - fields props will only display data base on the provided property name in the Array. if no value, it will load the whole data

              slots - there are 2 types of slot; head and item
              show_select - will show checkbox
            -->
            <TableComponent
              :table_data="products?.products"
              :headers="['ID', 'Brand', 'Title', 'Description', 'Price']"
              :fields="['id', 'brand', 'title', 'description', 'price']"
              :show_checkbox="true"
              ref="tableRef"
            >
              <template #head.image>
                <th>Image</th>
              </template>
              <template #item.image="{ item }">
                <td class="p-5">
                  <ImgComponent
                    :image_src="item.images[0]"
                    :image_alt="item.title"
                    image_loading="lazy"
                  />
                </td>
              </template>

              <template #head.action>
                <th>Actions</th>
              </template>
              <template #item.action="{ item }">
                <td class="p-5">
                  <div class="flex mx-gap-sm">
                    <ButtonComponent
                      :label="item.brand"
                      btn_type="primary"
                      variant=""
                      size="small"
                      left_icon="bell"
                      :is_loader="true"
                    />
                    <ButtonComponent
                      :label="item.brand"
                      btn_type="secondary"
                      variant=""
                      size="small"
                      :is_loader="true"
                      @click="deleteItem(item.title)"
                    />
                  </div>
                </td>
              </template>
            </TableComponent>

            <!--  <DataTable :value="products?.products">
                    <Column field="id" header="id"></Column>
                    <Column field="brand" header="brand"></Column>
                    <Column field="title" header="title"></Column>
                    <Column field="description" header="description"></Column>
                    <Column field="price" header="price"></Column>
                    <Column field="image" header="image">
                        <template #body="slotProps">
                            <ImgComponent
                                :image_src="slotProps?.data?.images[0]"
                                image_alt="asdasd"
                                image_loading="lazy"
                            />
                        </template>
                    </Column>
                    <Column field="image" header="action">
                        <template #body="slotProps">
                            <div class="flex mx-gap-sm">
                                <button class="tbs-btn-primary">xxxx</button>
                                <button class="tbs-btn-secondary">Delete</button>
                            </div>
                        </template>
                
                    </Column>
                  </DataTable> -->
          </ColumnWrapper>
        </RowWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  </div>
</template>
