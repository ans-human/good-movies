import React, { useState } from "react";
import "./styles.css";

const Thriller = [
  "The Dark Knight (2008)",
  "Inception (2010)",
  "Parasite (2019)"
];
const Superhero = [
  "Deadpool (2016)",
  "Avengers: Infinity War (2018)",
  "The Dark Knight (2008)"
];
const SciFi = [
  "Interstellar (2014)",
  "The Matrix (1999)",
  "Mad Max: Fury Road (2015)"
];

const bookRatingDictionary = {
  "The Dark Knight (2008)": "9.0",
  "Inception (2010)": "8.8",
  "Parasite (2019)": "8.6",
  "Deadpool (2016)": "8.0",
  "Avengers: Infinity War (2018)": "8.4",
  "Interstellar (2014)": "8.6",
  "The Matrix (1999)": "8.7",
  "Mad Max: Fury Road (2015)": "8.1"
};

export default function App() {
  const [list, setList] = useState([]);

  function clickHandler(event) {
    var userInput = event;

    // console.log(bookRatingDictionary["book1"]);

    switch (userInput) {
      case 1:
        setList(Thriller);
        return;
      case 2:
        setList(Superhero);
        return;
      case 3:
        setList(SciFi);
        return;

      default:
        return;
    }
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="camera">
          🎥
        </span>{" "}
        goodmovies{" "}
      </h1>
      <p> Checkout my favorite movies. Select a genre to get started </p>

      <div>
        <button onClick={() => clickHandler(1)}>Thriller</button>
        <button onClick={() => clickHandler(2)}>Superhero</button>
        <button onClick={() => clickHandler(3)}>Sci-Fi</button>
      </div>
      <hr />
      {list.map((item) => {
        return (
          <li key={item.toString()}>
            <div>
              <p className="movie inline">{item}</p>
              <div className="rating">
                <small className="rating">
                  {bookRatingDictionary[item]}
                  {"/10"}
                </small>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}
