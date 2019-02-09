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

var delayedPush = function (user) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      usersRef.push(user)
          .then(resolve, reject);
    }, 1);
  });
};


let sess;
router.get('/', function(req, res, next) {
  sess = req.session;
  sess.email = 'orfeas';
  console.log(sess);
  delayedPush({
    name: 'First User',
    time: (new Date()).getTime()
  })
      .then(function() {
        return delayedPush({
          name: 'Second User',
          time: (new Date()).getTime()
        });
      })
      .then(function() {
        return delayedPush({
          name: 'Third User',
          time: (new Date()).getTime()
        });

      })
      .catch(function(err) {
        console.log('error', err);
      });
  res.render('index', { title: 'Express', info:['orfeas,lida','name'] });
});

module.exports = router;
