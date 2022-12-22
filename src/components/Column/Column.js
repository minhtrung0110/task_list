import React from 'react';
import Card from "~/components/Card/Card";
import classNames from "classnames/bind";
import styles from "./Column.scss";
import {Container, Draggable} from "react-smooth-dnd";
import {mapOrder} from "~/utilities/sorts";
import {FaEllipsisH, FaPlus} from "react-icons/fa";

const cx = classNames.bind(styles);

function Column({column,onCardDrop}) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    return (
        <div className="column">

            <header className='col-title column-drag-handle d-flex justify-content-between align-items-center'>
                <div className='' >{column.title}</div>
                <FaEllipsisH  className='col-more'/>

            </header>
            <div className='card-list'>
                <Container
                    // onDragStart={e => console.log("drag started", e)}
                    // onDragEnd={e => console.log("drag end", e)}
                    // onDragEnter={() => {
                    //     console.log("drag enter:", column.id);
                    // }}
                    // onDragLeave={() => {
                    //     console.log("drag leave:", column.id);
                    // }}
                    // onDropReady={p => console.log('Drop ready: ', p)}
                    groupName="col"
                    onDrop={dropResult=>onCardDrop(column.id,dropResult)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {
                        !!column.cards && column.cards.map((item, index) => (
                            <Draggable key={index}>
                                <Card card={item}/>
                            </Draggable>

                        ))
                    }
                </Container>
            </div>
            <footer className='d-flex align-items-center justify-content-center'> <FaPlus /> Add new task</footer>
        </div>
    );
}

export default Column;