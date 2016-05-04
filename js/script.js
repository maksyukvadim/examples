document.getElementById('btn').onclick = function () {
    var a = document.getElementById("login");
    var b = document.getElementById("comment");
    var c = document.getElementById("container-fluid1");
    var login = 'Вадим Максюк';
    var newA = a.cloneNode(true);
    var newB = b.cloneNode(true);
    moment.locale();
    var data = moment().format("DD MMMM YYYY");
    var text = document.getElementById("inp").value;
    if (text == "") return;
    newA.firstElementChild.firstElementChild.lastElementChild.innerHTML = data;
    newA.firstElementChild.firstElementChild.firstElementChild.innerHTML = login;
    newB.firstElementChild.firstElementChild.innerHTML = text;
    document.getElementById("inp").value = "";
    c.appendChild(newA);
    c.appendChild(newB);
};
