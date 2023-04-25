
import './App.css';
import { Routes, Route } from "react-router-dom";
import BookList from "./views/BookList"
import CreateBook from './views/CreateBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
    </div>
  );
}

export default App;
