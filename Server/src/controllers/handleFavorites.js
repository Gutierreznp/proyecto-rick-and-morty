let myFavorites = [];


function postFav(req, res) {
    myFavorites.push(req.body)
    return res.json(myFavorites)
}

function deleteFav(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter(val => val.id !== +id)
    return res.json(myFavorites)
}


module.exports = {
    postFav,
    deleteFav
}