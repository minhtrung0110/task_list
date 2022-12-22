import React, {useEffect, useState} from 'react'
import "./BoardContent.scss"
import Column from "~/components/Column/Column";
import { Container, Draggable } from "react-smooth-dnd";
import {initialData} from "~/actions/initalData";
import {isEmpty} from "lodash";
import {mapOrder} from "~/utilities/sorts";
import {applyDrag} from "~/utilities/dragDrop";


function BoardContent() {
    const [board,setBoard]=useState({})
    const [columns,setColumn] = useState([])
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
              <div className="add-new-column">
                  Add new column
              </div>

          </div>
      )
    );
}

export default BoardContent;