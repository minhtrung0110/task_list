

import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/components/BoardBar/BoardBar";
import BoardContent from "~/components/BoardContent/BoardContent";
import React from "react";
import '~/scss/style.scss';
import {Route, Routes} from "react-router-dom";
import TaskPage from "~/pages/Task";
import SchedulePage from "~/pages/Schedule";
function App() {

  return (
      <Routes>

          {/* Requỉed login */}
          <Route path='/task' element={<TaskPage/>}/>
          <Route path='/schedule' element={<SchedulePage/>}/>
      </Routes>

  );
}

export default App;
