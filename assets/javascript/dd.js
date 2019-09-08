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
  var database = firebase.database()
  var cocktailApi = "c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa";
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  var drinkName = "";
  var ingredients = "";
  var drinkRecipe = "";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
    console.log(response);
});

database.ref().push(drinkName);

var newRow = $("<tr>").append(
    $("<td>").text(drinkName),
    $("<td>").text(ingredients),
    );


// grab user input/ user types in a submit button with the name of a cocktail-Wynton
$("#btnSubmit").on("click", function(){
    console.log("Submit button clicked");
    });
//create local "temporary" object for holding drink information-Sue
var drinkName = {
    recipe: drinkRecipe,
}

//upload the drink data to the database-Willaim

//clear the search bar-Wynton
$("#input").val("");
//create the firebase event for adding the recipe to the database-Brian

//store everything into a variable-Sue
//firebase function childsnapshot drinkRecipe = database.child.snapShot.val().name

//create a new row to add recipe-Willaim

// append the new row to the table-Sue
$("#search-table > tbody").append (newRow);



   