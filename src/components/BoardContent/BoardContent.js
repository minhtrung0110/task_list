import React, {useEffect, useRef, useState} from 'react'
import "./BoardContent.scss"
import Column from "~/components/Column/Column";
import { Container, Draggable } from "react-smooth-dnd";
import {Container as BSContainer, Row, Col, Form, Button} from "react-bootstrap"
import {initialData} from "~/actions/initalData";
import {isEmpty} from "lodash";
import {mapOrder} from "~/utilities/sorts";
import {applyDrag} from "~/utilities/dragDrop";
import {FaCross, FaPlus, FaTerminal, FaTimes, FaTimesCircle} from "react-icons/fa";
import column from "~/components/Column/Column";


function BoardContent() {
    const [board,setBoard]=useState({})
    const [columns,setColumn] = useState([])
    const [isOpenNewColForm,setIsOpenNewColForm]=useState(false)
    const [newColTitle,setNewColTitle]=useState('')

    const newColInputRef=useRef()
    useEffect(()=>{
        const boardFromDB=initialData.boards.find(board => board.id==='board-1')
        if(boardFromDB){
            setBoard(boardFromDB)
            // sort Column

            setColumn(mapOrder(boardFromDB.columns,boardFromDB.columnOrder,'id'))
        }
    },[])

    const onColumnDrop=(dropResult)=>{
        let newColumns=[...columns]
        // set lai ccolumn

        newColumns=applyDrag(newColumns,dropResult)
        let newBoard={...board}
        // cập nhật columnnOrder bang các id sau khi keo tha
        newBoard.columnOrder=newColumns.map(item=>item.id)
        newBoard.columns=newColumns
        setColumn(newColumns)
        setBoard(newBoard)
        // console.log(newColumns)
        // console.log(newBoard)
    }
    const onCardDrop = (columnId,dropResult) => {
        if(dropResult.removedIndex !=null || dropResult.addedIndex !=null)
        {
            let newColumns=[...columns]
            let currentColumn=newColumns.find((item=>item.id===columnId))

            currentColumn.cards=applyDrag(currentColumn.cards,dropResult)
            currentColumn.cardOrder=currentColumn.cards.map(i=>i.id)
            setColumn(newColumns)
            console.log( currentColumn)
        }

    }
    const handleAddNewColumn=()=>{
        //    newColInputRef.current.focus();
        const newColumnToAdd={
            id:Math.random().toString(36).substr(2,5),
            boardId:board.id,
            title:newColTitle.trim(),
            cardOrder:[],
            cards:[]
        }
        let newColumns=[...columns]
        newColumns.push(newColumnToAdd)

        let newBoard={...board}
        // cập nhật columnnOrder bang các id sau khi keo tha
        newBoard.columnOrder=newColumns.map(item=>item.id)
        newBoard.columns=newColumns
        setColumn(newColumns)
        setBoard(newBoard)


        //clear inout
      setNewColTitle('')
        setIsOpenNewColForm(false)


    }
    const toggleOpenNewAddColumn=()=>{

    }
    return (
      isEmpty(board)?(
          <div className="not-found">Not FOUND</div>
      ):(
          <div className="board-content ">
              <Container
                  orientation="horizontal"
                  onDrop={onColumnDrop}
                  getChildPayload={index =>columns[index]}
                  dragHandleSelector=".column-drag-handle"
                  dropPlaceholder={{
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'column-drop-preview'
                  }}
              >
                  {
                      !!columns && columns.map((col,index)=> (
                          <Draggable

                              key={index}>
                              <Column column={col} onCardDrop={onCardDrop} />
                          </Draggable>

                      ))
                  }
              </Container>
              <BSContainer className='trello-minhtrung-container'  >
                  {!isOpenNewColForm && (
                      <Row>
                          <Col className='add-new-column'
                               onClick={()=>{
                                   setIsOpenNewColForm(true)

                               }}
                          >
                              <FaPlus />   Add new column
                          </Col>
                      </Row>
                  )}
                  {
                      !!isOpenNewColForm  && ( <Row>
                          <Col className='enter-new-column'>
                              <Form.Control
                                  size='md'
                                  type='text'
                                  placeholder='Enter new column title'
                                  className='input-enter-new-column '
                                  value={newColTitle}
                                  onChange={e=>setNewColTitle(e.target.value)}
                                    ref={newColInputRef}
                                  onKeyDown={event => (event.key==='Enter')&& handleAddNewColumn()}
                              />
                              <div className='d-flex justify-content-between align-items-center'>
                                  <Button variant='outline-success'
                                  onClick={handleAddNewColumn}
                                  >Add</Button>
                                  <FaTimes className='cancel-new-column'
                                           onClick={()=>setIsOpenNewColForm(false)}
                                  />
                              </div>

                          </Col>
                      </Row>)
                  }
              </BSContainer>


                   </div>
      )
    );
}

export default BoardContent;