import express from 'express';
const app = express();
const port = 8080;

app.get('/login', (req, res) => {
    const { name } = req.query;
    res.cookie('name', name);
    res.send('cookie set');
});

app.get('/hello', (req, res) => {
    const { name } = req.cookies
    if (name) {
        res.send(`Welcome, ${name}!`);
    }
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
