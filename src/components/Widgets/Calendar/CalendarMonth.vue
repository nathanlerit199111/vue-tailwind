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
let dummyData = [
    { 
        name: 'Event A',
        description: 'Description for Event A',
        dates: [
            { date: '06/10/2024', startTime: '9:30 AM', endTime: '10:30 AM' },
            { date: '06/11/2024', startTime: '9:30 AM', endTime: '10:30 AM' },
            { date: '06/12/2024', startTime: '9:30 AM', endTime: '10:30 AM' },
            { date: '06/13/2024', startTime: '9:30 AM', endTime: '10:30 AM' }
        ],
        backgroundColor: 'lightblue'
    }
]


const addEventData = (item) => {
    dummyData.push(item); // This adds the event to the local array
    // Add API call here to update the backend as well
    console.log("Added Event:", dummyData);
    isCalendarModal.value = false;
};

const isDateWithinEvent = (date, event) => {
    // Parse the event date strings
    const eventDates = event.dates.map(eventDate => new Date(eventDate.date));

    // Parse the target date string
    const targetDate = new Date(date);

    // Check if the target date matches any event date
    return eventDates.some(eventDate => {
        return eventDate.getFullYear() === targetDate.getFullYear() &&
            eventDate.getMonth() === targetDate.getMonth() &&
            eventDate.getDate() === targetDate.getDate();
    });
};



// Function to add colors on the event date
const getBackgroundColor = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D', true).format('MM/DD/YYYY');
    const match = dummyData.find(event => isDateWithinEvent(formattedDate, event));
    return match ? match.backgroundColor : '';
};

//Function to get the data of the event
const displayEventData = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D', true).format('MM/DD/YYYY');
    return dummyData.filter(event => isDateWithinEvent(formattedDate, event));
};

/*
    Function to check if theres an event
    Refer to the span tag that uses class name 'event-dates'. it condition whether to display it or not
*/
const hasEvent = (year, month, date) => {
    const formattedDate = moment(`${year}-${month + 1}-${date}`, 'YYYY-M-D', true).format('MM/DD/YYYY');
    return dummyData.some(event => isDateWithinEvent(formattedDate, event));
};





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


// ====== CRUD ====== //
const addEvent = () => {
    console.log("DELETE")
}
const deleteEvent = () => {
    console.log("DELETE")
}
</script>

<template>
    <CalendarModal 
        @closeCalendarModal="isCalendarModal = false, selectedEventData = {}"
        @addEvent="addEventData"
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
                :class="`day-wrapper py-2 ${date ? 'cursor-pointer' : 'cursor-default'}`"
                v-for="(date, index) in dates"
                :key="index"
                @click="date ? isCalendarModal = true : null"
            >
                <p :class="['days', { 'current-day': date === CURRENTDATE && SELECTEDMONTH === moment().month() && SELECTEDYEAR === moment().year() }]">{{ date }}</p>
                <div
                    @click="openCalendarModal(event)" 
                    v-for="event in displayEventData(SELECTEDYEAR, SELECTEDMONTH, date)" :key="event.name"
                    v-if="hasEvent(SELECTEDYEAR, SELECTEDMONTH, date)" class="event-dates text-left p-2" :style="{ backgroundColor: getBackgroundColor(SELECTEDYEAR, SELECTEDMONTH, date) }">
                    <p>{{ event.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .calendar-header {
        border: solid 1px #e9e9e9;
        background: var(--tbs-calendar-head-bg-color);
        color: var(--tbs-calendar-head-font-color);
        font-weight: bold;
        text-align: center;
    }

    .day-wrapper {
        border: solid 1px #e9e9e9;
        text-align: center;
        position: relative;
        min-height: 80px;
        max-height: 150px;
        overflow-y: auto;
    }
    .days {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto auto 20px;
        color: var(--tbs-font-primary-color-100);
    }
    .current-day {
        background: var(--tbs-calendar-head-bg-color);
        color: var(--tbs-calendar-head-font-color);
        border-radius: 50%;
    }
    .event-dates {
        width: 100%;
        min-height: 20px;
        color: var(--tbs-calendar-head-font-color);
        margin: 3px 0;
        border-radius: 3px;
    }

    select {
        padding: 8px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
    }
</style>