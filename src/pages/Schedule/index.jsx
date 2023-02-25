import React from 'react';
import moment from 'moment';
import {Calendar, momentLocalizer} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

function SchedulePage(props) {
    const events = [
        {
            title: 'Event 1',
            start: moment('2023-02-25 09:00:00'),
            end: moment('2023-02-25 10:00:00'),
        },
        {
            title: 'Event 2',
            start: moment('2023-02-26 14:00:00'),
            end: moment('2023-02-26 15:30:00'),
        },
    ];
    const localizer = momentLocalizer(moment);
    return (
        <div className='minhtrung-content-calendar'>
            <Calendar
                events={events}
                localizer={localizer}
                views={['month', 'week', 'day']}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={event => console.log(event)}
            />
        </div>
    );
}

export default SchedulePage;