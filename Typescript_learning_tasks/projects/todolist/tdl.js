var a = 0;
var titleinput = document.getElementById("title");
var descinput = document.getElementById("description");
var submitted = function () {
    a++;
    var inithtml = document.getElementById("tablebody").innerHTML;
    document.getElementById("tablebody").innerHTML = "\n    ".concat(inithtml, "            \n    <tr id=").concat(a, ">\n        <td>\"#\"</td>\n        <td>\n            <h5>").concat(titleinput.value, "</h5>\n            <p>").concat(descinput.value, "</p>\n        </td>\n        <td><button id=\"delete\" class=\"btn btn-danger\" onclick=\"del(").concat(a, ")\">Delete</button></td>\n    </tr>");
    descinput.value = "";
    titleinput.value = "";
};
var del = function (a) {
    document.getElementById("".concat(a)).remove();
};
