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
                // might get multiple drinks, grab the zeroth one
                // put instructions and drink name on screen
                strInstructions = results[0].strInstructions;
                var a = document.getElementById("strDrink");
                a.innerHTML = "Drink Name: " + results[0].strDrink;
                var b = document.getElementById("strInstructions");
                b.innerHTML = "Instructions: " + results[0].strInstructions;

                // put all 15 ingredients and measures on the screen
                // strIngredient1-15 and strMeasure1-15

                // create a new row in a variable
                // NOTE: the API does not pass ingredients and
                // measures as an array dimension, it just spits
                // them out as individual columns
                var newRow1 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient1),
                    $("<td>").text(results[0].strMeasure1)
                );
                var newRow2 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient2),
                    $("<td>").text(results[0].strMeasure2)
                );
                var newRow3 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient3),
                    $("<td>").text(results[0].strMeasure3)
                );
                var newRow4 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient4),
                    $("<td>").text(results[0].strMeasure4)
                );
                var newRow5 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient5),
                    $("<td>").text(results[0].strMeasure5)
                );
                var newRow6 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient6),
                    $("<td>").text(results[0].strMeasure6)
                );
                var newRow7 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient7),
                    $("<td>").text(results[0].strMeasure7)
                );
                var newRow8 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient8),
                    $("<td>").text(results[0].strMeasure8)
                );
                var newRow9 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient9),
                    $("<td>").text(results[0].strMeasure9)
                );
                var newRow10 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient10),
                    $("<td>").text(results[0].strMeasure10)
                );
                var newRow11 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient11),
                    $("<td>").text(results[0].strMeasure11)
                );
                var newRow12 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient12),
                    $("<td>").text(results[0].strMeasure12)
                );
                var newRow13 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient13),
                    $("<td>").text(results[0].strMeasure13)
                );
                var newRow14 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient14),
                    $("<td>").text(results[0].strMeasure14)
                );
                var newRow15 = $("<tr>").append(
                    $("<td>").text(results[0].strIngredient15),
                    $("<td>").text(results[0].strMeasure15)
                );

                // append the new rows to the table

                // give the user an add to favorites button

                // if clicked upload the drink to firebase
            }
        }

        /*
            database.ref().push(drinkName);

        //create the firebase event for adding the recipe to the database-Brian

        //store everything into a variable-Sue
        //firebase function childsnapshot drinkRecipe = database.child.snapShot.val().name

        //create a new row to add recipe-Willaim

        // append the new row to the table-Sue
        //$("#search-table > tbody").append(newRow);

        // reset the drink name field
        // $("#drinkName").val("");
        */
    };
});

// Function to check letters and numbers
function alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    /*if (inputtxt.value.match(letterNumber)) {
    return true;
} else {
    return false;
}*/

