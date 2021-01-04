var firebaseConfig = {
    apiKey: "AIzaSyClFFh3DHgcAbk2G1_I3RQr9OtFePf-C8k",
    authDomain: "csemegaproject-5e3f5.firebaseapp.com",
    projectId: "csemegaproject-5e3f5",
    storageBucket: "csemegaproject-5e3f5.appspot.com",
    messagingSenderId: "57601641000",
    appId: "1:57601641000:web:078b68b952a38e592c431d",
    measurementId: "G-7QKDXBFPHJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 var data=[];
  var databse = firebase.database();
 


alert('Let the Fun begins....Press okay to start the game..!!');


  document.getElementById('timer').innerHTML = 055 + ":" + 00;
  startTimer();
  
  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0)
    {alert('Oopps!! Time Up......')
    window.location = '/thank.html';
  }
    
    document.getElementById('timer').innerHTML =
      m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  } 








var ld1 = 12;
var ld2 = 22;
var ld3 = 60;
var ld4 = 70

var crct = 0;
var wrong = 0;

var position = 0;

var question = document.getElementById('questions');
var qn = document.getElementById('question');
question.style.visibility = 'hidden'
document.getElementById('options').style.visibility = 'hidden';
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
 
  var arr = ['a','b','c','d'];
  shuffle(arr);
  j=0;
  display(j);
  
 function display(j) {
    var card1 = document.getElementById('one');
  var card2 = document.getElementById('two');
  var card3 = document.getElementById('three');
  if (arr[j]!=null) {
    card1.setAttribute('value',arr[j]);
    card1.setAttribute('onclick',"show('"+arr[j]+"',"+1+")");
}
  if(arr[j+1]!=null){
    card2.setAttribute('value',arr[j+1]);
    card2.setAttribute('onclick',"show('"+arr[j+1]+"',"+2+")");
  }
  if(arr[j+2]!=null){
    card3.setAttribute('value',arr[j+2]);
    card3.setAttribute('onclick',"show('"+arr[j+2]+"',"+3+")");
  }
   
  
    
 }

var completed = [];

 function show(x,i) {
 //   alert('you clicked '+x);
   localStorage.setItem('cardvalue',x);
    var card1 = document.getElementById('one');
    var card2 = document.getElementById('two');
    var card3 = document.getElementById('three');
    if (i==1) {
        card1.disabled = true;
        card2.style.visibility = 'hidden';
        card3.style.visibility = 'hidden';
    }
    if (i==2) {
        card2.disabled = true;
        card1.style.visibility = 'hidden';
        card3.style.visibility = 'hidden';
    }
    if (i==3) {
        card3.disabled = true;
        card1.style.visibility = 'hidden';
        card2.style.visibility = 'hidden';
    }
     completed.push[x];
     arr.splice(arr.indexOf(x),1);
     question.style.visibility  = 'visible';
     document.getElementById('options').style.visibility = 'visible';
  data = [];
     var ref1 = databse.ref(x);
     ref1.on("value",function(snapshot){
       snapshot.forEach(function(childSnapshot) {
           data.push(childSnapshot.val());
          
       });
       console.log(data);
       qn.innerHTML = data[0];
      
   });
 }


 function move(i) {
   data = [];
    var cardvalue = localStorage.getItem('cardvalue');
    var ref1 = databse.ref(cardvalue);
    ref1.on("value",function(snapshot){
      snapshot.forEach(function(childSnapshot) {
          data.push(childSnapshot.val());
         
      });
     /* console.log(data);
      qn.innerHTML = data[0];*/

     if(data[1] == i){ 
    shift(i);
    var card1 = document.getElementById('one');
    var card2 = document.getElementById('two');
    var card3 = document.getElementById('three');
    card1.disabled = false;
    card2.disabled = false;
    card3.disabled = false;
     shuffle(arr);
     j=0;
     display(j);
     card1.style.visibility = 'visible';
     card2.style.visibility = 'visible';
     card3.style.visibility = 'visible';

     question.style.visibility  = 'hidden';
     qn.innerHTML = "";
    document.getElementById('options').style.visibility = 'hidden';
    crct++;
     }
     else{
         wrong++;
         
         if (wrong<3) {
             alert('You got a snake bite for '+ wrong +' time and you have only ' + (3-wrong) +' lifes');
             if(position != 0){
                document.getElementById('coin').remove();
                 position = 0;
                 shift(1);
             }
            var card1 = document.getElementById('one');
            var card2 = document.getElementById('two');
            var card3 = document.getElementById('three');
            card1.disabled = false;
            card2.disabled = false;
            card3.disabled = false;
             shuffle(arr);
             j=0;
             display(j);
             card1.style.visibility = 'visible';
             card2.style.visibility = 'visible';
             card3.style.visibility = 'visible';
             question.style.visibility  = 'hidden';
             qn.innerHTML = "";
            document.getElementById('options').style.visibility = 'hidden';
         }
         else{
          alert('you are eliminated');
          window.location = '/thank.html';
         }
     }
})

console.log(crct+" "+wrong);
 }

 function shift(i){
    if (position!=0) {
        document.getElementById('coin').remove();
    }
    if (position+i < 100) {
   
       if (position + i == ld1) {
           position = 47;
       }
       else if (position+i == ld2) {
           position = 85;
       }
       else if (position + i == ld3) {
           position = 80;
       }
       else if(position+i == ld4){
           position = 89;
       }
       else
       position = position + i;
    } 
    else if(position+i == 100){
        window.location = '/thank.html';
    }
    else
     position = position;
     
     //alert('current pos : '+position);
    
    var ne = document.createElement('i');
    ne.setAttribute('class','fa fa-male fa-2x');
    ne.setAttribute('style','color:#f00');
    ne.setAttribute('aria-hidden','true');
    ne.setAttribute('id','coin');
    document.getElementById(position).appendChild(ne);
 }
