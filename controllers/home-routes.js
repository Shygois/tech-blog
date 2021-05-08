const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
    } else {
        //res.sendFile('home.html', { root: path.join(__dirname, 'public') })
        res.render('homepage');
    }
});

router.get('/login', (req, res) => {
    //res.sendFile('login.html', { root: path.join(__dirname, 'public') })
    res.render('login');
});

router.get('/register', (req, res) => {
    //res.sendFile('login.html', { root: path.join(__dirname, 'public') })
    res.render('register');
});


module.exports = router;