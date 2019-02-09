var express = require('express');
var router = express.Router();
const firebase = require("firebase-admin");

var ref = firebase.app().database().ref();
var usersRef = ref.child('users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  let email = req.session.email;
  console.log(email);
  return new Promise(function (resolve, reject) {
    usersRef.on('value',(data,error)=>{
      var fruits = data.val();
      // Grab the keys to iterate over the object
      var keys = Object.keys(fruits);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // Look at each fruit object!
        var fruit = fruits[key];
        console.log(fruit);
      }
    })
  });
  res.send('users');
});

module.exports = router;
