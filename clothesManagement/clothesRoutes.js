const router = require('express').Router();

// const clothesHelperFunctions = require('../clothesManagement/clothesHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({message: 'The test route working works!'})
})

// router.post('/addItem', (req, res) => {
//     const id = req.params.id;
//     const clothesItem = req.body;
//     clothesItem.userID = id;
//     clothesHelperFunctions.addClothes(clothesItem)
//     .then(response => {
//         res.status(201).json(response);
//     })
//     .catch(error => {
//         res.status(500).json('There is an error' + error );
//     });
// });

module.exports = router;