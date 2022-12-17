import React from 'react';
import Card from "~/components/Card/Card";
import classNames from "classnames/bind";
import styles from "./Column.scss";

const cx = classNames.bind(styles);
function Column({data}) {
    return (
        <div className="column">
            <header className={cx('col-title','column-drag-handle')}  >{data.title} </header>
            <ul>
                {
                    !!data.cards && data.cards.map((item,index) =>(
                        <Card data={item} key={index} />
                    ))
                }
            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;