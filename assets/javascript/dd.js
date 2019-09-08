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
var strInstructions = "";
var results = "";

// grab user input/ user types in a submit button with the name of a cocktail-Wynton
$("#btnSubmit").on("click", function () {
    event.preventDefault();
    drinkName = $("#drinkName").val().trim();

    //  check for required field
    if (drinkName == "") {
        return;
    } else {
        // get the drink name from the user
        queryURL = queryURL + drinkName;

        // look up the drink recipe
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            results = response.drinks;
            if (results.length == 0) {
                return;
            } else {
                //might get multiple drinks, grab the zeroth one
                // grab instructions into a variable
                strInstructions = results[0].strInstructions;
                alert (strInstructions);
                //loop through ingredients 1-15

                //if ingredient isn't blank, put it and measure in a variable

                //strIngredient1-15 and strMeasure1-15

                //print them out to the screen as a table

                //give the user an add to favorites button

                //if clicked upload the drink to firebase
            }
        });

        /*
      
        
            database.ref().push(drinkName);
        
            var newRow = $("<tr>").append(
                $("<td>").text(drinkName),
                $("<td>").text(ingredients),
            );*/

        //create the firebase event for adding the recipe to the database-Brian

        //store everything into a variable-Sue
        //firebase function childsnapshot drinkRecipe = database.child.snapShot.val().name

        //create a new row to add recipe-Willaim

        // append the new row to the table-Sue
        //$("#search-table > tbody").append(newRow);

        // reset the drink name field
        // $("#drinkName").val("");

    }
});

// Function to check letters and numbers
function alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    /*if (inputtxt.value.match(letterNumber)) {
        return true;
    } else {
        return false;
    }*/
}
