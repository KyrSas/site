let r = document.getElementById("res").innerHTML;
var res = +r;



document.getElementById("plus").onclick = function () {
    let number = document.getElementById("panel").value;
    let numb = +number;

    document.getElementById("res").innerHTML = res += numb;
}

document.getElementById("minus").onclick = function () {
    let number = document.getElementById("panel").value;
    let numb = +number;

    document.getElementById("res").innerHTML = res -= numb;
}
