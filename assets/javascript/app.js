$(document).ready(
    function employeeTracker() {
        var employeeName
        var role
        var startDate
        var monthleyRate
        
        // when submit button click
        $("#submit-button").on("click", function (e) {
            e.preventDefault();
            // get the values from input field
            employeeName = $("#employee-name").val().trim();
            console.log(employeeName);
            role = $("#role").val().trim();
            console.log(role);
            startDate = $("#start-date").val().trim();
            console.log(startDate);
            monthleyRate = $("#monthley-rate").val().trim();
            console.log(monthleyRate);
        })

    }

);