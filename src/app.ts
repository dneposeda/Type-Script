import { Librarian, Author, Logger, Book, Magazine } from './intefaces';
import { RefBook, Shelf, UniversityLibrarian } from './classes/index';
import { getBookAuthorByIndex, purge, getBookTitlesByCategory, getBookByID, createCustomerID, createCustomer, logFirstAvailable, сheckOutBooks, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults, getTitles, bookTitleTransform, printBook, getBookProp, getAllBooks, } from './functions';
import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType, PersonBook } from './types';

import('./classes').then(module => {
    const reader = new module.Reader;
    // console.log(reader);
});


// TASK 02.01 - Target ESNEXT
//
// function calcTotalPages(): bigint {
//     const data = <const>[
//         {
//             lib: 'libName1',
//             books: 1_000_000_000,
//             avgPagesPerBook: 250,
//         },
//         {
//             lib: 'libName2',
//             books: 5_000_000_000,
//             avgPagesPerBook: 300,
//         },
//         {
//             lib: 'libName3',
//             books: 3_000_000_000,
//             avgPagesPerBook: 280,
//         }
//     ];

//     let result = data.reduce((acc: bigint, obj: any) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//     }, 0n);

//     return result;
// }

// logFirstAvailable(getAllBooks());
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const resultGetBookAuthorByIndex = getBookAuthorByIndex(2);
// console.log(resultGetBookAuthorByIndex);

// const result2 = calcTotalPages();
// console.log(result2);


// Task 03.01
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach((title: string) => console.log(title));
// console.log( getBookByID(1) );


// TASK 03.02
const myID: string = createCustomerID('Ann', 1);
// console.log(myID);

let idGenerator: (p1: string, p2: number) => string =
    (name: string, id: number) => `${id} - ${name}`;

idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 2));


// TASK 03.03
createCustomer('Anna', 3, 'Moscow');

const titlesGetBookTitlesByCategory = getBookTitlesByCategory();
// console.log(titlesGetBookTitlesByCategory);

logFirstAvailable();

// const myBooks: string[] = сheckOutBooks('Anna', 1, 2, 4);
const myBooks: string[] = сheckOutBooks('Anna', ...[1, 2, 4]);
// console.log(myBooks);


// TASK 03.03
// const checkedOutBooks = getTitles();
// console.log(checkedOutBooks);


// TASK 03.04
const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);


// Task 03.05
// console.log(bookTitleTransform('телефон'));
// console.log(bookTitleTransform(100));


// TASK 04.01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    markDamaged: (reason) => console.log(`Demaged: ${reason}`),
};
// myBook.markDamaged('missing back cover');
// printBook(myBook);


// TASK 04.02
const logDamage: Logger = (reason: string) => console.log(`Dameged ${reason}`);
// logDamage('logDamage - test');


// TASK 04.03
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@epam.com',
    numBooksPublished: 10,
};

const favoriteLibrarian: Librarian = {
    name: 'Anna',
    email: 'anna@epam.com',
    department: ' Classical Literature',
    assistCustomer: (customer: string) => console.log(customer),
};


// TASK 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript'
    }
};
// console.log(offer.magazin?.a());


// TASK 04.05

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(myBook, 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));


// TASK 05.01
// const ref = new ReferenceItem('It is Title', 2011);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Our Random Publisher';
// console.log(ref.publisher);


// TASK 05.02
const refBook1 = new RefBook('title', 2019, 10);
// console.log(refBook);
refBook1.printItem();


// TASK 05.03
const refBook2 = new RefBook('Title new', 2019, 10);
refBook2.printCitation();


// TASK 05.04
const favoriteLibrarian2: Librarian = new UniversityLibrarian();
favoriteLibrarian2.name = 'Anna';
// favoriteLibrarian2.assistCustomer('Boris');


// TASK 05.05
const personBook: PersonBook = {
    name: 'Anna',
    email: 'anna@an.ru',
    id: 132,
    title: 'Book Title',
    author: 'Deni Lettel',
    available: false,
    category: Category.HTML,
};
// console.log(personBook);


// TASK 07.01
const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
const resultPurge = purge<Book>(inventory);
// console.log(resultPurge);

// Error
// const resultPurge2 = purge<Book>([1, 2, 3]);


// TASK 07.02
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
// console.log(firstBook);

const magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
const firstMag = magazineShelf.getFirst();
// console.log(firstMag);


// TASK 07.03
magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));


// Task 07.04
const bookRF: BookRequiredFields = {
    id: 1,
    title: 'Bo T',
    author: '',
    available: false,
    category: Category.HTML,
    markDamaged: null,
    pages: 100,
};

const updateBook: UpdatedBook = {
    id: 1,
    available: true,
};

const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
createCustomer(...params);


// Task 08.01
const ul = new UniversityLibrarian();
// console.log(ul);


// TASK 08.02
const fLibrarian = new UniversityLibrarian();
fLibrarian.name = 'Anna2';
// fLibrarian['printLibrarian']();


// TASK 08.03
const ul2 = new UniversityLibrarian();
ul2.assistFaculty = null;
// ul2.teachCommunity = null;


// TASK 08.04
const encyclop = new RefBook('Test title', 2020, 3);
encyclop.printItem();


// TASK 08.05
const logDecor = new UniversityLibrarian();
logDecor.name = 'Annna';
// logDecor.assistCustomer('BORIS');
// console.log(logDecor);


// TASK 08.06
const logDecor2 = new UniversityLibrarian();
logDecor2.name = 'Annna';
// console.log(logDecor2);


// TASK 08.07
const enc = new RefBook('New name', 2021, 1235);
enc.copies = 10;
// console.log(enc);


// TASK 09.01
// console.log('Старт');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');


// TASK 09.02
// console.log('Старт');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then( titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch( reason => console.log(reason) )
//     .finally( () => console.log('Finally') );
// console.log('End');

// console.log('Старт');
// getBooksByCategoryPromise(Category.Software)
//     .then( titles => console.log(titles))
//     .catch( reason => console.log(reason) )
//     .finally( () => console.log('Finally') );
// console.log('End');


console.log('Старт');
logSearchResults(Category.JavaScript)
    .then(console.log)
    .catch(console.log);
console.log('End');
