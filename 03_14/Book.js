class Book {
  constructor(name, author, cover, isFiction, rating) {
    this.name = name;
    this.author = author;
    this.cover = cover;
    this.isFiction = isFiction;
    this.rating = rating;
  }
  changeGenre(genreChange) {
    this.isFiction = genreChange;
  }
}

export default Book;
