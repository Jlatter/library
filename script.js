const form = document.getElementById('form');
const title = document.getElementById('titleid');
const author = document.getElementById('authorid');
const pagenum = document.getElementById('pagesid');
const readStatus = document.getElementById('readStatusid');
const booklist = document.createElement('div');
const container = document.getElementById('container');
const addbookbutton = document.getElementById('add-book');
const dlose = document.getElementById('close');

addbookbutton.addEventListener('click', () => {
  form.classList.add('target');
});
dlose.addEventListener('click', (e) => {
  e.preventDefault(); form.classList.remove('target');
});

const myLibrary = [];

function Book(titles, authors, pagenums, readStatuss) {
  this.titles = titles;
  this.authors = authors;
  this.pagenums = pagenums;
  this.readStatuss = readStatuss;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pagenum.value,
    readStatus.value,
  );

  myLibrary.push(newBook);
}

function showlibrary() {
  const bookdiv = document.createElement('div');
  const titleNode = document.createElement('h2');
  const authorNode = document.createElement('h2');
  const pageNode = document.createElement('h2');
  const readNode = document.createElement('h2');
  const del = document.createElement('button');
  const readopt = document.createElement('select');
  const notReadopt = document.createElement('select');
  const readchoice = document.createElement('option');
  const notReadchoice = document.createElement('option');
  readchoice.text = 'Read';
  readchoice.value = 'Read';
  notReadchoice.text = 'Not read';
  notReadchoice.value = 'Not read';
  readopt.setAttribute('id', 'readstat');
  readopt.appendChild(readchoice);
  readopt.appendChild(notReadchoice);
  notReadopt.appendChild(notReadchoice);
  notReadopt.appendChild(readchoice);
  booklist.classList.add('booklist');
  bookdiv.classList.add('book');
  titleNode.classList.add('op');
  authorNode.classList.add('op');
  pageNode.classList.add('op');
  readNode.classList.add('vp');
  container.appendChild(booklist);
  document.body.appendChild(container);
  booklist.appendChild(bookdiv);
  bookdiv.appendChild(titleNode);
  bookdiv.appendChild(authorNode);
  bookdiv.appendChild(pageNode);
  bookdiv.appendChild(readopt);
  bookdiv.appendChild(del);
  del.innerHTML = 'Delete';

  myLibrary.splice(0, myLibrary.length).forEach((book, i) => {
    if (book.readStatuss === 'Read') {
      readopt.appendChild(notReadchoice); readopt.appendChild(readchoice);
    } else {
      readopt.appendChild(readchoice); readopt.appendChild(notReadchoice);
    }
    (titleNode.innerHTML = `${book.titles}<br>`);
    (authorNode.innerHTML = `${book.authors}<br>`);
    (pageNode.innerHTML = `${book.pagenums}<br>`);
    bookdiv.setAttribute('id', i);
    del.setAttribute('class', `but ${i}`);
  });

  del.addEventListener('click', () => del.parentElement.remove());
}
form.addEventListener('submit', (e, i) => {
  e.preventDefault();
  addBookToLibrary(i);
  showlibrary();
  form.reset();
});
