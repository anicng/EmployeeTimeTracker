var firebaseConfig = {
    apiKey: "AIzaSyA8lVbDKOGTcVzCI4lZu-lcWg-te2PKa6g",
    authDomain: "test-f22a8.firebaseapp.com",
    databaseURL: "https://test-f22a8.firebaseio.com",
    projectId: "test-f22a8",
    storageBucket: "test-f22a8.appspot.com",
    messagingSenderId: "713836356992",
    appId: "1:713836356992:web:e15611503c0871c6568d65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


$(document).ready(
    function employeeTracker() {
        
        // when submit button click
        $("#submit-button").on("click", function (e) {
            e.preventDefault();
            // get the values from input field
            var employeeName = $("#employee-name").val().trim();
            console.log(employeeName);
            var role = $("#role").val().trim();
            console.log(role);
            var startDate = $("#start-date").val().trim();
            console.log(startDate);
            var monthleyRate = $("#monthley-rate").val().trim();
            console.log(monthleyRate);
            
            database.ref().push({
                name: employeeName,
                role: role,
                startDate: startDate,
                monthleyRate: monthleyRate
            })
        })

        

    }

);