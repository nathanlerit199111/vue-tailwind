<script setup>
import InputComponent from '../UIElements/InputComponent.vue';
const props_data = defineProps({
    eventData: {
      type: Object,
      default: () => {}
    }
})
</script>

<template>
    <div class="modal">
        <div class="calendar-modal-wrapper my-gap-md">
            <!-- VIEW / EDIT / DELETE EVENTS -->
            <div v-if="Object.keys(props_data.eventData).length > 0" class="calendar-modal-header">
                <div class="flex justify-end">
                    <button>
                        <i class="pi pi-pencil"/>
                    </button>
                    <button>
                        <i class="pi pi-trash"/>
                    </button>
                    <button @click="$emit('closeCalendarModal')">
                        <i class="pi pi-times"/>
                    </button>
                </div>
                

                <div class="my-gap-sm">
                    <h3>{{ props_data.eventData.eventName }}</h3>
                    <p>Monday, April 29 | 9:00 - 9:30am</p>
                    <p>Weekly on weekdays, until April 30, 2024</p>
                </div>
            </div>


            <!-- CREATE EVENTS -->
            <div v-else>
                <div class="flex justify-end">
                    <button @click="$emit('closeCalendarModal')">
                        <i class="pi pi-times"/>
                    </button>
                </div>
                
                <div class="my-gap-sm">
                    <h3>Create New Event</h3>
                    <div class="mx-gap-sm">
                        <label>Event Title</label>
                        <InputComponent additional_class="w-full" />
                    </div>

                    <div class="mx-gap-sm">
                        <label>Event Date</label>
                        <InputComponent additional_class="w-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>