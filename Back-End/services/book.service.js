const books = require('../models/books.model');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete : _delete
};

async function getAll() {
    return await books.find();
}

async function getById(id) {
    return await books.findOne({ID : id});
}

async function create(bookParam) {

    // validate
     if (await books.findOne({ BookName : bookParam.BookName })) {
          throw 'BookName "' +  bookParam.BookName + '" is already taken';
     }
    const book = new books(bookParam);
    // save book
    await book.save();
}

async function update(id, bookParam) {
    const book = await books.findOne({ID : id});

    // validate
    if (!book) throw 'Book not found';
    //book.BookName !== bookParam.BookName : comparing current book name with changed book name of same id.
    //BookName: bookParam.BookName : comparing with all other book
    if (book.BookName !== bookParam.BookName && await books.findOne({ BookName: bookParam.BookName })) {
        throw 'BookName "' + bookParam.BookName + '" is already taken';
    }
    // copy userParam properties to user
    Object.assign(book, bookParam);

    await book.save();
}

async function _delete(id) {
    //await books.findByIdAndRemove({ID:id});
    await books.deleteOne({ID:id});
}