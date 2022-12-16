import React, {useEffect, useState} from 'react';
import "./BoardContent.scss"
import Column from "~/components/Column/Column";
function BoardContent({currentBoard}) {
   // console.log(currentBoard)

    return (
        <div className="board-columns ">
            {
                !!currentBoard && currentBoard.columns.map((col,index)=> (
                    <Column data={col}  key={index}/>
                ))
            }

        </div>
    );
}

export default BoardContent;