import logo from './logo.svg';
import '~/scss/style.scss';
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/components/BoardBar/BoardBar";
import BoardContent from "~/components/BoardContent/BoardContent";
import {useEffect, useState} from "react";
import {initialData} from "~/actions/initalData";

function App() {
  const [idBoard,setIDBoard]=useState('board-1')
    const [board,setBoard] = useState({})
    // useEffect(()=>{
    //     // mac dinh dang lấy booard 1.
    //     setBoard(initialData.boards.find(board => board.id===idBoard))
    //     console.log(board)
    // },[idBoard])
   // setBoard(initialData.boards.find(board => board.id===idBoard))
    console.log(initialData.boards.find(board => board.id===idBoard))
  return (
    <div className="trello-minhtrung-master">
        <AppBar />
        <BoardBar />
        <BoardContent currentBoard={initialData.boards.find(board => board.id===idBoard)} />
    </div>
  );
}

export default App;
