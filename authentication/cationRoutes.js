const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cationHelpers = require('./cationHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'In cationRoutes test route..'});
});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 6);
    cationHelpers.add({
        username,
        password: hashedPassword
    })
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(error => {
        res.status(500).json('There is an error' + error);
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    cationHelpers.findBy({ username })
    .first()
    .then(user => {
        if( user && bcryptjs.compareSync(password, user.password)){
            // 1 - Set the payload
            const payload = {
                userID: user.id,
                username: user.username,
                // Eoin.. Should you add a user type here?
            }
            // 2 - Decide config
            const options = {
                expiresIn: 60
            }
            // 3 - Build and sign the token
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET || 'secret',
                options
            )

            res.json({
                message: 'Token is included. See payload.userID for id usage...',
                token
            })
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;