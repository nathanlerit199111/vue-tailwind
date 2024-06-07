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
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    backgroundColor: 'lightblue'
})

/*
    We need to separate the variable for date and time.
    If directly bind to newEventData.date and newEventData.time then applied computed to format data,
    We will get maximum call stack size error
*/
let startDate = ref('');
let endDate = ref('');
let startTime = ref('');
let endTime = ref('');
let is24HrFormat = ref(false);

// Utility function to format dates
const formatDate = (dateValue) => {
    if (!dateValue) return '';
    const rawDate = new Date(dateValue);
    const month = String(rawDate.getMonth() + 1).padStart(2, '0');
    const day = String(rawDate.getDate()).padStart(2, '0');
    const year = rawDate.getFullYear();
    return `${month}/${day}/${year}`;
};

// Utility function to format time
const formatTime = (timeValue, format24Hr = false) => {
    if (!timeValue) return '';
    const rawTime = new Date(timeValue);
    const hours = rawTime.getHours();
    const minutes = rawTime.getMinutes();
    if (format24Hr) {
        // Format for 24-hour clock
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    } else {
        // Format for 12-hour clock
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Handle midnight (0 hours)
        const formattedMinutes = String(minutes).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }
};

// Computed properties using the utility functions
const formattedFromDate = computed(() => formatDate(startDate.value));
const formattedToDate = computed(() => formatDate(endDate.value));
const formattedFromTime = computed(() => formatTime(startTime.value, is24HrFormat.value));
const formattedToTime = computed(() => formatTime(endTime.value, is24HrFormat.value));


newEventData.value.startDate = formattedFromDate;
newEventData.value.endDate = formattedToDate;
newEventData.value.startTime = formattedFromTime;
newEventData.value.endTime = formattedToTime;


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

                    <div>
                        <label>Date</label>
                        <div class="flex mx-gap-sm">
                            <div class="mx-gap-sm">
                                <label>From</label>
                                <!-- <InputComponent v-model="newEventData.date" additional_class="w-full" /> -->
                                <Calendar v-model="startDate" showButtonBar  class="w-full"/>
                            </div>

                            <div class="mx-gap-sm">
                                <label>To</label>
                                <!-- <InputComponent v-model="newEventData.date" additional_class="w-full" /> -->
                                <Calendar v-model="endDate" showButtonBar  class="w-full"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label>Time</label>
                        <div class="flex mx-gap-sm">
                            <div class="mx-gap-sm">
                                <label>From</label>
                                <!-- <InputComponent v-model="newEventData.time" additional_class="w-full" /> -->
                                <Calendar v-model="startTime" showButtonBar timeOnly hourFormat="12" class="w-full"/>
                            </div>
                            <div class="mx-gap-sm">
                                <label>To</label>
                                <!-- <InputComponent v-model="newEventData.time" additional_class="w-full" /> -->
                                <Calendar v-model="endTime" showButtonBar timeOnly hourFormat="12" class="w-full"/>
                            </div>
                        </div>
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