import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/components/BoardBar/BoardBar";
import BoardContent from "~/components/BoardContent/BoardContent";
import  './style.scss'
TaskPage.propTypes = {

};

function TaskPage(props) {
    return (
        <div className="trello-minhtrung-master">
            <AppBar />
            <BoardBar />
            <BoardContent  />
        </div>
    );
}

export default TaskPage;