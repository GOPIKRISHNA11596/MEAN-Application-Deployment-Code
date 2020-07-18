const express = require('express');
const router = express.Router();
const bookService = require('../services/book.service');


// routes
router.post('/add', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    bookService.getAll()
        .then(books => res.json(books))
        .catch(err => next(err));
}

function getById(req, res, next) {
    bookService.getById(req.params.id)
        .then(book => book ? res.json(book) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    bookService.create(req.body)
        .then(() => res.json('Added successfully'))
        .catch(err => next(err));
}

function update(req, res, next) {
    bookService.update(req.params.id, req.body)
        .then(() => res.json('Udated successfully'))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    bookService.delete(req.params.id)
        .then(() => res.json('Deleted successfully'))
        .catch(err => next(err));
}