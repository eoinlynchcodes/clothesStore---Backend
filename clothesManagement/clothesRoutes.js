const router = require('express').Router();

const clothesHelperFunctions = require('../clothesManagement/clothesHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({message: 'The test route working works!'})
})

router.post('/addItem', (req, res) => {

    clothesHelperFunctions.addClothes(req.body)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json('There is an error' + error );
    });
});


module.exports = router;