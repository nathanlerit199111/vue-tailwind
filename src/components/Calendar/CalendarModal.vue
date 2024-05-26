<script setup>
const props_data = defineProps({
    eventData: {
      type: Object,
      required: true
    }
})
</script>

<template>
    <div class="modal">
        <div class="calendar-modal-wrapper my-gap-md">
            <div class="calendar-modal-header">
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
        </div>
    </div>
</template>