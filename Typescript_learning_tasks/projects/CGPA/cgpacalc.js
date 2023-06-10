var gradeVal = { "S": 10, "A": 9, 'B': 8, 'C': 7, 'D': 6, 'E': 4 };
var calculateGPA = function () {
    var cgpa = ((gradeVal[document.getElementById('ma').value.toUpperCase().toUpperCase()] + gradeVal[document.getElementById('ph').value.toUpperCase()] + gradeVal[document.getElementById('cy').value.toUpperCase()]) * 10
        + (gradeVal[document.getElementById('hs').value.toUpperCase()] + gradeVal[document.getElementById('oe').value.toUpperCase()]) * 9) / 48;
    var cgpaElement = document.getElementById('cgpaValue');
    cgpaElement.innerText = cgpa.toFixed(2);
};
