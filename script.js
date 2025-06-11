const books = [
  { title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", year: 1200 },
  { title: "სამი მუშკეტერი", author: "ალექსანდრე დიუმა", year: 1844 },
  { title: "მოსტრადამუსის წინასწარმეტყველებები", author: "მიშელ დე ნოტრედამი", year: 1555 }
];

function getBookTitles(bookArray) {
  return bookArray.map(book => book.title);
}

const titles = getBookTitles(books);
console.log(titles);
