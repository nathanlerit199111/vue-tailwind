<script setup>
import { ref, computed  } from 'vue'
import InputComponent from '../UIElements/InputComponent.vue';
import TextAreaComponent from '../UIElements/TextAreaComponent.vue';

import Calendar from 'primevue/calendar';

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

/*
    We need to separate the variable for date and time.
    If directly bind to newEventData.date and newEventData.time then applied computed to format data,
    We will get maximum call stack size error
*/
let date = ref('')
let time = ref('')
let is24HrFormat = ref(false)
const formattedDate = computed(() => {
    const rawDate = new Date(date.value)
    const month = String(rawDate.getMonth() + 1).padStart(2, '0')
    const day = String(rawDate.getDate()).padStart(2, '0')
    const year = rawDate.getFullYear()
    return `${month}/${day}/${year}`
})
const formattedTime = computed(() => {
    if (!time.value) return '' // Return empty string if time is not set
    const rawTime = new Date(time.value)
    let hours = rawTime.getHours()
    const minutes = rawTime.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // Handle midnight (0 hours)
    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    return `${formattedHours}:${formattedMinutes} ${ampm}`
})

const formattedTime24hr = computed(() => {
    if (!time.value) return ''; // Return empty string if time is not set
    const rawTime = new Date(time.value);
    const hours = String(rawTime.getHours()).padStart(2, '0');
    const minutes = String(rawTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
})

newEventData.value.date = formattedDate
newEventData.value.time = is24HrFormat.value ? formattedTime24hr : formattedTime
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
                        <!-- <InputComponent v-model="newEventData.date" additional_class="w-full" /> -->
                        <Calendar v-model="date" showButtonBar  class="w-full"/>
                    </div>

                    <div class="mx-gap-sm">
                        <label>Time</label>
                        <!-- <InputComponent v-model="newEventData.time" additional_class="w-full" /> -->
                        <Calendar v-model="time" showButtonBar timeOnly hourFormat="12" class="w-full"/>
                    </div>
                </div>

                <div class="modal-actions flex justify-end mx-gap-sm">
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