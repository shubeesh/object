const book = {
    title: "Dune",
    author: "Frank Herbert",
    year: 2016,
    getSummary: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year} `;
    }
}




book.genre = "Sci-Fi";
delete book.year;
console.log(book);