import React from 'react';
import  "./Card.scss";
import {FaPen} from "react-icons/fa";

function Card({card}) {
    return (
        <div className='card-item d-flex justify-content-between align-items-center'>
           <div className=''>
               <span className='card-title'>{`${card.title}`}</span>

               { !!card.cover && <img src={card.cover} alt='img'/>}
           </div>
            <FaPen className='btn-edit-card' />

        </div>
    );
}

export default Card;