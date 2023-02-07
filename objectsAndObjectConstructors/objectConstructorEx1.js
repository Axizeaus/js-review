function Book(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  
  this.info = function() {
    if (this.isRead === true){
      return `${this.title} of ${this.author}, ${this.pages} pages, already read.`
    } else {
      return `${this.title} of ${this.author}, ${this.pages} pages, not read yet.`
    }
  }
}

let testBook = new Book('Retry', 'Me', 1, true);
console.log(testBook.info());