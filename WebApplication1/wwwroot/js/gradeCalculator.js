//Alex Wirick
//Mission 4
//Section 2
//This js file calculates the total grade based on the user inputs on the form in index.html. It takes the percentage for each category and multiplies it by the category weight
//Then, the function changes the value of the readonly inputs on the html file to show the user's final grade
$("#submitForm").click(function () {
    var assignments = ($("#assignments").val() * .5);
    var projects = ($("#projects").val() * .1);
    var quizzes = ($("#quizzes").val() * .1);
    var midterm = ($("#midterm").val() * .1);
    var final = ($("#final").val() * .1);
    var intex = ($("#intex").val() * .1);
    var finalScore = assignments + projects + quizzes + midterm + final + intex;
    $("#finalGrade").val(finalScore);
    var letter;
    if (finalScore >= 94) {
        letter = "A"
    } else if (finalScore >= 90) {
        letter = "A-"
    } else if (finalScore >= 87) {
        letter = "B+"
    } else if (finalScore >= 84) {
        letter = "B"
    } else if (finalScore >= 80) {
        letter = "B-"
    } else if (finalScore >= 77) {
        letter = "C+"
    } else if (finalScore >= 74) {
        letter = "C"
    } else if (finalScore >= 70) {
        letter = "C-"
    } else if (finalScore >= 67) {
        letter = "D+"
    } else if (finalScore >= 64) {
        letter = "D"
    } else if (finalScore >= 60) {
        letter = "D-"
    } else {
        letter = "E"
    }
    $("#letter").val(letter);
})