const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.get('/test', (req, res) => {
    console.log(typeof req);
    /*console.log(typeof req);
    let obj = JSON.parse(req);
    const url = obj.data;*/
    res.send();
});
const port = 8000;
app.listen(port, () => {
    console.log(`Yo, the code is test 8`)
  })