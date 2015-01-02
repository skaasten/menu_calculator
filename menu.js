var appetizers = [
    { "name": "Salmon", "cost": 19 },
    { "name": "Bison", "cost": 18 },
    { "name": "Duck", "cost": 18 }
];

for (var i=0; i<appetizers.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", appetizers[i].cost);
    option.innerText= appetizers[i].name + ":" + appetizers[i].cost;
    document.getElementsByName("appetizer")[0].appendChild(option);
}

var entrees = [
    { "name": "chicken", "cost": 25 },
    { "name": "steak", "cost": 30 }
];

for (i=0; i < entrees.length; i++) {
    var entree = document.createElement("div");
    entree.innerText = entrees[i].name + ":" + entrees[i].cost;
    var input = document.createElement("input");
    input.setAttribute("name", "entree-" + i);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    input.setAttribute("onchange", "updateCost()");
    entree.appendChild(input);
    document.getElementById("entrees").appendChild(entree);
}

function updateCost() {
    var appetizersCost = Number.parseInt(document.getElementById("appetizer").value);
    var entreesCost = 0;
    for (i=0; i < entrees.length; i++) {
        entreesCost += Number.parseInt(document.getElementsByName("entree-" + i)[0].value) * entrees[i].cost;
    }
    var totalCost = appetizersCost + entreesCost;
    document.getElementById("total").innerText = totalCost;
}
