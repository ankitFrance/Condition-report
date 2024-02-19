const express = require('express');
const app = express();
//const router = require('./routes/indexRoute');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/indexRoute'))



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
