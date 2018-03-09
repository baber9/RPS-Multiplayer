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

  