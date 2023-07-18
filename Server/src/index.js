const express = require('express');
const server = express();
const PORT = 3001;
const { characterRouter } = require('./routes/characters');
const { favoriteRouter } = require('./routes/favorites');
const { userRouter } = require('./routes/user');


server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use('/character', characterRouter)
server.use('/favorites', favoriteRouter)
server.use('/user', userRouter)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
