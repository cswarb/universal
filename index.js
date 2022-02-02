const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/heroes', (req, res) => {
    return res.json([{ name: 'James', id: '1' }, { name: 'David', id: '2' } ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});