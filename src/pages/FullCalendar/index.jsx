import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
function FullCalendarPage(props) {
    const   handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
    return (

        <div>
            <FullCalendar
                plugins={[ timeGridPlugin ]}
                initialView="timeGridWeek"
                selectable
                weekends={false}
                handleDateClick ={handleDateClick}
                    events={[
                    { title: 'event 1', date: '2019-04-01' },
                    { title: 'event 2', date: '2019-04-02' }
                ]}
            />
        </div>
    );
}

export default FullCalendarPage;