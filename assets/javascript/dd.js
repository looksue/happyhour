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
        // look up the drink recipe
        $.ajax({
            url: queryURL + drinkName,
            method: "GET"
        }).then(function (response) {
            results = response.drinks;
            if (results == null) {
                return;
            }
            if (results.length == 0) {
                return;
            } else {
                // might get multiple drinks, grab the zeroth one
                // put instructions and drink name on screen
                strInstructions = results[0].strInstructions;
                var a = document.getElementById("strDrink");
                a.innerHTML = "Drink Name: " + results[0].strDrink;
                var b = document.getElementById("strInstructions");
                b.innerHTML = "Instructions: " + results[0].strInstructions;


                // Put the ingredients on the screen
                // ========================================================
                // NOTE: the poorly-designed API does not pass ingredients
                // or measures as an array dimension [], it just spits
                // them out as individual columns, so we have to use the
                // evil "eval" function to take a string and the value of i
                // and turn them into a pointer to "strIngredienti".
                // It made the code a lot shorter!
                // ========================================================

                for (i = 1; i <= 15; i++) {
                    if (eval("results[0].strIngredient" + i).trim() !== "") { // skip blank rows
                        var newRow = $("<tr>").append(
                            $("<td>").text(eval("results[0].strIngredient" + i)),
                            $("<td>").text(eval("results[0].strMeasure" + i))
                        )
                        $("#tblDrink > tbody").append(newRow);
                    }
                }

                // give the user an "add to favorites button"

                // if clicked upload the drink to firebase
            }
        });
    };
});

// Function to check letters and numbers
function alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.value.match(letterNumber)) {
        return true;
    } else {
        return false;
    }
};