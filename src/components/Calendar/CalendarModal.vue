<script setup>
import { ref } from 'vue'
import InputComponent from '../UIElements/InputComponent.vue';
import TextAreaComponent from '../UIElements/TextAreaComponent.vue';

const props_data = defineProps({
    eventData: {
      type: Object,
      default: () => {}
    }
})


let newEventData = ref({
    name: '',
    description: '',
    date: '',
    time: '',
    backgroundColor: 'lightblue'
})
</script>

<template>
    <div class="modal">
        <div class="calendar-modal-wrapper my-gap-md">
            <!-- VIEW / EDIT / DELETE EVENTS -->
            <div v-if="Object.keys(props_data.eventData).length > 0" class="my-gap-md">
                <div class="my-gap-sm">
                    <h3>{{ props_data.eventData.name }}</h3>
                    <p>{{ props_data.eventData.description }}</p>
                    <p>{{ props_data.eventData.date }}</p>
                    <p>{{ props_data.eventData.time }}</p>
                </div>

                <div class="modal-actions flex justify-end">
                    <button>
                        <i class="pi pi-pencil"/>
                    </button>
                    <button>
                        <i class="pi pi-trash"/>
                    </button>
                    <button class="tbs-btn-secondary" @click="$emit('closeCalendarModal')">
                        Cancel
                    </button>
                </div>
            </div>


            <!-- CREATE EVENTS -->
            <div v-else class="my-gap-md">
                <div class="my-gap-sm">
                    <h3>Create New Event</h3>
                    <div class="mx-gap-sm">
                        <label>Title</label>
                        <InputComponent v-model="newEventData.name" additional_class="w-full" />
                    </div>

                    <div class="mx-gap-sm">
                        <label>Description</label>
                        <TextAreaComponent v-model="newEventData.description" additional_class="w-full" />
                    </div>

                    <div class="mx-gap-sm">
                        <label>Date</label>
                        <InputComponent v-model="newEventData.date" additional_class="w-full" />
                    </div>

                    <div class="mx-gap-sm">
                        <label>Time</label>
                        <InputComponent v-model="newEventData.time" additional_class="w-full" />
                    </div>
                </div>

                <div class="modal-actions flex justify-end">
                    <button class="tbs-btn-primary" @click="$emit('addEvent', newEventData)">
                        Add Event
                    </button>
                    <button class="tbs-btn-secondary" @click="$emit('closeCalendarModal')">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>