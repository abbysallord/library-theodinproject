const myLibrary = []

function Book(title, author, pages, read) {
        this.id = crypto.randomUUID()
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

addBookToLibrary("Atomic Habits", "IDK", 200, true)
addBookToLibrary("Fuck You", "Dhanush Shenoy H", 269, true)
addBookToLibrary("Rod in yo ass", "president", 67, true)

const bookTitle = document.getElementById("Btitle")
const Author = document.getElementById("Author")
const pages = document.getElementById("pages")
const titleContain = document.getElementById("Btitle-contain")
const AuthorContain = document.getElementById("Author-contain")
const pagesContain = document.getElementById("pages-contain")
const allInputs = document.getElementsByTagName("input")
const titlePlaceholder = bookTitle.placeholder
const authorPlaceholder = Author.placeholder
const pagesPlaceholder = pages.placeholder

bookTitle.addEventListener('focus', () => {
        bookTitle.placeholder = ''
        if (!titleContain.querySelector('legend')) {
                const legend = document.createElement('legend')
                legend.textContent = "Book Title"
                legend.style.color = "#a9c7fb"
                titleContain.prepend(legend)
        }
})

bookTitle.addEventListener('blur', () => {
        if (bookTitle.value === "") {
                bookTitle.placeholder = titlePlaceholder
                const legend = titleContain.querySelector('legend')
                if (legend) legend.remove()
        }
})

Author.addEventListener('focus', () => {
        Author.placeholder = ''
        if (!AuthorContain.querySelector('legend')) {
                const legend = document.createElement('legend')
                legend.textContent = "Book Author"
                legend.style.color = "#a9c7fb"
                AuthorContain.prepend(legend)
        }
})

Author.addEventListener('blur', () => {
        if (Author.value === "") {
                Author.placeholder = authorPlaceholder
                const legend = AuthorContain.querySelector('legend')
                if (legend) legend.remove()
        }
})

pages.addEventListener('focus', () => {
        pages.placeholder = ''
        if (!pagesContain.querySelector('legend')) {
                const legend = document.createElement('legend')
                legend.textContent = "pages"
                legend.style.color = "#a9c7fb"
                pagesContain.prepend(legend)
        }
})

pages.addEventListener('blur', () => {
        if (pages.value === "") {
                pages.placeholder = pagesPlaceholder
                const legend = pagesContain.querySelector('legend')
                if (legend) legend.remove()
        }
})