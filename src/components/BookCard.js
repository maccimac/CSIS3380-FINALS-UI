import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios  from "axios";

function BookCard({book, deleteBook}) {
    return <div class="card-container outline mx-4">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div class="desc text-left">
      <h2><a href="/show-book/123id">{book.title}</a></h2>
      <h3>{book.author}</h3>
      <div className="d-flex w-100 justify-content-between">
        <p class="flex-grow">{book.description && book.description}</p>
        <button onClick={deleteBook} type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
    </div>
  </div>
}

export default BookCard;
  