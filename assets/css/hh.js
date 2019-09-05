//Brian keys

var apiKey= "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg";

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
 
var openBrewApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;
 
var cocktailApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;
 
$.ajax({
  url: queryURL,
  method: "GET"
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

// grab user input/ user types in a submit button with the name of a cocktail-Wynton


 $("#btnBeer").on("click", function(){
    console.log("Beer button clicked");

 });

 $("#btnWine").on("click", function(){
    console.log("Wine button clicked");

 });

 $("#btnCocktail").on("click", function(){
    console.log("Cocktail button clicked");


 });

//create local "temporary" object for holding drink information-Sue
var drinkName = {
    recipe: drinkRecipe,
}

//clear the submit button-Wynton

//create the firebase event for adding the recipe to the database-Brian

//store everything into a variable-Sue
var drinkrecipe = childSnapshot.val().name


// append the new row to the table-Sue
$("#search-table > tbody").append (newRow);



