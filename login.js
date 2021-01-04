var college = document.getElementById('college');
var password = document.getElementById('password');
var phone = document.getElementById('phone');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCsBr2qvo2C6w7fZk-b6ZGp7m-usW30Uac",
    authDomain: "myusers-4ce09.firebaseapp.com",
    databaseURL: "https://myusers-4ce09-default-rtdb.firebaseio.com",
    projectId: "myusers-4ce09",
    storageBucket: "myusers-4ce09.appspot.com",
    messagingSenderId: "183553572064",
    appId: "1:183553572064:web:cb125687e15ee903c6e485",
    measurementId: "G-BJL1L1DYVN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  function start() {
    var database = firebase.database();
    var data1 = [];
    var ref1 = database.ref("users/"+college.value);
    ref1.on("value",function(snapshot){
      snapshot.forEach(function(childSnapshot) {
          data1.push(childSnapshot.val());
         
      });
     console.log(data1);   
      if(password.value == data1[0]  && phone.value == data1[1]){
        window.location = '/round1/'    
    }
    else
     alert('please enter correct credentials....');

      })
  
  }