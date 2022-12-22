import React from 'react';
import classNames from "classnames/bind";
import styles from "./Card.scss";

const cx = classNames.bind(styles);
function Card({card}) {
    return (
        <div className={cx('card-item')}>
            <span className={cx('card-title')}>{`${card.title} - ${card.id}`}</span>
            <span className={cx('card-description')}>{card.description}</span>
            { !!card.cover && <img src={card.cover} alt='img'/>}

        </div>
    );
}

export default Card;