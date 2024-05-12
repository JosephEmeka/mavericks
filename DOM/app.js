// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)
//
// const title = document.getElementsByClassName("title");
// console.log(title)
// console.log(Array.isArray(Array.from(title)));
// let head = document.getElementsByTagName("header");
// console.log(head)
// const  bookList = document.querySelector("#book-list")
// console.log(bookList)
// const  allBookList = document.querySelectorAll("#book-list ul li .name")
// console.log(bookList)
// console.log(allBookList[1].textContent)
// console.log(Array.isArray(allBookList))
//
// allBookList.forEach((book) => {
//     console.log(book.textContent)
// })
// allBookList.forEach((book) => {
//     console.log(book.innerHTML)
// })
//
// allBookList.forEach((book) => {
//    book.textContent += "(test)";
//     console.log(book.textContent)
// })

// const addBook = document.querySelector("#add-book")
// // console.log(addBook.textContent)
// console.log(addBook.previousElementSibling)
// console.log(addBook.parentNode)
// console.log(addBook.previousSibling)


// const bookList = document.querySelector("#book-list ul")
// console.log(bookList)
// bookList.addEventListener('click', (e) => {
//     console.log(e);
//     let className = e.target.className;
//     console.log(className);
//     if(Object.is(className, 'delete')) {
//         let li = e.target.parentElement
//         bookList.removeChild(li)
//     }
// })
//
// const searchBook =  document.forms["search-books"];
// console.log(searchBook)
// searchBook.addEventListener('keyup',function(e) {
//     let inputText = e.target.value.toLowerCase();
//     console.log(inputText)
// } )


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