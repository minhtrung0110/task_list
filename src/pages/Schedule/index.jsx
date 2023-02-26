import React, {useCallback, useMemo, useState} from 'react';
import moment from 'moment';
import {Calendar,
    Views,
    DateLocalizer,
    momentLocalizer} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

function SchedulePage(props) {
    const [myEvents, setEvents] = useState([])
    // const events = [
    //     {
    //         title: 'Event 1',
    //         start: moment('2023-02-25 09:00:00'),
    //         end: moment('2023-02-25 10:00:00'),
    //     },
    //     {
    //         title: 'Event 2',
    //         start: moment('2023-02-26 14:00:00'),
    //         end: moment('2023-02-26 15:30:00'),
    //     },
    // ];
    const localizer = momentLocalizer(moment);

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event Name')
            if (title) {
                setEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setEvents]
    )

    const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
        []
    )
    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2023, 2, 12),
            scrollToTime: new Date(2023, 1, 1, 6),
        }),
        []
    )
    return (
        <div className='minhtrung-content-calendar'>
            <Calendar
                defaultDate={defaultDate}
                defaultView={Views.MONTH}
                events={myEvents}
                localizer={localizer}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                scrollToTime={scrollToTime}
            />
        </div>
    );
}

export default SchedulePage;