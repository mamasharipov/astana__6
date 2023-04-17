
//ДОМАШКА

function filterBooks(...books) {
    
    const filteredBooks = books.filter(book => book.toLowerCase().includes('к'
    ));
    const unfilteredBooks = books.filter(book => !book.toLowerCase().includes('к'));

    console.log('Отфильтрованные книги:', filteredBooks);

    console.log('Остальные книги:', unfilteredBooks);
  }
  filterBooks('Мастер и Маргарита', 'Кора Рейли ')