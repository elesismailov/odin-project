

const renderBooks = []; // books that are displayed
const allBooks = [];    // all books in the library
const booksContainer = document.querySelector(".books-container");

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
renderBooks.push(new Book("Title", "Author", 66, false, "://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", 50))
renderBooks.push(new Book("Title", "Author", 143, true, 50))
renderBooks.push(new Book("Title", "Author", 151, false, "htt.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", 50))
renderBooks.push(new Book("Title", "Author", 1413, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", 50))
renderBooks.push(new Book("Title", "Author", 78, false, "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", 50))

render()

function render() {
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
  renderBooks.push(new Book(
      this.title.value, 
      this.author.value, 
      +this.pages.value, 
      this.isFinished.checked, 
      this.imgURL.value,
      +this.read.value, 
    )
  )
  render()
  bookForm.style.display = "none";
})

bookForm.querySelector("[type='cancel']").addEventListener('click', function(event) {
  event.preventDefault()
  bookForm.style.display = "none";
})

function deleteBook(index) {
  renderBooks.splice(index, 1)
  render()
}