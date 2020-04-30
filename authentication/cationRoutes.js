const router = require('express').Router();
const bcryptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const cationHelpers = require('./cationHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'In cationRoutes test route..'});
});

router.post('/register', (req, res) => {
    let { firstName, lastName, username, emailAddress, password, dateOfBirth } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 6);
    cationHelpers.add({
        firstName, 
        lastName,       
        username,
        emailAddress,
        password: hashedPassword,
        dateOfBirth
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
    .then( user => {
        if( user && bcryptjs.compareSync(password, user.password)){
            // const token = generateToken(user);

            res.status(200).json({
                message: `Welcome ${user.username}!, have a token...`,
                userID: user.id
                // token
            });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

// function generateToken(user){
//     const payload = {
//         subject: user.id,
//         username: user.username
//         // and any other data needed
//     };

//     const options = {
//         expiresIn: '1d'
//     };

//     return jwt.sign(payload, secrets.jwtSecret, options);
// }

// module.exports = {
//     jwtSecret: process.env.JWT_SECRET || 'getinlooser'
// }

// router.post('/login', (req, res) => {
//     // let { username, password } = req.body;
//     const username = req.body.username;
//     const password = req.body.password;

//     cationHelpers.findBy({ username })
//     .first()
//     .then(user => {
//         if( user && bcryptjs.compareSync(password, user.password)){
//             // 1 - Set the payload
//             const payload = {
//                 userID: user.id,
//                 username: user.username,
//                 // Eoin.. Should you add a user type here?
//             }
//             // 2 - Decide config
//             const options = {
//                 expiresIn: 60
//             }
//             // 3 - Build and sign the token
//             const token = jwt.sign(
//                 payload,
//                 process.env.JWT_SECRET || 'secret',
//                 options
//             )

//             res.status(200).jsonjson({
//                 message: 'Token is included. See payload.userID for id usage...',
//                 token
//             })
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     });
// });

module.exports = router;