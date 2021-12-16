

// let renderBooks = []; // books that are displayed
const allBooks = [];    // all books in the library
const booksContainer = document.querySelector(".books-container");

const openBookForm = document.querySelector("#open-book-form");
const bookForm = document.querySelector("#book-form");

const searchBar = document.querySelector("#search-bar");

const filters = {
  search: "",
}

searchBar.addEventListener("input", function(event) {
  filters.search = this.value;
  render()
})

function restore() {
  if (!localStorage.books || !localStorage.books.trim() || localStorage.books[0] !== "[") {
    localStorage.setItem("books", "[]")
  } else {
    data = JSON.parse(localStorage.books);
    for (let book of data) {
      allBooks.push(new Book(
          book.title, 
          book.author, 
          +book.pages, 
          book.isFinished, 
          book.imgURL,
          +book.read, 
        )
      )
    }
  }
  console.log(allBooks)
  render()
}
restore()


function save() {
  localStorage.setItem("books", JSON.stringify(allBooks));
}

function Book(title='', author='', pages=1, isFinished=false, imgURL='',read=1 , description='') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.imgURL = imgURL;
  this.isFinished = isFinished;
  this.description = description;
}
Book.prototype.changeFinished = function(value) {
  this.isFinished = value;
}

function filter(arr) {
  let array = [];
  array = arr.filter(book => new RegExp(filters.search, "i").test(book.title + book.author))
  return array
}

function render() {
    let renderBooks = filters.search ? filter(allBooks) : allBooks;
    if (renderBooks.length) {
      booksContainer.innerHTML = ''
      for (let book of renderBooks) {
        let imgURL;
        try {
          imgURL = /http/.test(new URL(book.imgURL).protocol) ? book.imgURL : 0;
        } catch {imgURL = null;}
        let html = `
            <li class="book">
              ${imgURL ? 
                `<div class="book-preview">
                  <img class="img-bg" src="${imgURL}" height="250">
                  <img src="${imgURL}" height="250">
                </div>`
                :
                `<div class="book-preview none">
                  <img src="./assets/book.svg" width="50" height="50">
                </div>` 
              }

              <div class="book-description">
                <h2 class="title">${book.title}</h2>
                <p class="author">${book.author}</p>
                <p class="pages">${book.read} / ${book.pages} pages</p>
                <div class="progress-bar">
                  <span class="progress"></span>
                </div>
                <label class="finished">
                  <input type="checkbox" name="" ${book.isFinished ? "checked" : ""}>
                  <span>Finished</span>
                </label>

                <button class="delete" data-index="${renderBooks.indexOf(book)}">Delete</button>
              </div>
            </li>`;
        booksContainer.innerHTML = html + booksContainer.innerHTML;
      }
      // setting the read progress indicator
      document.querySelectorAll(".progress").forEach(
        (prg, i) => {
          let barWidth = prg.parentElement.offsetWidth;
          let book = renderBooks.slice(-i-1)[0]
          let progress = book.read/book.pages*barWidth;
          prg.style.transform = `translateX(${progress}px)`;
        }
      )
      document.querySelectorAll("[data-index]").forEach(
        (btn, i) => {
          // deleting by data index
          btn.addEventListener("click", function(event) {
            deleteBook(+this.dataset.index)
          })
          // changing the finished state of the object 
          btn.previousElementSibling.firstElementChild.addEventListener('change', function(event) {
            renderBooks.slice(-i-1)[0].changeFinished(this.checked)
          })
        }
      )
    } else {
      if (filters.search.trim()) {
        booksContainer.innerHTML = "No such book. How about adding it?"
      } else{
        booksContainer.innerHTML = "You haven't read a book:) <br> How about adding one?"
      }
    }
}



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

bookForm.querySelectorAll(".label-text").forEach(
  label => {
    if (!label.previousElementSibling.value.trim()) {
      label.classList.toggle("active", false)
    } else {
      label.classList.toggle("active", true)
    }
    label.previousElementSibling.addEventListener("focus", function(event) {
      label.classList.toggle("active", true)
    })
    label.previousElementSibling.addEventListener("blur", function(event) {
      if (!label.previousElementSibling.value.trim()) {
        label.classList.toggle("active", false)
      }
    })
  }
)

bookForm.addEventListener('submit', function(event) {
  event.preventDefault()
  allBooks.push(new Book(
      this.title.value, 
      this.author.value, 
      +this.pages.value, 
      this.isFinished.checked, 
      this.imgURL.value,
      +this.read.value, 
    )
  )
  save()
  render()
  bookForm.style.display = "none";
})

bookForm.querySelector("[type='cancel']").addEventListener('click', function(event) {
  event.preventDefault()
  bookForm.style.display = "none";
})

function deleteBook(index) {
  allBooks.splice(index, 1)
  save()
  render()
}