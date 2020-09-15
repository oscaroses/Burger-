$(document).ready(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-btn").on("click", function () {
        console.log("hi");
        var id = $(this).attr("data-burger");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            devoured: true
        }).then(
            function () {
                console.log("you ate the burger!");
                location.reload();
            }
        );
    })

});