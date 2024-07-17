// just for understanding how req and res works in anonymous function 

class Book{
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
  displayinfo(){
    console.log(`Title: ${this.title} , Author: ${this.author}`);
  }
}
function processBook(bookInstance,callback){
  callback(bookInstance);
}

let myBook=new Book('secretBook','ZabihullahNoori');
myBook.displayinfo();
processBook(myBook,function(boo){
  boo.author='antoher author';
  boo.title='another title';
})
myBook.displayinfo();

