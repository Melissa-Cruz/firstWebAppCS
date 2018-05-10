const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/neuter', (req, res) => res.send('<h1>lets change this</h1>'))

app.get('/andrew', function (req, res)  {
  res.send('Hello Andrew!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))