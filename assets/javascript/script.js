// Instructions
// Create a game that suits this user story:

// Only two users can play at the same time.

// Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

// The game will track each player's wins and losses.

// Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

// Styling and theme are completely up to you. Get Creative!

// Deploy your assignment to Github Pages.

// Create a README.md
// Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way: - SEE LINK ABOUT READMEs


// Add To Your Portfolio
// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-5azbg_h35prAIaUdbDFt82UdZ1Lp_iQ",
  authDomain: "rps-multiplayer-baber.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-baber.firebaseio.com",
  projectId: "rps-multiplayer-baber",
  storageBucket: "rps-multiplayer-baber.appspot.com",
  messagingSenderId: "1034800387816"
};
firebase.initializeApp(config);
var database = firebase.database();

// Presence Reference
var connectedRef = database.ref(".info/connected");


var playerCt=0;
// This var will keep the data key of the player removed
// var childRemoved = 1;
  

// // This function will tell us which player was removed
// database.ref("players/").on("child_removed", function(data) {
//   console.log(data.key);
//   childRemoved = data.key;
//     // console.log(data.val());
//     // var playersRef = database.ref("players/").child(data.key);
//     // console.log(playersRef);
//     // playersRef.remove();
//     // turnRef.onDisconnect().remove();
// });

database.ref("players/").on("value", function(snap) {
  // console.log(snap.numChildren());
  // console.log(snap.val().length);
  // console.log(snap.val());
  playerCt = (snap.numChildren());
  // console.log(playerCt);
})

$("#player-name-submit").on("click", function(e) {
  // Presence Function
  connectedRef.on("value", function(snap) {
    if(snap.val()) {
      var playersRef = database.ref("players/" + playerCt);
      playersRef.onDisconnect().remove();
      // turnRef.onDisconnect().remove();
    }
  });

  e.preventDefault();
  var newPlayer = $("#player-name-input").val().trim();
 
 var player0Exists = database.ref("0").on("value",function (snapshot) {
  snapshot.exists();
});
 



  // Max 2 Players
  if (playerCt < 2) {

        if(checkForPlayer0()) {
          debugger;
          addPlayer(newPlayer, 0)
        } else {
          debugger;
          addPlayer(newPlayer, playerCt);
        }


      // if(!database.ref("players/0").exists) {
      //   debugger;
      //   addPlayer(newPlayer, 0);
      // } else {
      //   debugger;
      //   addPlayer(newPlayer, playerCt);
      // }
    
  }
});

function addPlayer(newPlayer, position) {
  database.ref("players/" + position).set({
    name: newPlayer,
    wins: 0,
    losses: 0
  });
}

function checkForPlayer0 () {
database.ref().equalTo("0").once("value", function(snapshot) {
  return snapshot.exists();

})
}




    // chat-message
  // display-message

  // Runs when a change is made 
  // database.ref().on("value", function(snapshot) {
  //   $("#chat-message-log").append(snapshot.val().chatMessage + "\n");
  // });

  // $("#message-button").on("click", function(e) {
  //   e.preventDefault();
  //   var message = $("#my-message-input").val();
  //     console.log(message);
  //   database.ref().set({
  //     chatMessage:message
  //   });
  // })

//   var playerCounter;  
//   var player1="";
//   var player2="";

//   var playersRef = database.ref("players/");
//   var connectedRef = database.ref(".info/connected");
//   var turnRef = database.ref("turn/");

//   var name1Ref = $("#name1");
//   var name2Ref = $("#name2");



//   playersRef.on("value", function(snap) {
//     playerCounter = snap.numChildren();
//     console.log(snap.val());
//     console.log(playerCounter);
//   });



// // ADD PLAYER ONCLICK FUNCTION

// $("#player-name-submit").on("click", function(e) {
//   var name;
//   // Presence Function
//   connectedRef.on("value", function(snap) {
//     if(snap.val()) {
//       console.log(snap.val());
//       e.preventDefault();
//       var playersRef = database.ref("players/" + (playerCounter + 1));
//       playersRef.onDisconnect().remove();
//       turnRef.onDisconnect().remove();
//     }

//     // 2 Players Max
//     if (playerCounter < 2) {
//       name = $("#player-name-input").val().trim();
//       // Set user objects in firebase
//       playersRef.set({
//         name: name,
//         losses: 0,
//         wins: 0
//       });
//       // Remove player form
//       $(".form-inline").hide();
//       // Show player welcome for each player
//       $(".player-welcome").html(`Hi ${name}! You are Player ${playerCounter}`).attr("data-name", name).attr("data-num", playerCounter);

//         var dbName1Ref = database.ref("players/1").child("name");
//         dbName1Ref.on("value", function (snap) {
//           console.log(snap.val());
//           if (snap.val()) {
//             $("#rps-choice-p1").text(snap.val());
//           }
//         });
        
        
//         var dbName2Ref = database.ref("players/2").child("name");
//         dbName2Ref.on("value", function (snap) {
//           console.log(snap.val());
//           if (snap.val()) {
//             $("#rps-choice-p2").text(snap.val());
//           }
//         });
        

        

//         playRPS();
//     }
//   });
// });

// function playRPS() {
//   database.ref().update({turn: 1});
//   //REFERENCE ELEMENT WITH DATA-NUM
// }
