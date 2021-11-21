const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./database');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origen: '*' }));

//Puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), () => {
    console.log('app listening on port ' + app.get('puerto'));
});