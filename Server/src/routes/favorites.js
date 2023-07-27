const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const favoriteRouter = require('express').Router();


favoriteRouter.post('/', postFav);

favoriteRouter.delete('/:id', deleteFav);

module.exports = {
    favoriteRouter
}