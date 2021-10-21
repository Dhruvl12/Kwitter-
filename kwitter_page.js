const firebaseConfig = {
      apiKey: "AIzaSyA4XuTsYxs8m0NCR8gbhRkyOsUZsIjOvfg",
      authDomain: "kwitter-59fc6.firebaseapp.com",
      databaseURL: "https://kwitter-59fc6-default-rtdb.firebaseio.com",
      projectId: "kwitter-59fc6",
      storageBucket: "kwitter-59fc6.appspot.com",
      messagingSenderId: "195843257005",
      appId: "1:195843257005:web:37ce55b0cfe1e6c5a5cc24"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
Name_with_tag = "<h4>"+Name+b<img class 'user_tick'src 'tick.png'></h4>
message_with_tag = "<h4>"class = 'message_h4'>+message+</h4>

//End code
      } });  }); }
getData();
