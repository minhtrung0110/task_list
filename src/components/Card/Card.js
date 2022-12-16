import React from 'react';
import classNames from "classnames/bind";
import styles from "./Card.scss";

const cx = classNames.bind(styles);
function Card({data}) {
    return (
        <li className={cx('card-item')}>
            <span className={cx('card-title')}>{data.title}</span>
            <span className={cx('card-description')}>{data.description}</span>
            { !!data.cover && <img src={data.cover} alt='img'/>}

        </li>
    );
}

export default Card;