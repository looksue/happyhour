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
var cocktailAPI = "c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa";
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var drinkName = "";
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
$("#divFavorites").css("display", "block");

            }
        });
    };
});
// give the user an "add to favorites button"
$("#btnFavorites").on("click", function () {
    event.preventDefault();
    // if clicked upload the drink to firebase
    //grab drink properties-name, strInstructions, strIngredient, strMeasure

    drinkName = results[0].strDrink;
    strInstructions = results[0].strInstructions;
    var strIngredient1 = results[0].strIngredient1;
    var strIngredient2 = results[0].strIngredient2;
    var strIngredient3 = results[0].strIngredient3;
    var strIngredient4 = results[0].strIngredient4;
    var strIngredient5 = results[0].strIngredient5;
    var strIngredient6 = results[0].strIngredient6;
    var strIngredient7 = results[0].strIngredient7;
    var strIngredient8 = results[0].strIngredient8;
    var strIngredient9 = results[0].strIngredient9;
    var strIngredient10 = results[0].strIngredient10;
    var strIngredient11 = results[0].strIngredient11;
    var strIngredient12 = results[0].strIngredient12;
    var strIngredient13 = results[0].strIngredient13;
    var strIngredient14 = results[0].strIngredient14;
    var strIngredient15 = results[0].strIngredient15;
    var strMeasure1 = results[0].strMeasure1;
    var strMeasure2 = results[0].strMeasure2;
    var strMeasure3 = results[0].strMeasure3;
    var strMeasure4 = results[0].strMeasure4;
    var strMeasure5 = results[0].strMeasure5;
    var strMeasure6 = results[0].strMeasure6;
    var strMeasure7 = results[0].strMeasure7;
    var strMeasure8 = results[0].strMeasure8;
    var strMeasure9 = results[0].strMeasure9;
    var strMeasure10 = results[0].strMeasure10;
    var strMeasure11 = results[0].strMeasure11;
    var strMeasure12 = results[0].strMeasure12;
    var strMeasure13 = results[0].strMeasure13;
    var strMeasure14 = results[0].strMeasure14;
    var strMeasure15 = results[0].strMeasure15;

    //create new record structure
    var recAddDrink = {
        colDrinkName: drinkName,
        colStrInstructions: strInstructions,
        colStrIngredient1: strIngredient1,
        colStrIngredient2: strIngredient2,
        colStrIngredient3: strIngredient3,
        colStrIngredient4: strIngredient4,
        colStrIngredient5: strIngredient5,
        colStrIngredient6: strIngredient6,
        colStrIngredient7: strIngredient7,
        colStrIngredient8: strIngredient8,
        colStrIngredient9: strIngredient9,
        colStrIngredient10: strIngredient10,
        colStrIngredient11: strIngredient11,
        colStrIngredient12: strIngredient12,
        colStrIngredient13: strIngredient13,
        colStrIngredient14: strIngredient14,
        colStrIngredient15: strIngredient15,
        colStrMeasure1: strMeasure1,
        colStrMeasure2: strMeasure2,
        colStrMeasure3: strMeasure3,
        colStrMeasure4: strMeasure4,
        colStrMeasure5: strMeasure5,
        colStrMeasure6: strMeasure6,
        colStrMeasure7: strMeasure7,
        colStrMeasure8: strMeasure8,
        colStrMeasure9: strMeasure9,
        colStrMeasure10: strMeasure10,
        colStrMeasure11: strMeasure11,
        colStrMeasure12: strMeasure12,
        colStrMeasure13: strMeasure13,
        colStrMeasure14: strMeasure14,
        colStrMeasure15: strMeasure15,
    }
    database.ref().push(recAddDrink);
});
//when new favorite drink is added, fetch and display on screen
database.ref().on("child_added", function (childSnapshot) {
    drinkName = childSnapshot.val().colDrinkName;
    console.log("Drink name: " + drinkName);
    var newRow = $("<tr>").append(
        $("<td>").text(drinkName)
    );
    //append the new row to the table
    $("#tblFavorites").append(newRow);
});


// Function to check letters and numbers
function alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.value.match(letterNumber)) {
        return true;
    } else {
        return false;
    }
}