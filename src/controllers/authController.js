const router = require('express').Router();  // modular router

const authServece = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authServece.login(username, password);
        res.cookie('auth', token, { httpOnly: true });

    } catch (err) {
        console.log(err);
    }
    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.redirect('/404');
    }
    const existingUser = await authServece.getUserByName(username);

    if (existingUser) {
        return res.redirect('/404');
    }

    const user = await authServece.register(username, password);

    res.render('/login');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router;