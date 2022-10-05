const express = require('express');
const server = express();
const PORT = 8706;
const userRouter = require('./project/routers/users.routers');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "Server Ok", port: PORT });
});

server.use('/', userRouter);

server.listen(0, function () {
    console.log(`Server started at port ${this.address().port}`);

});