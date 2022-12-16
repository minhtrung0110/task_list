import React from 'react';
import './Column.scss'
import Task from "~/components/Task/Task";
function Column(props) {
    return (
        <div className="column">
            <header>Brainstorm + </header>
            <ul>
                <Task />
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>
                <li>Authen cho chức năng đăng nhập và tạo đề thi và thi</li>

            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;