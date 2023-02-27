import React, {useCallback, useMemo, useState} from 'react';
import moment from 'moment';
import {Calendar,
    Views,
    DateLocalizer,
    momentLocalizer} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.scss'
function SchedulePage(props) {
    const [myEvents, setEvents] = useState([])
    const events = [
        {
            title: 'Sự kiện A',
            start: new Date(),
            end: new Date(),
            description: 'Mô tả sự kiện A'
        },
        {
                title: 'Họp Dự Án ',
                type: 'event',
                description: '',
                file:'',
                members: [],
                notifications:true,
                repeats:true,
            start: new Date(),
            end: new Date(),
            },
        {
            title: 'Sự kiện B',
            start: new Date(),
            end: new Date(),
            description: 'Mô tả sự kiện B'
        },
        // ...
    ];

    // const events = [
    //     {
    //         title: 'Họp Dự Án ',
    //         type: 'event',
    //         description: '',
    //         file:'',
    //         members: [],
    //         notifications:true,
    //         repeats:true,
    //         start: moment('2023-02-25 09:00:00'),
    //         end: moment('2023-02-25 10:00:00'),
    //     },
    //     {
    //         title: 'Hoàn Thành Lịch Biểu ',
    //         type: 'todo',
    //         description: '',
    //         notifications:true,
    //         repeats:true,
    //         start: moment('2023-02-25 09:00:00'),
    //         end: moment('2023-02-25 10:00:00'),
    //     },
    //     {
    //         title: 'Đóng Tiền Nước ',
    //         type: 'reminder',
    //         notifications:true,
    //         repeats:true,
    //         start: moment('2023-02-25 09:00:00'),
    //         end: moment('2023-02-25 10:00:00'),
    //     },
    // ];
    const localizer = momentLocalizer(moment);

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event Name')
            if (title) {
                setEvents((prev) => [...prev, { start, end, title, allDay:true }])
            }
        },
        [setEvents]
    )

    const handleSelectEvent = useCallback(
        (event) => {
            window.alert(event.title)
            console.log(event)
        },
        []
    )
    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2023, 2, 12),
            scrollToTime: new Date(2023, 1, 1, 6),
        }),
        []
    )
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: event.color,
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
        return {
            style: style,
            title: event.title,
            type:event.type,
            description: event.description,
            files:event.files,
            members:event.members,
            notification:event.notification,
            repeats:event.repeat,
        };
    };
    return (
        <div className='minhtrung-content-calendar'>
            <div className='sidebar'>

            </div>
            <Calendar
                className='calendar'
                defaultDate={defaultDate}
                defaultView={Views.MONTH}
                events={events}
                localizer={localizer}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                scrollToTime={scrollToTime}
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
}

export default SchedulePage;