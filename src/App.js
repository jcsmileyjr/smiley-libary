import Book from "./components/book.js";
import Data from "./data/books";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Smiley Library </h1>
      <div class="bookShelf--container">
        {Data.map((book, index) => {
          return (
            <Book
              title={book}
              color={
                index % 2 === 0 ? "green" : index % 3 === 0 ? "blue" : "red"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
