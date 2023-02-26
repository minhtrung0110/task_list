

import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/components/BoardBar/BoardBar";
import BoardContent from "~/components/BoardContent/BoardContent";
import React from "react";
import '~/scss/style.scss';
import {Route, Routes} from "react-router-dom";
import TaskPage from "~/pages/Task";
import SchedulePage from "~/pages/Schedule";
import DevextremeScheduler from "~/pages/Devextreme";
import FullCalendarPage from "~/pages/FullCalendar";
function App() {

  return (
      <Routes>

          {/* Requỉed login */}
          <Route path='/task' element={<TaskPage/>}/>
          <Route path='/schedule' element={<SchedulePage/>}/>
          <Route path='/dev-schedule' element={<DevextremeScheduler/>}/>
          <Route path='/fullcalendar' element={<FullCalendarPage/>}/>
      </Routes>

  );
}

export default App;
