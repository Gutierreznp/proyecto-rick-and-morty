const { postFav, deleteFav } = require('../controllers/handleFavorites');

const favoriteRouter = require('express').Router();


favoriteRouter.post('/', postFav);
favoriteRouter.delete('/:id', deleteFav);

module.exports = {
    favoriteRouter
}