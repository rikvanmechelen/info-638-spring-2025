const books = [
  {title: "Leviathan Wakes", publishingYear: 2011, genreId: "0", authorIds: ["0","1"]},
  {title: "Caliban’s War", publishingYear: 2012},
  {title: "Abaddon’s Gate", publishingYear: 2013, genreId: "0", authorIds: ["0"]},
  {title: "Cibola Burn", publishingYear: 2014, genreId: "0", authorIds: ["0"]},
  {title: "Nemesis Games", publishingYear: 2015, genreId: "0", authorIds: ["0"]},
  {title: "Babylon’s Ashes", publishingYear: 2016, genreId: "0", authorIds: ["0"]},
  {title: "Persepolis Rising", publishingYear: 2017, genreId: "0", authorIds: ["0"]},
  {title: "Tiamat’s Wrath", publishingYear: 2018, genreId: "0", authorIds: ["0"]},
  {title: "Strange Dogs", publishingYear: 2017, genreId: "0", authorIds: ["0"]}
];

exports.all = books

exports.get = (idx) => {
  return books[idx];
}

exports.add = (book) => {
  books.push(book);
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.authorIds && ! Array.isArray(book.authorIds)) {
    book.authorIds = [book.authorIds];
  }
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}