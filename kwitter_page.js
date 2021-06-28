//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD9VMqA_AraZi4dyLtlGWeLr2HSHGjw4lg",
      authDomain: "kwitter-a1790.firebaseapp.com",
      databaseURL: "https://kwitter-a1790-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1790",
      storageBucket: "kwitter-a1790.appspot.com",
      messagingSenderId: "353121498876",
      appId: "1:353121498876:web:e189affd7a5bd6ddb84979"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {
room_name=localStorage.getItem("room_name");
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("username");


function send(){
msg=document.getElementById("msg").value;
room_name=localStorage.getItem("room_name");
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").innerHTML="";
}