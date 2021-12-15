

const renderBooks = []; // books that are displayed
const allBooks = [];    // all books in the library
const booksContainer = document.querySelector(".books-container");

function Book(title='', author='', pages=1, read=1, isFinished=false, imgURL='', description='') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.imgURL = imgURL;
  this.isFinished = isFinished;
  this.description = description;
}

renderBooks.push(new Book("Title", "Author", 13, 10, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"))
renderBooks.push(new Book("Title", "Author", 143, 100, false, ))
renderBooks.push(new Book("Title", "Author", 143, 100, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"))
renderBooks.push(new Book("Title", "Author", 1413, 100, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"))
renderBooks.push(new Book("Title", "Author", 143, 100, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"))

render()

function render() {
  if (renderBooks.length) {
    for (let book of renderBooks) {
      let html = `
          <li class="book">
            <div class="book-preview">
              <img class="img-bg" src="${book.imgURL}" height="250">
              <img src="${book.imgURL}" height="250">
            </div>

            <div class="book-description">
              <h2 class="title">${book.title}</h2>
              <p class="author">${book.author}</p>
              <p class="pages">${book.read}/${book.pages} pages</p>
              <div class="progress-bar">
                <span class="progress"></span>
              </div>
    <!--          <button>
                <span class="toggle"></span>
                Finished
              </button> -->
              <label>
                <input type="checkbox" name="">
                <span>Finished</span>
              </label>

              <button>Delete</button>
            </div>
          </li>`;
      booksContainer.innerHTML += html;
    }
  } else {
    booksContainer.innerHTML = "No books here yet"
  }
}



const openBookForm = document.querySelector("#open-book-form");
const bookForm = document.querySelector("#book-form");

openBookForm.addEventListener('click', function(event) {
  if (bookForm.style.display === "block") {
    bookForm.style.display = "none"
  } else {
    bookForm.style.display = "block"
  }
})

/// click away
bookForm.querySelector(".form-bg").addEventListener("click", function(event) {
  if (event.target.className === "form-bg") {
    bookForm.style.display = "none"
  }
})

























// spy should keep track of return values
// spy must not forspy should keep track of return values
// spy must not forget old return values
// spy should remember new values tooget old return values
// spy should remember new values too
// function spyOn (func) {
//   let _callCount = 0;
//   let _calls = []
//   let _returns = []
//   function spy(...args) {
//     _callCount++
//     let re = func(...args)
// //     _calls.add(args)
//     args.map(arg => _calls.push(arg))
//     args.map(arg => _returns.push(re))
//     return re
//   }
//   spy.callCount = function () {
//     return _callCount
//   }
//   spy.wasCalledWith = function(arg) {
//     return _calls.includes(arg)
//   }
//   spy.returned = function(arg) {
//     return _returns.includes(arg)
//   }
//   return spy
// }