let res = document.getElementById("res");


document.getElementById("plus").onclick = function () {
    let countPlus = res.innerHTML;
    res.innerHTML++;
}

document.getElementById("minus").onclick = function () {
    let countMinus = res.innerHTML;
    res.innerHTML--;
}
