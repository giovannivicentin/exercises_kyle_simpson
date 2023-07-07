let addFavoriteBook = (bookName) => {
    let splitBook = bookName.split(" ");
    let haveGreat = splitBook.includes("Great");
    
    if (!haveGreat) {
      favoriteBooks.push(bookName);
  };
  
};

let favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

let printFavoriteBooks = () => {
  console.log("Favorite Books:\n");
  for (let i = 0; i < favoriteBooks.length; i++) {
    const position = i + 1;
      console.log(`${position}. ${favoriteBooks[i]}`);
  }
};

printFavoriteBooks();
