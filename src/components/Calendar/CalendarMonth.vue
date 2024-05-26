<script setup>
import { ref, computed } from 'vue'
import moment from 'moment'

import CalendarModal from '@/components/Calendar/CalendarModal.vue'


// Calendar Modal
let isCalendarModal = ref(false)
let selectedEventData = ref({})
const openCalendarModal = (event) => {
  selectedEventData.value = event
  isCalendarModal.value = true
}

// ====== CREATION OF CALENDAR FOR MONTH VIEW USING MOMENTJS ====== //
// Define reactive properties for the selected month and year
const SELECTEDMONTH = ref(moment().month()) // Current month
const SELECTEDYEAR = ref(moment().year()) // Current year

// Define the current date
const CURRENTDATE = moment().date()

// Define Days of the week
const DAYSOFWEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Generate an array of dates for the selected month and year
let dates = computed(() => {
    const DAYSINMONTH = moment().year(SELECTEDYEAR.value).month(SELECTEDMONTH.value).daysInMonth()
    const FIRSTDAYOFMONTH = moment().year(SELECTEDYEAR.value).month(SELECTEDMONTH.value).startOf('month').day()

    // Create an array for the dates of the calendar
    let datesArray = []
    /* 
        Fill in the blanks for the days before the first of the month
        Example if the first day of the month starts at Tuesday, it will create empty box for Sunday and Monday
    */
    for (let i = 0; i < FIRSTDAYOFMONTH; i++) {
        datesArray.push('')
    }
    // Fill in the days of the month
    for (let i = 1; i <= DAYSINMONTH; i++) {
        datesArray.push(i)
    }

    
    // Calculate the number of days in the last week
    const TOTALDAYS = datesArray.length
    const DAYSINLASTWEEK = TOTALDAYS % 7
    const BLANKSAFTER = DAYSINLASTWEEK === 0 ? 0 : 7 - DAYSINLASTWEEK

    /* 
        Fill in the blanks for the days after the end of the month
        Example if the last day of the month end at Thursday, it will create empty box for Friday and Saturday
    */
    for (let i = 0; i < BLANKSAFTER; i++) {
        datesArray.push('')
    }

    return datesArray
});


// Generate arrays for months and years
const MONTHS = moment.months()
const YEARS = Array.from({ length: 101 }, (_, i) => moment().year() - 50 + i) // Last 50 years, next 50 years



// ====== CREATION OF EVENTS ====== //
/*
    Dummy data for events
    Make sure to follow this pattern and date format in backend
    From backend, just pass the data depending on the specific data - in this case, month
*/
const dummyData = [
    { date: 'May 23, 2024', backgroundColor: 'lightblue', eventName: 'Event A' },
    { date: 'May 24, 2024', backgroundColor: 'lightblue', eventName: 'Event A' },
    { date: 'May 25, 2024', backgroundColor: 'lightblue', eventName: 'Event A' },
    { date: 'May 27, 2024', backgroundColor: 'lightblue', eventName: 'Event B' },
    { date: 'May 28, 2024', backgroundColor: 'lightblue', eventName: 'Event C' },
    { date: 'May 23, 2024', backgroundColor: 'lightblue', eventName: 'Event E' },
    { date: 'May 23, 2024', backgroundColor: 'lightblue', eventName: 'Event F' },
    { date: 'May 23, 2024', backgroundColor: 'lightblue', eventName: 'Event G' },
    { date: 'May 23, 2024', backgroundColor: 'lightblue', eventName: 'Event H' },
];

// Function to add colors on the event date
const getBackgroundColor = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D').format('MMM D, YYYY');
    const match = dummyData.find(item => item.date === formattedDate);
    return match ? match.backgroundColor : '';
}

//Function to get the data of the event
const getEventData = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D').format('MMM D, YYYY');
    const events = dummyData.filter(item => item.date === formattedDate);
    return events.length > 0 ? events : [];
}

/*
    Function to check if theres an event
    Refer to the span tag that uses class name 'event-dates'. it condition whether to display it or not
*/
const hasEvent = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D').format('MMM D, YYYY');
    return dummyData.some(item => item.date === formattedDate);
}





/* 
    Function to navigate to previous month
    We can add API call to fetch events on the specific month
*/
const previousMonth = () => {
    SELECTEDMONTH.value -= 1
    if (SELECTEDMONTH.value < 0) {
        SELECTEDMONTH.value = 11
        SELECTEDYEAR.value -= 1
    }
}

/* 
    Function to navigate to next month
    We can add API call to fetch events on the specific month
*/
const nextMonth = () => {
    SELECTEDMONTH.value += 1
    if (SELECTEDMONTH.value > 11) {
        SELECTEDMONTH.value = 0
        SELECTEDYEAR.value += 1
    }
}
</script>

<template>
    <CalendarModal 
        @closeCalendarModal="isCalendarModal = false, selectedEventData = {}" 
        v-if="isCalendarModal"
        :event-data="selectedEventData"
    />
    <div>
        <div class="flex space-x-4 mb-4">
            <!-- Dropdown for selecting month -->
            <select v-model="SELECTEDMONTH" class="p-2 border rounded">
                <option v-for="(month, index) in MONTHS" :key="index" :value="index">
                    {{ month }}
                </option>
            </select>

            <!-- Dropdown for selecting year -->
            <select v-model="SELECTEDYEAR" class="p-2 border rounded">
                <option v-for="year in YEARS" :key="year" :value="year">
                    {{ year }}
                </option>
            </select>


            <!-- Buttons for navigating to previous and next month -->
            <button @click="previousMonth" class="p-2 border rounded">
                <i class="pi pi-angle-left"></i>
            </button>
            <button @click="nextMonth" class="p-2 border rounded">
                <i class="pi pi-angle-right"></i>
            </button>
        </div>

        <div class="calendar-wrapper grid grid-cols-7">
            <!-- Render the days of the week headers -->
            <div class="calendar-header p-5" v-for="day in DAYSOFWEEK" :key="day">
                {{ day }}
            </div>

            <!-- Render the dates of the selected month -->
            <div
                class="day-wrapper py-2"
                v-for="(date, index) in dates"
                :key="index"
                @click="isCalendarModal = true"
            >
                <p :class="['days', { 'current-day': date === CURRENTDATE && SELECTEDMONTH === moment().month() && SELECTEDYEAR === moment().year() }]">{{ date }}</p>
                <div
                    @click="openCalendarModal(event)" 
                    v-for="event in getEventData(SELECTEDYEAR, SELECTEDMONTH, date)" :key="event.eventName"
                    v-if="hasEvent(SELECTEDYEAR, SELECTEDMONTH, date)" class="event-dates text-left p-2" :style="{ backgroundColor: getBackgroundColor(SELECTEDYEAR, SELECTEDMONTH, date) }">
                    <p>{{ event.eventName }}</p>
                    <p>{{ event.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
