import React from "react";
import reactDom from "react-dom";
import "./index.css";
// setup vars
import { books } from "./books";
// import component Book.js
import SpecificBook from "./Book";

import { greeting } from "./testing/testing";
// components always return JSX
function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
