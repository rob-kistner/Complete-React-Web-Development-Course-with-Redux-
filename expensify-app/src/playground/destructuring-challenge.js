const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin',
    isbn: '01928371812'
  } 
}

// rename and use default value of "Self-Published"
const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

// Array Destructuring
