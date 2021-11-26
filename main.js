///Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor
function UI() {

}
//Add Book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
   
}


//event listeners
document.getElementById('book-form').addEventListener('submit', 
function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn);

    const ui = new UI();
    console.log(ui);
    
    //Add Book to list
    ui.addBookToList(book);
  
    
    e.preventDefault();
})