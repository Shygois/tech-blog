const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard');
    } else {
        //res.sendFile('home.html', { root: path.join(__dirname, 'public') })
        res.redirect('/login');
    }
});

module.exports = router;