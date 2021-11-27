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
    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</td>
        `;


    list.appendChild(row);
   
}
// show alert
UI.prototype.showAlert = function(message, className) {
    // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}
//clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
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
    //validate

    if(title === '' || author === '' || isbn === '') {
       //error alert
       ui.showAlert('please fill in all fields', 'error');
    } else {

    //Add Book to list
    ui.addBookToList(book);
  
    // clear fields
    ui.clearFields();

    }
    
    //Add Book to list
    ui.addBookToList(book);

    
    // Show success
    ui.showAlert('Book Added!', 'success');
  
  
    // clear fields
    ui.clearFields();
    e.preventDefault();
})