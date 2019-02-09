var express = require('express');
var router = express.Router();
const firebase = require("firebase-admin");


router.get('/', (req, res) => {
    res.render('send-message', {
        data: {},
        errors: {}
    })
});

router.post('/', (req, res) => {
    res.render('send-message', {
        data: req.body, // { message, email }
        errors: {
            message: {
                msg: 'A message is required'
            },
            email: {
                msg: 'That email doesn‘t look right'
            }
        }
    });
    console.log(req.body);
});

module.exports = router;
