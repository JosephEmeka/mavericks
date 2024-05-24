const wrapper = document.getElementById("wrapper");
console.log(wrapper)

const title = document.getElementsByClassName("title");
console.log(title)
console.log(Array.isArray(Array.from(title)));
let head = document.getElementsByTagName("header");
console.log(head)
const  bookLists = document.querySelector("#book-list")
console.log(bookLists)
const  allBookList = document.querySelectorAll("#book-list ul li .name")
console.log(bookLists)
console.log(allBookList[1].textContent)
console.log(Array.isArray(allBookList))

allBookList.forEach((book) => {
    console.log(book.textContent)
})
allBookList.forEach((book) => {
    console.log(book.innerHTML)
})

allBookList.forEach((book) => {
   book.textContent += "(test)";
    console.log(book.textContent)
})

const addBooks = document.querySelector("#add-book")
// console.log(addBook.textContent)
console.log(addBooks.previousElementSibling)
console.log(addBooks.parentNode)
console.log(addBooks.previousSibling)


const bookList = document.querySelector("#book-list ul");
console.log(bookList)
bookList.addEventListener('click', (e) => {
    // console.log(e);
    let className = e.target.className;
    // console.log(className);
    if(className === "delete") {
        let li = e.target.parentNode
        bookList.removeChild(li)
    }
})

const searchBooks =  document.forms["search-books"];
console.log(searchBooks)
searchBooks.addEventListener('keyup',function(e) {
    let inputText = e.target.value.toLowerCase();
    console.log(inputText)
} )


const searchBook = document.forms["search-books"];
const listOfBooks =document.querySelectorAll('#book-list li .name')
// console.log(listOfBooks)

searchBook.addEventListener('keyup', function(e) {
    let inputText = e.target.value.toLowerCase();
    listOfBooks.forEach((book) => {
        let title = book.textContent.toLowerCase()
        let isIncludedInputText = title.includes(inputText)
        let parentNode = book.parentNode;
        if(isIncludedInputText){
        parentNode.style.display = 'block'
            console.log(parentNode)
        }
        else{
            parentNode.style.display = 'none';
        }
    })
})

const addBook = document.forms["add-book"];
addBook.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = addBook.querySelector("input").value.trim();
    // console.log(inputValue)
    if(inputValue){
    const liTag = document.createElement("li");
    const firstSpan = document.createElement("span");
    const secondSpan = document.createElement("span");

    firstSpan.classList ='name';
    secondSpan.classList ='delete'

    liTag.appendChild(firstSpan)
    liTag.appendChild(secondSpan)


    firstSpan.textContent = inputValue;
    secondSpan.textContent = "delete";
    bookList.prepend(liTag);
    }
    addBook.reset('');

})