const express = require('express');
const app = express();
const PORT = 8706;
const userRouter = require('./project/routers/users.routers');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server Ok", port: PORT });
});

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});