var firebase = require('firebase');


var app = firebase.initializeApp({
    apiKey: "AIzaSyDZZbKWz5B2ofJAkbI_jw2u51aPdNnNmO0",
    authDomain: "avocado-backend.firebaseapp.com",
    databaseURL: "https://avocado-backend.firebaseio.com",
    projectId: "avocado-backend",
    storageBucket: "avocado-backend.appspot.com",
    messagingSenderId: "219538454820"
  });

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  function addImage() {
      firebase.storage()
  }

  writeUserData("test1", "test1", "test@gmail.com", "test.png");