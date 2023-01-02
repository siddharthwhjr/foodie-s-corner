username = localStorage.getItem("username")
var firebaseConfig = {
    apiKey: "AIzaSyAFJ7qATQot5t_10UOUtDFcao-4-xNkVeE",
    authDomain: "foodie-s-corner-35314.firebaseapp.com",
    databaseURL: "https://foodie-s-corner-35314-default-rtdb.firebaseio.com",
    projectId: "foodie-s-corner-35314",
    storageBucket: "foodie-s-corner-35314.appspot.com",
    messagingSenderId: "1000063033010",
    appId: "1:1000063033010:web:bafcbd49230349e7baf3ab"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function chicken_pizza(){
    firebase.database().ref("/").child(username).update({
        order: "chicken_pizza"
  });
}