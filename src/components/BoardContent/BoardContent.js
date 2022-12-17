import React, {useEffect, useState} from 'react'
import "./BoardContent.scss"
import Column from "~/components/Column/Column";
import { Container, Draggable } from "react-smooth-dnd";
import {initialData} from "~/actions/initalData";
import {isEmpty} from "lodash";
import {mapOrder} from "~/utilities/sorts";


function BoardContent({currentBoard}) {
    const [board,setBoard]=useState({})
    const [column,setColumn] = useState([])
    useEffect(()=>{
        const boardFromDB=initialData.boards.find(board => board.id==='board-1')
        if(boardFromDB){
            setBoard(boardFromDB)
            // sort Column

            setColumn(mapOrder(boardFromDB.columns,boardFromDB.columnOrder,'id'))
        }
    },[])

    const onColumnDrop=(dropReslt)=>{
        console.log(dropReslt)
    }
    return (
      isEmpty(board)?(
          <div className="not-found">Not FOUND</div>
      ):(
          <div className="board-columns ">
              <Container
                  orientation="horizontal"
                  onDrop={onColumnDrop}
                  // getChildPayload={index =>
                  //     this.getCardPayload(column.id, index)
                  // }
                  dragHandleSelector=".column-drag-handle"
                  dropPlaceholder={{
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'cards-drop-preview'
                  }}
              >
                  {
                      !!column && column.map((col,index)=> (
                          <Draggable

                              key={index}>
                              <Column data={col}  />
                          </Draggable>

                      ))
                  }
              </Container>

          </div>
      )
    );
}

export default BoardContent;