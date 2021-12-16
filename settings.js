let r = document.getElementById("res").innerHTML;
var res = +r;
var checkbox = document.getElementById("checkbox");




document.getElementById("one").onclick = function () {
    let number = document.getElementById("one").value;
    let numb = +number;
    if (checkbox.checked) {
        numb *= 1;


    } else {
        numb *= -1;
    };
    document.getElementById("res").innerHTML = res += numb;
}
document.getElementById("two").onclick = function () {
    let number = document.getElementById("two").value;
    let numb = +number;
    if (checkbox.checked) {
        numb *= 1;


    } else {
        numb *= -1;
    };
    document.getElementById("res").innerHTML = res += numb;
}
document.getElementById("three").onclick = function () {
    let number = document.getElementById("three").value;
    let numb = +number;
    if (checkbox.checked) {
        numb *= 1;


    } else {
        numb *= -1;
    };
    document.getElementById("res").innerHTML = res += numb;
}
