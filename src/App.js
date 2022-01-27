import React, { useState, useEffect } from "react";
import Book from "./components/book.js";
import './App.css';

function App() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setLibrary(data.library);
        console.log(data);
      })
  }

  return (
    <div className="App">
      <h1>Smiley Library </h1>
      <div className="bookShelf--container">
        {library.map((book, index) => {
          return (
            <Book
              key = {index}
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
