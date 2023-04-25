import { URI } from "../utils";
import React, { useState, useEffect } from "react";
import axios from "axios";


function CreateBook(){

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");



    const createBook = async(evt) =>{
        evt.preventDefault();
        try {
            const response = await axios.post(`${URI}`, {
                title,
                author,
                description
            }, {
                headers: {
                  "Content-Type": "application/json",
                },
              });
            console.log(response.data);
            setAuthor("")
            setTitle("");
            setDesc("");
            return response.data
          } catch (error) {
            console.error(error);
          } 
    }

    return(
        <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form novalidate="">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  onChange={(event) => setDesc(event.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input type="submit" onClick={createBook} class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}


export default CreateBook