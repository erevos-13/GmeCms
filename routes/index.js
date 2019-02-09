const express = require('express');
const router = express.Router();
const firebase = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://test-167d1.firebaseio.com"
});
var ref = firebase.app().database().ref();
var usersRef = ref.child('users');



let sess;
router.get('/', function(req, res, next) {
  sess = req.session;
  sess.email = 'orfeas';
  console.log(sess);
usersRef.push({
    name: 'First User',
    time: (new Date()).getTime()
}).then();
  res.render('index', { title: 'Express', info:['orfeas,lida','name'] });
});

module.exports = router;
