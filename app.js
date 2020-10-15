"use strict";

function getDogImage(userNum) {
    if (userNum < 50 && userNum > 0) {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch (error => alert("Technical difficulties.  Please try again later!"));
     } else if (userNum > 50 || userNum < 1) {
        return alert("Please enter a value between 0 and 50");
}}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".results").html("");
    responseJson.message.forEach(imgReturned => {
        $(".results").append(`<img src="${imgReturned}" class="results">`);
    });
    $(".results").removeClass("hidden");
}

function watchForm() {
    $("#dog-number-form").submit(e => {
        e.preventDefault();
        let userNum = $(`#dog-number-user`).val();
        getDogImage(userNum);
    });
}

$(function () {
    console.log('App is alive, waiting for input!');
    watchForm();
});