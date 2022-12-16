import React from 'react';
import classNames from "classnames/bind";
import styles from "./Task.scss";

const cx = classNames.bind(styles);
function Task(props) {
    return (
        <li className={cx('task-item')}>
            <img src="https://placeimg.com/640/480/any" alt='img'/>
            Title: Minh Trung
        </li>
    );
}

export default Task;