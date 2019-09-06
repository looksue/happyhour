var apiKey= "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg";
var openBrewApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;
var cocktailApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;

var Config = {
    apiKey: "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg",
    authDomain: "designateddrinker-e35a3.firebaseapp.com",
    databaseURL: "https://designateddrinker-e35a3.firebaseio.com",
    projectId: "designateddrinker-e35a3",
    storageBucket: "",
    messagingSenderId: "545274280980",
    appId: "1:545274280980:web:93778394c39fcbf1"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  // Reference database service
  var database = firebase.database();

  //adding event listener for the submit button
  $("#btnSubmit").on("click", function() {
      event.preventDefault();
  }
 
 //grab user input
 var cocktail = $("#drinkName").val();

 //create local vars for drink data /How do you use one input for two results?
 var addCocktail = {
 tblOptionOne: drinkName,
 tblOtptionTwo: drinkName,
 };


    $.ajax({
  url: queryURL,
  method: "GET",
}).then(function(response){
});
//upload the drink data to the database-Willaim
database.ref().push(drinkName);

//create a new row to add recipe-Willaim
var newRow = $("<tr>").append(
    $("<td>").text(drinkName),
    $("<td>").text(Ingredients),
    );
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
//create the firebase event for adding the recipe to the database-Brian

//clear the submit button-Wynton

//create local "temporary" object for holding drink information-Sue

//store everything into a variable-Sue
var cocktail = childSnapshot.val().name


// append the new row to the table-Sue
$("#search-table > tbody").append (newRow);



