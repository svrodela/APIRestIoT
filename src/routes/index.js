const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('index.ejs',{
    nombre:'Sergio'
})
});

module.exports = router;