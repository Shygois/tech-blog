const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard');
    } else {
        //res.sendFile('home.html', { root: path.join(__dirname, 'public') })
        res.redirect('/login');
    }
});

module.exports = router;