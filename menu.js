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
    var row = document.createElement("tr");
    var entree = document.createElement("td");
    entree.innerText = entrees[i].name;
    var entreeCost = document.createElement("td");
    entreeCost.innerText = entrees[i].cost;
    var entreeCount = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("name", "entree-" + i);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    input.setAttribute("onchange", "updateCost()");
    entreeCount.appendChild(input);
    row.appendChild(entree);
    row.appendChild(entreeCost);
    row.appendChild(entreeCount);
    document.getElementById("entrees").appendChild(row);
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
