<template>
    <CalendarModal 
        @closeCalendarModal="isCalendarModal = false" 
        v-if="isCalendarModal"
        :event-data="selectedEventData"
    />
    <div>
        <div class="flex space-x-4 mb-4">
            <!-- Dropdown for selecting month -->
            <select v-model="selectedMonth" class="p-2 border rounded">
                <option v-for="(month, index) in months" :key="index" :value="index">
                    {{ month }}
                </option>
            </select>

            <!-- Dropdown for selecting year -->
            <select v-model="selectedYear" class="p-2 border rounded">
                <option v-for="year in years" :key="year" :value="year">
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
            <div class="calendar-header p-5" v-for="day in daysOfWeek" :key="day">
                {{ day }}
            </div>

            <!-- Render the dates of the selected month -->
            <div
                class="day-wrapper py-2"
                v-for="(date, index) in dates"
                :key="index"
            >
                <p :class="['days', { 'current-day': date === currentDate && selectedMonth === moment().month() && selectedYear === moment().year() }]">{{ date }}</p>
                <span
                    @click="openCalendarModal(event)" 
                    v-for="event in getEventData(selectedYear, selectedMonth, date)" :key="event.eventName"
                    v-if="hasEvent(selectedYear, selectedMonth, date)" class="event-dates" :style="{ backgroundColor: getBackgroundColor(selectedYear, selectedMonth, date) }">
                    {{ event.eventName }}
                </span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import moment from 'moment';

import CalendarModal from '@/components/Calendar/CalendarModal.vue';


// Calendar Modal
const isCalendarModal = ref(false)
const selectedEventData = ref(null)
const openCalendarModal = (event) => {
  selectedEventData.value = event
  isCalendarModal.value = true
}

// ====== CREATION OF CALENDAR FOR MONTH VIEW USING MOMENTJS ====== //
// Define reactive properties for the selected month and year
const selectedMonth = ref(moment().month()) // Current month
const selectedYear = ref(moment().year()) // Current year

// Define the current date
const currentDate = moment().date()

// Define Days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Generate an array of dates for the selected month and year
const dates = computed(() => {
    const daysInMonth = moment().year(selectedYear.value).month(selectedMonth.value).daysInMonth()
    const firstDayOfMonth = moment().year(selectedYear.value).month(selectedMonth.value).startOf('month').day()

    // Create an array for the dates of the calendar
    const datesArray = []
    /* 
        Fill in the blanks for the days before the first of the month
        Example if the first day of the month starts at Tuesday, it will create empty box for Sunday and Monday
    */
    for (let i = 0; i < firstDayOfMonth; i++) {
        datesArray.push('')
    }
    // Fill in the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        datesArray.push(i)
    }

    
    // Calculate the number of days in the last week
    const totalDays = datesArray.length
    const daysInLastWeek = totalDays % 7
    const blanksAfter = daysInLastWeek === 0 ? 0 : 7 - daysInLastWeek

    /* 
        Fill in the blanks for the days after the end of the month
        Example if the last day of the month end at Thursday, it will create empty box for Friday and Saturday
    */
    for (let i = 0; i < blanksAfter; i++) {
        datesArray.push('')
    }

    return datesArray
});


// Generate arrays for months and years
const months = moment.months();
const years = Array.from({ length: 101 }, (_, i) => moment().year() - 50 + i); // Last 50 years, next 50 years



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
    selectedMonth.value -= 1
    if (selectedMonth.value < 0) {
        selectedMonth.value = 11
        selectedYear.value -= 1
    }
}

/* 
    Function to navigate to next month
    We can add API call to fetch events on the specific month
*/
const nextMonth = () => {
    selectedMonth.value += 1
    if (selectedMonth.value > 11) {
        selectedMonth.value = 0
        selectedYear.value += 1
    }
}
</script>



<style lang="scss">
.calendar-header {
    border: solid 1px #e9e9e9;
    background-color: #f0f0f0;
    font-weight: bold;
    text-align: center;
}

.day-wrapper {
    border: solid 1px #e9e9e9;
    text-align: center;
    position: relative;
    min-height: 80px;
}
.days {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
}
.current-day {
    background: blue;
    color: #fff;
    border-radius: 50%;
}
.event-dates {
    width: 100%;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 8px 0;
    cursor: pointer;
    border-radius: 3px;
}

select {
    padding: 8px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
}
</style>
