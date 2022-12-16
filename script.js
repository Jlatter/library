const form = document.getElementById("form");
const books = document.getElementsByClassName("books");
const bookBtn = document.getElementById("add-book")
const title = document.getElementById("titleid")
const author = document.getElementById("authorid")
const pagenum =  document.getElementById("pagesid")
const readStatus= document.getElementById("readStatusid")
const submit = document.getElementById("submitid")
const booklist = document.createElement("div");
const container = document.getElementById("container")
const addbookbutton = document.getElementById("add-book")
const dlose = document.getElementById("close")
const dels = document.getElementsByClassName("but")
let i = -1;
addbookbutton.addEventListener("click",e=> {form.classList.add("target")});
dlose.addEventListener("click",e=> {e.preventDefault(),form.classList.remove("target")})

form.addEventListener("submit", (e, i) => {
  e.preventDefault();
  addBookToLibrary(i)
  showlibrary()
form.reset()})


let myLibrary = [];

function Book(titles, authors, pagenums, readStatuss) {
this.titles = titles;
this.authors = authors;
this.pagenums = pagenums;
this.readStatuss = readStatuss;
}

function addBookToLibrary(event) {
  const newBook = new Book (title.value, author.value, pagenum.value, readStatus.value);
 
  myLibrary.push(newBook);
  console.log(myLibrary[0]);
  console.log(myLibrary[1]);
 
  
  
}


function showlibrary(){
  let bookdiv = document.createElement("div");
  let titleNode = document.createElement("h2")
  let authorNode = document.createElement("h2")
  let pageNode = document.createElement("h2")
  let readNode =document.createElement("h2")
  let del = document.createElement("button")
  const readopt =document.createElement("select")
  let notReadopt =document.createElement("select")
  let readchoice = document.createElement("option")
  let notReadchoice = document.createElement("option")
  readchoice.text= "Read";
  readchoice.value= "Read"
  notReadchoice.text="Not read"
  notReadchoice.value="Not read"
  readopt.setAttribute("id","readstat")
  readopt.appendChild(readchoice); 
  readopt.appendChild(notReadchoice);
  notReadopt.appendChild(notReadchoice);
  notReadopt.appendChild(readchoice);
  booklist.classList.add("booklist");
  bookdiv.classList.add("book");
titleNode.classList.add("op")
authorNode.classList.add("op")
pageNode.classList.add("op")
readNode.classList.add("vp")
container.appendChild(booklist)
  document.body.appendChild(container);
  booklist.appendChild(bookdiv);
  bookdiv.appendChild(titleNode);
  bookdiv.appendChild(authorNode);
  bookdiv.appendChild(pageNode);
  bookdiv.appendChild(readopt);
    bookdiv.appendChild(del);
  del.innerHTML= "Delete"
  
   myLibrary.splice(0, myLibrary.length).forEach(function(book,i){
    if(book.readStatuss === "Read"){readopt.appendChild(notReadchoice),readopt.appendChild(readchoice)
  }else{readopt.appendChild(readchoice),readopt.appendChild(notReadchoice)};
    titleNode.innerHTML =book.titles+"<br>", authorNode.innerHTML = book.authors+"<br>",
   pageNode.innerHTML =book.pagenums+"<br>", bookdiv.setAttribute('id', i), del.setAttribute("class", "but "+ i)
  })
  
  del.addEventListener("click", e => del.parentElement.remove())
}

