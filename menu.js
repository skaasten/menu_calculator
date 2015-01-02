var salads = [
    { "name": "None", "cost": 0 },
    { "name": "Traditional Greens", "cost": 12}
];

var appetizers = [
    { "name": "None", "cost": 0 },
    { "name": "Gnocchi", "cost": 18}
];

for (var i=0; i < appetizers.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", appetizers[i].cost);
    option.innerText= appetizers[i].name + ":" + appetizers[i].cost;
    document.getElementsByName("appetizer")[0].appendChild(option);
}

for (var i=0; i < salads.length; i++) {
    option = document.createElement("option");
    option.setAttribute("value", salads[i].cost);
    option.innerText= salads[i].name + ":" + salads[i].cost;
    document.getElementsByName("salad")[0].appendChild(option);
}

var entrees = [
    { "name": "Half Roasted Chicken", "cost": 42},
    { "name": "Veggie", "cost": 32 },
    { "name": "Steak Tenderloin", "cost": 46}
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
    var saladCost = Number.parseInt(document.getElementById("salad").value);
    var appetizersCost = Number.parseInt(document.getElementById("appetizer").value);

    var totalEntreesCount = 0, totalEntreesCost = 0;
    for (i=0; i < entrees.length; i++) {
        var count = Number.parseInt(document.getElementsByName("entree-" + i)[0].value);
        totalEntreesCost += count * entrees[i].cost;
        totalEntreesCount += count;
    }
    var totalCost = totalEntreesCost + (appetizersCost * totalEntreesCount) + (saladCost * totalEntreesCount);
    document.getElementById("totalCost").innerText = totalCost;
    document.getElementById("totalOrders").innerText = totalEntreesCount;
    document.getElementById("saladCount").innerText = totalEntreesCount;
    document.getElementById("appetizersCount").innerText = totalEntreesCount;
    document.getElementById("costPerGuest").innerText = totalCost / totalEntreesCount;
}
