import logo from './logo.svg';
import '~/scss/style.scss';
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/components/BoardBar/BoardBar";
import BoardContent from "~/components/BoardContent/BoardContent";

function App() {
  return (
    <div className="trello-minhtrung-master">
        <AppBar />
        <BoardBar />
        <BoardContent />
    </div>
  );
}

export default App;
