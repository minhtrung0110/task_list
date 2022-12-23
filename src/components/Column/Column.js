import React, {useEffect, useRef, useState} from 'react';
import Card from "~/components/Card/Card";
import  "./Column.scss";
import {Container, Draggable} from "react-smooth-dnd";
import {mapOrder} from "~/utilities/sorts";
import {FaPlus, FaTimes} from "react-icons/fa";
import {Button, ButtonGroup, Dropdown, Form} from "react-bootstrap";
import ConfirmModal from "~/components/Commom/ConfirmModal";
import {cloneDeep} from "lodash";

function Column({column,onCardDrop,onUpdateColumn}) {
    const [showConfirmModal,setShowConfirmModal]=useState(false)
    const [columnTitle,setColumnTitle]=useState('')
    const [isAddCard,setIsAddCard]=useState(false)
    const [valueNewCard,setValueNewCard]=useState('')
    const newCardRef=useRef()
    useEffect(()=>{
        setColumnTitle(column.title)
    },[column.title])
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    const handleRemoveColumn=(type)=>{
        (type ==='close') && setShowConfirmModal(false);
        if(type==='confirm'){
            const newColumn={
                ...column,
                _destroy:true
            }
            onUpdateColumn(newColumn)
            setShowConfirmModal(false);
        }
    }
    const selectAllInlineTex=(e)=>{
        e.target.focus();
        e.target.select()
    }
    const handleColumnTitleBlur=()=>{
        const newColumn={
            ...column,
            title:columnTitle
        }
        onUpdateColumn(newColumn)
    }
    const handleAddCard=()=>{
        const newCardToAdd={
            id:Math.random().toString(36).substr(2,5),
            boardId:column.boardId,
            columnId:column.id,
            title:valueNewCard,
            cover:null
        }
        let newColumn=cloneDeep(column)
        newColumn.cards.push(newCardToAdd)
        newColumn.cardOrder.push(newCardToAdd.id)
        // truyền lên board Content
        onUpdateColumn(newColumn)

        // clear up
        setValueNewCard('')
        setIsAddCard(false)

      }
    return (
        <div className="column">

            <header className='col-title column-drag-handle d-flex justify-content-between align-items-center'>
                <div className='' >
                    <Form.Control
                        size='md'
                        type='text'
                        placeholder='Enter column title'
                        className='minhtrung-content-editable '
                        value={columnTitle}
                        spellCheck={false}
                        onChange={(e)=>setColumnTitle(e.target.value)}
                        onClick={selectAllInlineTex}
                        onBlur={handleColumnTitleBlur}
                        onMouseDown={e=>e.preventDefault()}
                       onKeyDown={event => (event.key==='Enter')&& handleColumnTitleBlur()}
                    />
                </div>

                <div className='col-more'>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="success"
                                         className='dropdown-btn'
                                         id="dropdown-split-basic" size='sm' />

                        <Dropdown.Menu>
                            <Dropdown.Item >Add task</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setShowConfirmModal(true)} >Remove Column</Dropdown.Item>
                            <Dropdown.Item >Move all cards in this column</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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
            {
                isAddCard && (
                    <div className='add-new-card-area'>
                        <Form.Control
                            size='md'
                            as='textarea'
                            rows='3'
                            placeholder='Enter new card'
                            className='input-enter-card'
                            value={valueNewCard}
                            onChange={e=>setValueNewCard(e.target.value)}
                            ref={newCardRef}
                            onKeyDown={event => (event.key==='Enter')&& handleAddCard()}
                        />
                        <div className='d-flex justify-content-between align-items-center'>
                            <Button variant='outline-primary'
                                    onClick={handleAddCard}
                            >Add</Button>
                            <FaTimes className='cancel-new-card'
                               onClick={()=>setIsAddCard(false)}
                            />
                        </div>
                    </div>
                )
            }
            {
                !isAddCard && (
                    <footer className='d-flex align-items-center justify-content-center'
                            onClick={()=>setIsAddCard(true)}>
                        <FaPlus /> Add new task</footer>
                )
            }

            <ConfirmModal
                show={showConfirmModal}
                title='Remove Column'
                content={`Are you sure you want to remove columns ${column.title} ?`}
                onAction={handleRemoveColumn} />
        </div>
    );
}

export default Column;